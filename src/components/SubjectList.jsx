import { useState } from "react";
import { Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects";
import { BookOpen, Microscope, Search, Layers, Clock } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function SubjectList() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [showLabs, setShowLabs] = useState(false);

  let list = SUBJECTS.filter(
    (s) =>
      s.branch === user.branch &&
      s.semester === user.semester &&
      (s.name + " " + s.code + " " + s.shortName)
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const theory = list.filter((s) => !s.isLab);
  const labs = list.filter((s) => s.isLab);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="chip border-slate-200 bg-slate-50 text-slate-600">
            <Layers className="w-3 h-3" /> R23 regulation
          </span>
          <h1 className="text-3xl font-display font-semibold text-slate-900 mt-2">Subjects</h1>
          <div className="rule-line" />
          <p className="text-sm text-slate-500 mt-2">
            {user.branch} · Semester {user.semester} · Curated for your branch
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none bg-white px-3 py-2 rounded-xl border border-slate-200">
          <input
            type="checkbox"
            checked={showLabs}
            onChange={() => setShowLabs(!showLabs)}
            className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
          />
          Include labs
        </label>
      </div>

      <div className="relative max-w-xl">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search by subject name or code..."
          className="input pl-11"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-slate-600" />
          </div>
          <h2 className="font-display font-semibold text-slate-900">
            Theory subjects <span className="text-slate-400 font-normal tabular-nums">({theory.length})</span>
          </h2>
        </div>
        <div className="rule-line" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {theory.map((s) => (
            <SubjectCard key={s.id} subject={s} />
          ))}
          {theory.length === 0 && (
            <div className="col-span-3 panel p-10 text-center">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No theory subjects found.</p>
            </div>
          )}
        </div>
      </section>

      {showLabs && (
        <section className="border-t border-slate-200 pt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <Microscope className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="font-display font-semibold text-slate-900">
              Laboratories <span className="text-slate-400 font-normal tabular-nums">({labs.length})</span>
            </h2>
          </div>
          <div className="rule-line" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {labs.map((s) => <LabCard key={s.code} subject={s} />)}
          </div>
          <p className="text-xs text-slate-400 text-center mt-4">
            Lab content is being prepared. Theory subjects above are fully available.
          </p>
        </section>
      )}
    </div>
  );
}

function SubjectCard({ subject }) {
  const { subjectProgress } = useAuth();
  const prog = subjectProgress(subject.id);

  return (
    <Link to={`/subjects/${subject.id}`} className="group panel p-5 transition-colors hover:border-slate-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-xs tabular-nums">
          {subject.shortName.slice(0, 3).toUpperCase()}
        </div>
        <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded tabular-nums">
          {subject.code}
        </span>
      </div>
      <h3 className="font-display font-semibold text-slate-900 text-base mb-1 group-hover:text-brand-700 transition-colors line-clamp-1">
        {subject.name}
      </h3>
      <p className="text-xs text-slate-500 mb-3 tabular-nums">{subject.credits} credits · {subject.units.length} units</p>
      <p className="text-xs text-slate-500 line-clamp-2 mb-4 h-8">{subject.description}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-brand-600 rounded-full" style={{ width: `${prog.pct}%` }}></div>
        </div>
        <span className="text-xs font-semibold text-slate-500 w-8 text-right tabular-nums">{prog.pct}%</span>
      </div>
    </Link>
  );
}

function LabCard({ subject }) {
  return (
    <div className="panel p-5 border-dashed border-amber-200 bg-amber-50/30">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500">
          <Microscope className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded">
          Lab
        </span>
      </div>
      <h3 className="font-display font-semibold text-slate-900 text-base mb-1">{subject.name}</h3>
      <p className="text-xs text-slate-500 mb-3 tabular-nums">{subject.code} · Semester {subject.semester}</p>
      <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg">
        <Clock className="w-3.5 h-3.5" /> Coming soon
      </div>
    </div>
  );
}
