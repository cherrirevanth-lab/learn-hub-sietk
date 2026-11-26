import { useParams, Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects";
import { useAuth } from "../context/AuthContext";
import {
  FileText,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  ArrowLeft,
  Layers,
} from "lucide-react";

export default function SubjectDetail() {
  const { subjectId } = useParams();
  const { isUnitComplete, subjectProgress } = useAuth();

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  if (!subject) {
    return (
      <div className="panel p-12 text-center">
        <h2 className="text-xl font-display font-semibold text-slate-900">Subject not found</h2>
      </div>
    );
  }

  const prog = subjectProgress(subject.id);

  return (
    <div className="space-y-8">
      <Link to="/subjects" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-700 transition-colors">
        <ArrowLeft className="w-4 h-4" /> All subjects
      </Link>

      {/* Paper panel with a thin ink rule at the left edge */}
      <div className="panel p-8 border-l-2 border-l-slate-800">
        <div className="flex items-center gap-2 mb-3">
          <span className="chip border-slate-200 bg-slate-50 text-slate-600 tabular-nums">{subject.code}</span>
          <span className="chip border-slate-200 bg-slate-50 text-slate-600 tabular-nums">
            {subject.credit || subject.credits} credits
          </span>
        </div>
        <h1 className="text-3xl font-display font-semibold text-slate-900 mb-3">{subject.name}</h1>
        <div className="rule-line" />
        <p className="text-sm text-slate-500 mt-3 max-w-2xl">{subject.description}</p>

        <div className="flex flex-wrap items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 tabular-nums">{subject.units.length} units</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 tabular-nums">{prog.pct}% complete</span>
          </div>
          {subject.questionBankUrl && (
            <a
              href={subject.questionBankUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" /> Question bank PDF
            </a>
          )}
        </div>
      </div>

      {subject.isLab ? (
        <div className="panel p-12 text-center border-dashed border-amber-200 bg-amber-50/50">
          <AlertCircle className="w-12 h-12 text-amber-700 mx-auto mb-4" />
          <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">Laboratory content — coming soon</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">Lab sessions for {subject.name} are being prepared. Theory subjects are fully available.</p>
        </div>
      ) : (
        <>
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-display font-semibold text-slate-900">Units</h2>
              <span className="text-sm text-slate-500 tabular-nums">{prog.completed} of {subject.units.length} complete</span>
            </div>
            <div className="rule-line" />
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
    <Link to={`/subjects/${subject.id}/units/${unit.number}`} className="group panel p-5 transition-colors hover:border-slate-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-9 h-9 rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-sm tabular-nums ${
          isDone ? "text-slate-600" : ""
        }`}>
          {isDone ? <CheckCircle2 className="w-5 h-5" /> : unit.number}
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300" />
      </div>
      <h3 className="font-display font-semibold text-slate-900 text-sm mb-2 line-clamp-2">
        Unit {unit.number}: {unit.title}
      </h3>
      <p className="text-xs text-slate-500 line-clamp-2">{unit.topics.join(" · ")}</p>
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 tabular-nums">{unit.qa?.length || 0} Q&A</span>
        <span className={`text-xs font-semibold ${isDone ? "text-slate-600" : "text-brand-700"}`}>
          {isDone ? "Completed" : "Start →"}
        </span>
      </div>
    </Link>
  );
}
