import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { APP_NAME, APP_INSTITUTE } from "../config";
import {
  GraduationCap,
  Mail,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Layers,
  UserRound,
} from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email to continue.");
      return;
    }
    login({ email, role });
    setError("");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 p-12 flex-col justify-between">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-accent-400" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg">{APP_NAME}</div>
              <div className="text-xs text-brand-300">{APP_INSTITUTE}</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent-400" />
            R23 Regulation · CSE Branch
          </div>
          <h1 className="text-4xl font-display font-bold text-white leading-tight mb-4">
            Your entire syllabus,<br />
            <span className="text-accent-400">beautifully explained.</span>
          </h1>
          <p className="text-brand-200 leading-relaxed mb-8">
            586 real question-bank questions with clear answers, unit-wise learning, and one-shot previews — all in one polished app.
          </p>

          <div className="space-y-3">
            {[
              { icon: BookOpen, text: "8 theory subjects, fully covered" },
              { icon: CheckCircle2, text: "586 questions with worked answers" },
              { icon: Layers, text: "One-shot preview of every answer" },
              { icon: ShieldCheck, text: "Admin dashboard for progress tracking" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-brand-100">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-accent-400" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-xs text-brand-400">
          © 2026 {APP_NAME} · Built for students, by students
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 bg-surface">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-slate-900">{APP_NAME}</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Welcome</h2>
            <p className="text-sm text-slate-500">Sign in to continue. You'll set up your profile in Settings after logging in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  className="input pl-10"
                  placeholder="you@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Account type</label>
              <div className="relative">
                <UserRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  className="input pl-10"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {["student", "teacher", "professor", "engineer", "designer", "admin"].map((r) => (
                    <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && <p className="text-sm text-rose-600 bg-rose-50 px-3 py-2 rounded-lg">{error}</p>}

            <button type="submit" className="btn-primary w-full py-3">
              Sign in <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 p-4 rounded-xl bg-brand-50 border border-brand-100">
            <p className="text-xs text-brand-800">
              <strong>Next step:</strong> After signing in, open <strong>Settings</strong> to create your profile (name, branch, semester) and pick your theme &amp; accent color.
            </p>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            Data stored locally in your browser. No credentials leave this device.
          </p>
        </div>
      </div>
    </div>
  );
}
