import { useParams, Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects";
import { useAuth } from "../context/AuthContext";
import {
  BookOpen,
  FileText,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  ArrowLeft,
  Layers,
  Clock,
} from "lucide-react";

export default function SubjectDetail() {
  const { subjectId } = useParams();
  const { isUnitComplete, subjectProgress } = useAuth();

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  if (!subject) {
    return (
      <div className="panel p-12 text-center">
        <h2 className="text-xl font-display font-bold text-slate-900">Subject not found</h2>
      </div>
    );
  }

  const prog = subjectProgress(subject.id);

  return (
    <div className="space-y-8 animate-fade-in">
      <Link to="/subjects" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors">
        <ArrowLeft className="w-4 h-4" /> All subjects
      </Link>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-8 text-white">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-8 right-8 opacity-10"><BookOpen className="w-40 h-40" /></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="chip bg-white/10 border-white/20 text-white">{subject.code}</span>
            <span className="chip bg-white/10 border-white/20 text-white">{subject.credit || subject.credits} credits</span>
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">{subject.name}</h1>
          <p className="text-brand-200 text-sm max-w-2xl">{subject.description}</p>

          <div className="flex flex-wrap items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-400" />
              <span className="text-sm">{subject.units.length} units</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-400" />
              <span className="text-sm">{prog.pct}% complete</span>
            </div>
            {subject.questionBankUrl && (
              <a href={subject.questionBankUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-sm font-medium">
                <FileText className="w-4 h-4" /> Question Bank PDF
              </a>
            )}
          </div>
        </div>
      </div>

      {subject.isLab ? (
        <div className="panel p-12 text-center border-dashed border-amber-200 bg-amber-50/50">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Laboratory Content — Coming Soon</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">Lab sessions for {subject.name} are being prepared. Theory subjects are fully available.</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-bold text-slate-900">Units</h2>
            <span className="text-sm text-slate-500">{prog.completed} of {subject.units.length} complete</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subject.units.map((unit) => (
              <UnitCard key={unit.number} subject={subject} unit={unit} isDone={isUnitComplete(subject.id, unit.number)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function UnitCard({ subject, unit, isDone }) {
  return (
    <Link to={`/subjects/${subject.id}/units/${unit.number}`} className="group panel p-5 panel-hover">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
          isDone ? "bg-emerald-100 text-emerald-700" : "bg-brand-100 text-brand-600"
        }`}>
          {isDone ? <CheckCircle2 className="w-5 h-5" /> : unit.number}
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="font-display font-bold text-slate-900 text-sm mb-2 line-clamp-2">
        Unit {unit.number}: {unit.title}
      </h3>
      <p className="text-xs text-slate-500 line-clamp-2">{unit.topics.join(" · ")}</p>
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">{unit.qa?.length || 0} Q&A</span>
        <span className={`text-xs font-medium ${isDone ? "text-emerald-600" : "text-brand-600"}`}>
          {isDone ? "Completed" : "Start →"}
        </span>
      </div>
    </Link>
  );
}
