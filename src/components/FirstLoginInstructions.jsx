import { useEffect, useState } from "react";
import {
  X,
  BookOpen,
  Play,
  Target,
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
      title: "1. Create your profile",
      text: "Open Settings to add your name, branch and semester. This tailors your subjects and study plan. (Your login only needed an email.)",
    },
    {
      icon: BookOpen,
      title: "2. Explore subjects",
      text: `Browse the R23 syllabus subject-wise and unit-wise. ${APP_NAME} has 586 real question-bank questions with answers.`,
    },
    {
      icon: Play,
      title: "3. Learn unit by unit",
      text: "Read clear explanations, Q&A with explanations, and a one-shot preview of every answer.",
    },
    {
      icon: Target,
      title: "4. Track your progress",
      text: "Mark units complete as you finish. Your progress is saved automatically and visible to admins.",
    },
    {
      icon: Palette,
      title: "5. Make it yours",
      text: "In Settings, switch between light/dark theme and pick an accent color — changes apply instantly.",
    },
    {
      icon: Bell,
      title: "6. Notifications",
      text: "The app is installable with notification support. Use your browser's Install option to add it to your home screen.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
      <div className="panel w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-900">Getting started</h2>
            <div className="rule-line my-3" />
            <p className="text-sm text-slate-600">
              Signed in as <span className="font-semibold capitalize">{user.role}</span> · {user.name}.
              Six steps to set up your studies.
            </p>
          </div>
          <button onClick={finish} className="btn-ghost" title="Close" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="p-6 space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center shrink-0 text-slate-700">
                <s.icon className="w-4 h-4" />
              </span>
              <div>
                <h4 className="font-display font-semibold text-slate-900 text-sm">{s.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}

          {!user.profileComplete && (
            <Link
              to="/settings"
              onClick={finish}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              Create my profile now <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={() => setAcknowledged(!acknowledged)}
              className="w-4 h-4 rounded border-slate-300 accent-brand-600"
            />
            I've read the instructions and I'm ready to begin
          </label>
          <button
            onClick={finish}
            disabled={!acknowledged}
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold transition-colors hover:bg-brand-700 ${
              !acknowledged ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Start learning
          </button>
        </div>
      </div>
    </div>
  );
}
