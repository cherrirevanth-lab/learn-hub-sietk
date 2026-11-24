import { useState } from "react";
import { Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects";
import { BookOpen, Microscope, Search, Layers, Clock, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const GRADIENTS = [
  "from-brand-500 to-brand-700",
  "from-accent-500 to-cyan-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-blue-600",
  "from-indigo-500 to-violet-600",
];

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
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-2">
            <Layers className="w-3 h-3" /> R23 REGULATION
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Subjects</h1>
          <p className="text-sm text-slate-500 mt-1">
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
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search by subject name or code..."
          className="input pl-11"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-brand-600" />
          </div>
          <h2 className="font-display font-bold text-slate-900">Theory Subjects <span className="text-slate-400 font-normal">({theory.length})</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {theory.map((s, idx) => (
            <SubjectCard key={s.id} subject={s} gradient={GRADIENTS[idx % GRADIENTS.length]} />
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
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Microscope className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="font-display font-bold text-slate-900">Laboratories <span className="text-slate-400 font-normal">({labs.length})</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

function SubjectCard({ subject, gradient }) {
  const { subjectProgress } = useAuth();
  const prog = subjectProgress(subject.id);

  return (
    <Link to={`/subjects/${subject.id}`} className="group panel p-5 panel-hover">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
          {subject.shortName.slice(0, 3).toUpperCase()}
        </div>
        <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">{subject.code}</span>
      </div>
      <h3 className="font-display font-bold text-slate-900 text-base mb-1 group-hover:text-brand-600 transition-colors line-clamp-1">{subject.name}</h3>
      <p className="text-xs text-slate-400 mb-3">{subject.credits} credits · {subject.units.length} units</p>
      <p className="text-xs text-slate-500 line-clamp-2 mb-4 h-8">{subject.description}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500" style={{ width: `${prog.pct}%` }}></div>
        </div>
        <span className="text-xs font-semibold text-slate-500 w-8 text-right">{prog.pct}%</span>
      </div>
    </Link>
  );
}

function LabCard({ subject }) {
  return (
    <div className="panel p-5 border-dashed border-amber-200 bg-amber-50/30">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
          <Microscope className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-semibold text-amber-600 bg-amber-100 px-2 py-1 rounded">LAB</span>
      </div>
      <h3 className="font-display font-bold text-slate-900 text-base mb-1">{subject.name}</h3>
      <p className="text-xs text-slate-400 mb-3">{subject.code} · Semester {subject.semester}</p>
      <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
        <Clock className="w-3.5 h-3.5" /> Coming Soon
      </div>
    </div>
  );
}
