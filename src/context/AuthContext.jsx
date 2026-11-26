import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "sietk_study_user";
const PROGRESS_KEY = "sietk_study_progress";
const STUDYPLAN_KEY = "sietk_study_plan";
const APPEARANCE_KEY = "sietk_study_appearance";

export const ROLES = [
  { key: "student", label: "Student", color: "blue" },
  { key: "teacher", label: "Teacher", color: "indigo" },
  { key: "admin", label: "Admin", color: "emerald" },
  { key: "designer", label: "Designer", color: "pink" },
  { key: "engineer", label: "Engineer", color: "orange" },
  { key: "professor", label: "Professor", color: "purple" },
];

const defaultUser = {
  id: null,
  name: "",
  email: "",
  role: "student",
  branch: "CSE",
  semester: 2,
  firstLogin: true,
  profileComplete: false,
};

const defaultAppearance = {
  theme: "light", // light | dark | system
  accent: "indigo", // see ACCENTS in Settings.jsx
};

// Accent palettes — CSS variable overrides for brand shades
export const ACCENTS = {
  indigo: { 50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b" },
  cyan:   { 50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344" },
  emerald:{ 50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22" },
  rose:   { 50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519" },
  amber:  { 50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03" },
  violet: { 50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065" },
  sky:    { 50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49" },
  slate:  { 50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617" },
};

const initialProgress = {};
const initialStudyPlan = {};

export const AuthContext = createContext(null);

function loadAppearance() {
  try {
    const raw = localStorage.getItem(APPEARANCE_KEY);
    return raw ? { ...defaultAppearance, ...JSON.parse(raw) } : { ...defaultAppearance };
  } catch {
    return { ...defaultAppearance };
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultUser };
      const parsed = JSON.parse(raw);
      // Backward compatibility: existing users with a name have a complete profile
      if (parsed.name && parsed.profileComplete === undefined) parsed.profileComplete = true;
      return { ...defaultUser, ...parsed };
    } catch {
      return { ...defaultUser };
    }
  });

  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      return raw ? JSON.parse(raw) : initialProgress;
    } catch {
      return initialProgress;
    }
  });

  const [studyPlan, setStudyPlan] = useState(() => {
    try {
      const raw = localStorage.getItem(STUDYPLAN_KEY);
      return raw ? JSON.parse(raw) : initialStudyPlan;
    } catch {
      return initialStudyPlan;
    }
  });

  const [appearance, setAppearance] = useState(loadAppearance);

  // Persist
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); }, [user]);
  useEffect(() => { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }, [progress]);
  useEffect(() => { localStorage.setItem(STUDYPLAN_KEY, JSON.stringify(studyPlan)); }, [studyPlan]);
  useEffect(() => { localStorage.setItem(APPEARANCE_KEY, JSON.stringify(appearance)); }, [appearance]);

  // Apply appearance: theme attribute + accent CSS variables
  useEffect(() => {
    const root = document.documentElement;
    let resolved = appearance.theme;
    if (appearance.theme === "system") {
      resolved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    root.setAttribute("data-theme", resolved);

    const palette = ACCENTS[appearance.accent] || ACCENTS.indigo;
    Object.entries(palette).forEach(([shade, hex]) => {
      root.style.setProperty(`--color-brand-${shade}`, hex);
    });
    root.style.setProperty("--accent-main", palette[500]);
    root.style.setProperty("--accent-light", palette[100]);
  }, [appearance]);

  // Login is now minimal — no profile fields. Profile is created in Settings.
  const login = useCallback(({ email, role }) => {
    const name = (email || "user").split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const newUser = {
      id: uuidv4(),
      name,
      email: email || "",
      role: role || "student",
      branch: "CSE",
      semester: 2,
      firstLogin: true,
      profileComplete: false,
    };
    setUser(newUser);
    return newUser;
  }, []);

  const logout = useCallback(() => setUser({ ...defaultUser }), []);

  const updateProfile = useCallback((data) => {
    setUser((prev) => ({ ...prev, ...data, profileComplete: true }));
  }, []);

  const setTheme = useCallback((theme) => setAppearance((p) => ({ ...p, theme })), []);
  const setAccent = useCallback((accent) => setAppearance((p) => ({ ...p, accent })), []);

  const completeUnit = useCallback((subjectId, unitNumber) => {
    setProgress((prev) => ({
      ...prev,
      [subjectId]: {
        ...(prev[subjectId] || {}),
        units: { ...((prev[subjectId] && prev[subjectId].units) || {}), [unitNumber]: true },
      },
    }));
  }, []);

  const isUnitComplete = (subjectId, unitNumber) => Boolean(progress[subjectId]?.units?.[unitNumber]);

  const subjectProgress = useCallback((subjectId) => {
    const p = progress[subjectId];
    if (!p || !p.units) return { completed: 0, total: 0, pct: 0 };
    const units = Object.values(p.units);
    const completed = units.filter(Boolean).length;
    return { completed, total: units.length, pct: units.length ? Math.round((completed / units.length) * 100) : 0 };
  }, [progress]);

  const updateStudyPlan = useCallback((subjectId, plan) => {
    setStudyPlan((prev) => ({ ...prev, [subjectId]: plan }));
  }, []);

  const value = {
    user, login, logout, updateProfile, ROLES,
    progress, completeUnit, isUnitComplete, subjectProgress,
    studyPlan, updateStudyPlan,
    appearance, setTheme, setAccent,
    setUser, setProgress, setStudyPlan,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
