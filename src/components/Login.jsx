import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { APP_NAME, APP_INSTITUTE } from "../config";
import {
  GraduationCap,
  Mail,
  ArrowRight,
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

  const features = [
    { icon: BookOpen, text: "8 theory subjects covered" },
    { icon: CheckCircle2, text: "586 questions with worked answers" },
    { icon: Layers, text: "One-shot preview of every answer" },
    { icon: ShieldCheck, text: "Admin dashboard for progress tracking" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left panel: solid ink, no ornament */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[#23211e] p-12">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl border border-[#4a453e] flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-stone-200" />
          </div>
          <div>
            <div className="font-display font-semibold text-lg text-stone-100">{APP_NAME}</div>
            <div className="text-xs text-stone-400">{APP_INSTITUTE}</div>
          </div>
        </div>

        <div className="max-w-md">
          <p className="text-xs text-stone-400 mb-5">R23 regulation · CSE branch</p>
          <h1 className="font-display text-3xl font-semibold text-stone-100 leading-snug">
            Learn Hub
          </h1>
          <div className="rule-line mt-4" />
          <p className="mt-4 text-stone-300 leading-relaxed">
            SIETK R23 study app for CSE students.
          </p>
          <p className="mt-2 text-sm text-stone-400 leading-relaxed">
            586 question-bank questions with worked answers, arranged unit by unit.
          </p>

          <div className="mt-8 space-y-2">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-[#3d3934] bg-[#2c2925] px-3 py-2.5 text-sm text-stone-200"
              >
                <item.icon className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-stone-500">
          © 2026 {APP_NAME} · Study notes for SIETK CSE
        </div>
      </div>

      {/* Right panel: quiet paper form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#23211e] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-stone-100" />
            </div>
            <span className="font-display font-semibold text-slate-900">{APP_NAME}</span>
          </div>

          <div className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-slate-900">Welcome</h2>
            <div className="rule-line mt-3" />
            <p className="mt-3 text-sm text-slate-500">
              Use your college email. Add your name, branch and semester in Settings afterwards.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  className="input pl-10 transition-colors"
                  placeholder="you@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Account type</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                  <UserRound className="w-4 h-4 text-slate-400" />
                </div>
                <select
                  className="input pl-10 transition-colors"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {["student", "teacher", "professor", "engineer", "designer", "admin"].map((r) => (
                    <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p className="text-sm text-rose-700 bg-rose-50 border border-rose-100 px-3 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary w-full py-3"
            >
              Sign in <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 border-t border-slate-200 pt-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              Next step: open Settings to add your profile details and choose a theme and accent color.
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
