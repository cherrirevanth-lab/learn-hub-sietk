import { useEffect, useState } from "react";
import {
  X,
  CheckCircle2,
  BookOpen,
  Play,
  Target,
  GraduationCap,
  Bell,
  UserRound,
  Palette,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { APP_NAME } from "../config";
import { Link } from "react-router-dom";

export default function FirstLoginInstructions({ onClose }) {
  const { user, setUser } = useAuth();
  const [acknowledged, setAcknowledged] = useState(false);

  useEffect(() => {
    if (user && !user.firstLogin) {
      if (onClose) onClose();
    }
  }, [user, onClose]);

  const finish = () => {
    setUser({ ...user, firstLogin: false });
    if (onClose) onClose();
  };

  if (!user.firstLogin) return null;

  const steps = [
    {
      icon: UserRound,
      color: "bg-brand-100 text-brand-600",
      title: "1. Create your profile",
      text: "Open Settings to add your name, branch and semester. This tailors your subjects and study plan. (Your login only needed an email.)",
    },
    {
      icon: BookOpen,
      color: "bg-sky-100 text-sky-600",
      title: "2. Explore subjects",
      text: `Browse the R23 syllabus subject-wise and unit-wise. ${APP_NAME} has 586 real question-bank questions with answers.`,
    },
    {
      icon: Play,
      color: "bg-violet-100 text-violet-600",
      title: "3. Learn unit by unit",
      text: "Read clear explanations, Q&A with explanations, and a one-shot preview of every answer.",
    },
    {
      icon: Target,
      color: "bg-emerald-100 text-emerald-600",
      title: "4. Track your progress",
      text: "Mark units complete as you finish. Your progress is saved automatically and visible to admins.",
    },
    {
      icon: Palette,
      color: "bg-amber-100 text-amber-600",
      title: "5. Make it yours",
      text: "In Settings, switch between light/dark theme and pick an accent color — changes apply instantly.",
    },
    {
      icon: Bell,
      color: "bg-rose-100 text-rose-600",
      title: "6. Notifications",
      text: "The app is installable with notification support. Use your browser's Install option to add it to your home screen.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
      <div className="panel w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5" /> WELCOME
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Hello, {user.name} 👋
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              You're logged in as <span className="font-semibold capitalize">{user.role}</span>. Here's how to get started.
            </p>
          </div>
          <button onClick={finish} className="btn-ghost" title="Skip">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="p-6 space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${s.color}`}>
                <s.icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-sm">{s.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}

          {!user.profileComplete && (
            <Link
              to="/settings"
              onClick={finish}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              Create my profile now <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={() => setAcknowledged(!acknowledged)}
              className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
            />
            I've read the instructions and I'm ready to begin
          </label>
          <button onClick={finish} disabled={!acknowledged} className={`btn-primary ${!acknowledged ? "opacity-50 cursor-not-allowed" : ""}`}>
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}
