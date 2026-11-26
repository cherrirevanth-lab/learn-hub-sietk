import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SUBJECTS } from "../data/subjects";
import { BookOpen, ClipboardList, ArrowRight } from "lucide-react";

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
    <div className="space-y-8">
      {/* Study record */}
      <section className="panel border-l-2 border-l-slate-800 p-7 md:p-9">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-2">
              SIETK · R23 · {user.branch} · Semester {user.semester}
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-slate-900">
              Your studies, Semester {user.semester}
            </h1>
            <div className="rule-line my-4 max-w-md" />
            <p className="text-sm text-slate-600 max-w-md">
              Work unit by unit through notes, questions with answers, and a one-shot preview.
            </p>
            <p className="text-xs text-slate-500 mt-2">{user.name}</p>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <div className="text-4xl font-display font-semibold tabular-nums text-slate-900">{overallPct}%</div>
              <div className="text-xs text-slate-500 mt-1">Overall progress</div>
            </div>
            <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80" aria-hidden="true">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                <circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - overallPct / 100)}`}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Counts */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Subjects" value={subjects.length} />
        <StatCard label="Total units" value={totalUnits} />
        <StatCard label="Completed" value={completedUnits} />
        <StatCard label="Started" value={startedSubjects} />
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/subjects" className="group panel p-5 transition-colors hover:border-brand-300">
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="flex-1">
              <span className="block font-display font-semibold text-slate-900">Explore subjects</span>
              <span className="block text-sm text-slate-500 mt-0.5">
                Browse {subjects.length} theory subjects with notes and worked answers
              </span>
            </span>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors shrink-0" />
          </div>
        </Link>
        <Link to="/roadmap" className="group panel p-5 transition-colors hover:border-brand-300">
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
              <ClipboardList className="w-5 h-5" />
            </span>
            <span className="flex-1">
              <span className="block font-display font-semibold text-slate-900">Study plan</span>
              <span className="block text-sm text-slate-500 mt-0.5">
                Create and track your study plan
              </span>
            </span>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors shrink-0" />
          </div>
        </Link>
      </div>

      {/* Subjects */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-display font-semibold text-slate-900">Your subjects</h2>
            <p className="text-sm text-slate-500 mt-0.5">Continue where you left off</p>
          </div>
          <Link
            to="/subjects"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors flex items-center gap-1"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((s) => {
            const p = progress[s.id];
            const completed = p ? Object.values(p.units || {}).filter(Boolean).length : 0;
            const pct = s.units.length ? Math.round((completed / s.units.length) * 100) : 0;
            return (
              <Link
                key={s.id}
                to={`/subjects/${s.id}`}
                className="group panel p-5 transition-colors hover:border-brand-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="w-10 h-10 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 font-semibold text-sm shrink-0">
                    {s.shortName.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 border border-slate-200 rounded px-1.5 py-0.5">
                    {s.code}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm mb-1 group-hover:text-brand-600 transition-colors line-clamp-1">
                  {s.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3 tabular-nums">
                  {s.units.length} units · {s.credits} credits
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 w-8 text-right tabular-nums">{pct}%</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="panel p-4">
      <div className="text-2xl font-display font-semibold tabular-nums text-slate-900">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}
