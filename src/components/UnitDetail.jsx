import { useParams, Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects";
import { QB_QUESTIONS } from "../data/qbQuestions";
import { useAuth } from "../context/AuthContext";
import {
  BookOpen,
  FileText,
  CheckCircle2,
  Lightbulb,
  ArrowLeft,
  ExternalLink,
  Zap,
  Database,
  ChevronDown,
  Shapes,
  Sigma,
  ListOrdered,
} from "lucide-react";
import { getDiagramForQuestion } from "./Diagrams";
import { useState } from "react";

export default function UnitDetail() {
  const { subjectId, unitNumber } = useParams();
  const { completeUnit, isUnitComplete } = useAuth();
  const [showAllQB, setShowAllQB] = useState(false);
  const [showDiagram, setShowDiagram] = useState(null);

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const unit = subject?.units.find((u) => u.number === Number(unitNumber));
  const done = isUnitComplete(subjectId, Number(unitNumber));
  const qb = QB_QUESTIONS[subjectId]?.[Number(unitNumber)];

  if (!subject || !unit) {
    return (
      <div className="panel p-12 text-center">
        <h2 className="text-xl font-display font-semibold text-slate-900">Unit not found</h2>
      </div>
    );
  }

  const qbQuestions = qb?.questions || [];
  const visibleQB = showAllQB ? qbQuestions : qbQuestions.slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Link to={`/subjects/${subjectId}`} className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-700 transition-colors">
        <ArrowLeft className="w-4 h-4" /> {subject.name}
      </Link>

      {/* Header: flat paper panel, no gradient */}
      <div className="unit-header panel p-6 border-l-2 border-l-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-800 font-semibold text-lg tabular-nums">
            {unit.number}
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-slate-500 mb-1 tabular-nums">
              Unit {unit.number} · {subject.shortName}
            </div>
            <h1 className="text-2xl font-display font-semibold text-slate-900">{unit.title}</h1>
            <div className="rule-line" />
          </div>
          {done && <CheckCircle2 className="w-8 h-8 text-slate-600" />}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Explanation */}
          <div className="panel p-6">
            <h2 className="flex items-center gap-2 font-display font-semibold text-slate-900 mb-3">
              <BookOpen className="w-5 h-5 text-slate-500" /> Explanation
            </h2>
            <div className="rule-line" />
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-3 mt-5">
              {unit.explanation.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm">
                  {para.trim().split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <strong key={j} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>
                      : part
                  )}
                </p>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3">
                <Lightbulb className="w-4 h-4 text-amber-700" /> Key concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {unit.keyConcepts.map((c, i) => (
                  <span key={i} className="chip border-slate-200 bg-slate-50 text-slate-600">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Real question bank */}
          {qbQuestions.length > 0 && (
            <div className="panel p-6 border-slate-300">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <h2 className="flex items-center gap-2 font-display font-semibold text-slate-900">
                  <Database className="w-5 h-5 text-slate-500" />
                  {qb?.source === "syllabus-derived" ? "Practice questions" : "SIETK question bank"}
                  <span className="ml-1 text-xs font-semibold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600 tabular-nums">
                    {qbQuestions.length} questions
                  </span>
                </h2>
                <span className="text-xs text-slate-400">
                  {qb?.source === "syllabus-derived"
                    ? "Syllabus-derived questions with answers (no official bank published)"
                    : "Real R23 exam questions with answers"}
                </span>
              </div>
              <div className="rule-line" />
              <div className="space-y-4 mt-5">
                {visibleQB.map((qa, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="w-6 h-6 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-semibold shrink-0 tabular-nums">
                        Q{i + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 pt-0.5">{qa.q}</span>
                    </div>
                    <div className="ml-9 space-y-3">
                      <div>
                        <span className="text-xs font-semibold text-slate-700">Answer:</span>
                        <p className="text-sm text-slate-700 leading-relaxed mt-0.5">{qa.a}</p>
                      </div>

                      {/* Worked solution: formula in a bordered mono block */}
                      {qa.formula && (
                        <div className="rounded-lg border border-slate-300 bg-white px-3 py-2.5">
                          <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 mb-1.5">
                            <Sigma className="w-3.5 h-3.5" /> Formula
                          </span>
                          <p className="text-sm font-mono text-slate-900 leading-relaxed whitespace-pre-wrap tabular-nums">{qa.formula}</p>
                        </div>
                      )}

                      {/* Worked solution: numbered steps */}
                      {qa.steps && qa.steps.length > 0 && (
                        <div className="rounded-lg border border-slate-200 bg-white px-3 py-3">
                          <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 mb-2.5">
                            <ListOrdered className="w-3.5 h-3.5" /> Step-by-step solution
                          </span>
                          <ol className="space-y-2">
                            {qa.steps.map((s, si) => (
                              <li key={si} className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="shrink-0 w-5 h-5 rounded border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-semibold tabular-nums">
                                  {si + 1}
                                </span>
                                <span className="leading-relaxed whitespace-pre-wrap">{s}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {getDiagramForQuestion(qa.q) && (
                        <div>
                          <button
                            onClick={() => setShowDiagram(showDiagram === i ? null : i)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                          >
                            <Shapes className="w-3.5 h-3.5" />
                            {showDiagram === i ? "Hide diagram" : "View diagram"}
                          </button>
                          {showDiagram === i && getDiagramForQuestion(qa.q).render()}
                        </div>
                      )}

                      <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-3">
                        <span className="text-xs font-semibold text-sky-800 flex items-center gap-1.5 mb-1">
                          <Lightbulb className="w-3 h-3" /> Explanation
                        </span>
                        <p className="text-sm text-slate-700">{qa.explanation}</p>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                        <span className="text-xs font-semibold text-amber-800 flex items-center gap-1.5 mb-1">
                          <Zap className="w-3 h-3" /> One-shot preview
                        </span>
                        <p className="text-sm text-amber-900 font-mono tabular-nums">{qa.oneShotPreview}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {qbQuestions.length > 5 && (
                <button
                  onClick={() => setShowAllQB(!showAllQB)}
                  className="mt-4 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <ChevronDown className={`w-4 h-4 ${showAllQB ? "rotate-180" : ""}`} />
                  {showAllQB ? "Show less" : `Show all ${qbQuestions.length} questions`}
                </button>
              )}
            </div>
          )}

          {/* Curated concept Q&A */}
          <div className="panel p-6">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h2 className="flex items-center gap-2 font-display font-semibold text-slate-900">
                <FileText className="w-5 h-5 text-slate-500" /> Concept questions
              </h2>
              <span className="text-xs text-slate-400 tabular-nums">{unit.qa.length} curated</span>
            </div>
            <div className="rule-line" />
            <div className="space-y-5 mt-5">
              {unit.qa.map((qa, i) => (
                <div key={i} className="border-b border-slate-100 last:border-0 pb-5 last:pb-0">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-6 h-6 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-semibold shrink-0 tabular-nums">
                      C{i + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 pt-0.5">{qa.q}</span>
                  </div>
                  <div className="ml-9 space-y-3">
                    <p className="text-sm text-slate-700 leading-relaxed">{qa.a}</p>
                    <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-3">
                      <span className="text-xs font-semibold text-sky-800 mb-1 block">Explanation</span>
                      <p className="text-sm text-slate-700">{qa.explanation}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <span className="text-xs font-semibold text-amber-800 mb-1 block">One-shot preview</span>
                      <p className="text-sm text-amber-900 font-mono tabular-nums">{qa.oneShotPreview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="panel p-5 sticky top-20">
            <h3 className="font-display font-semibold text-slate-900 mb-3">Actions</h3>
            <div className="rule-line" />
            <button
              onClick={() => completeUnit(subjectId, Number(unitNumber))}
              className={`w-full py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 mt-5 ${
                done
                  ? "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200"
                  : "bg-brand-700 text-white border border-brand-700 hover:bg-brand-800"
              }`}
            >
              {done ? <><CheckCircle2 className="w-4 h-4" /> Completed</> : <><CheckCircle2 className="w-4 h-4" /> Mark complete</>}
            </button>
            {subject.questionBankUrl && (
              <a
                href={subject.questionBankUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 w-full mt-2"
              >
                <ExternalLink className="w-4 h-4" /> Original PDF
              </a>
            )}
            <div className="mt-5 pt-5 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2">Your status</p>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${done ? "bg-brand-700" : "bg-slate-300"}`}></div>
                <span className="text-sm font-semibold text-slate-700">{done ? "Completed" : "Not started"}</span>
              </div>
            </div>
            {qb && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Question bank</p>
                <p className="text-sm font-semibold text-brand-700 tabular-nums">{qbQuestions.length} questions with answers</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
