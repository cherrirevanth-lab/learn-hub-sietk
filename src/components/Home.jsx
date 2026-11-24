import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SUBJECTS } from "../data/subjects";
import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Target,
  ArrowRight,
  Sparkles,
  TrendingUp,
  GraduationCap,
  Layers,
  Play,
  Clock,
} from "lucide-react";

export default function Home() {
  const { user, progress } = useAuth();

  const subjects = SUBJECTS.filter(
    (s) => s.branch === user.branch && s.semester === user.semester && !s.isLab
  );
  const totalUnits = subjects.reduce((acc, s) => acc + s.units.length, 0);
  const completedUnits = subjects.reduce((acc, s) => {
    const p = progress[s.id];
    return acc + (p ? Object.values(p.units || {}).filter(Boolean).length : 0);
  }, 0);
  const overallPct = totalUnits ? Math.round((completedUnits / totalUnits) * 100) : 0;
  const startedSubjects = subjects.filter((s) => {
    const p = progress[s.id];
    return p && Object.values(p.units || {}).some(Boolean);
  }).length;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-8 md:p-10 text-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl translate-y-1/2"></div>
        <div className="absolute top-8 right-8 opacity-10">
          <GraduationCap className="w-40 h-40" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
              SIETK R23 · {user.branch} · Semester {user.semester}
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-2">
              Welcome back, <span className="text-accent-400">{user.name}</span> 👋
            </h1>
            <p className="text-brand-200 text-sm md:text-base max-w-md">
              Your complete study companion. Learn unit-by-unit with clear explanations, Q&A, and one-shot previews.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-display font-bold">{overallPct}%</div>
              <div className="text-xs text-brand-300 mt-1 uppercase tracking-wider">Overall Progress</div>
            </div>
            <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center relative">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="6"
                />
                <circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - overallPct / 100)}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <Target className="w-6 h-6 text-accent-400 relative z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Subjects" value={subjects.length} icon={BookOpen} color="brand" />
        <StatCard label="Total Units" value={totalUnits} icon={Layers} color="sky" />
        <StatCard label="Completed" value={completedUnits} icon={CheckCircle2} color="emerald" />
        <StatCard label="Started" value={startedSubjects} icon={TrendingUp} color="amber" />
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/subjects" className="group panel p-6 panel-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-slate-900">Explore Subjects</h3>
              <p className="text-sm text-slate-500">Browse {subjects.length} theory subjects with full explanations</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
        <Link to="/roadmap" className="group panel p-6 panel-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent-500/25 group-hover:scale-110 transition-transform">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-slate-900">Study Plan</h3>
              <p className="text-sm text-slate-500">Create and track your personalized roadmap</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>

      {/* Subjects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">Your Subjects</h2>
            <p className="text-sm text-slate-500 mt-0.5">Continue where you left off</p>
          </div>
          <Link to="/subjects" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((s, idx) => {
            const p = progress[s.id];
            const completed = p ? Object.values(p.units || {}).filter(Boolean).length : 0;
            const pct = s.units.length ? Math.round((completed / s.units.length) * 100) : 0;
            return (
              <Link key={s.id} to={`/subjects/${s.id}`} className="group panel p-5 panel-hover">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm ${
                    ['bg-gradient-to-br from-brand-500 to-brand-700',
                     'bg-gradient-to-br from-accent-500 to-accent-600',
                     'bg-gradient-to-br from-violet-500 to-purple-600',
                     'bg-gradient-to-br from-amber-500 to-orange-600',
                     'bg-gradient-to-br from-emerald-500 to-teal-600',
                     'bg-gradient-to-br from-rose-500 to-pink-600',
                     'bg-gradient-to-br from-sky-500 to-blue-600',
                     'bg-gradient-to-br from-indigo-500 to-violet-600'][idx % 8]
                  }`}>
                    {s.shortName.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">{s.code}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1 group-hover:text-brand-600 transition-colors line-clamp-1">{s.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{s.units.length} units · {s.credits} credits</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 w-8 text-right">{pct}%</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }) {
  const colorMap = {
    brand: "bg-brand-50 text-brand-600",
    sky: "bg-sky-50 text-sky-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
  };
  return (
    <div className="panel p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-2xl font-display font-bold text-slate-900">{value}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    </div>
  );
}
