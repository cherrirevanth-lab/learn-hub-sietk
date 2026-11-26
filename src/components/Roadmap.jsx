import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { SUBJECTS } from "../data/subjects";
import { Calendar, CheckCircle2, Target, Edit3, Save, X, ClipboardList } from "lucide-react";

export default function Roadmap() {
  const { user, studyPlan, updateStudyPlan, progress } = useAuth();
  const [editingSubject, setEditingSubject] = useState(null);
  const [draft, setDraft] = useState("");

  const subjects = SUBJECTS.filter((s) => s.branch === user.branch && s.semester === user.semester && !s.isLab);

  const startEdit = (id) => { setEditingSubject(id); setDraft(studyPlan[id] || ""); };
  const saveEdit = () => { updateStudyPlan(editingSubject, draft); setEditingSubject(null); setDraft(""); };

  return (
    <div className="space-y-8">
      <div>
        <span className="chip border-slate-200 bg-slate-50 text-slate-600">
          <ClipboardList className="w-3 h-3" /> Personalized
        </span>
        <h1 className="text-3xl font-display font-semibold text-slate-900 mt-2">Study plan &amp; roadmap</h1>
        <div className="rule-line" />
        <p className="text-sm text-slate-500 mt-2">Plan your study schedule and track your roadmap.</p>
      </div>

      <div className="panel p-6">
        <h2 className="flex items-center gap-2 font-display font-semibold text-slate-900 mb-3">
          <Calendar className="w-5 h-5 text-slate-500" /> Your roadmap overview
        </h2>
        <div className="rule-line" />
        <div className="relative mt-6">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-4">
            {subjects.map((s) => {
              const p = progress[s.id];
              const completed = p ? Object.values(p.units || {}).filter(Boolean).length : 0;
              const pct = s.units.length ? Math.round((completed / s.units.length) * 100) : 0;
              return (
                <div key={s.id} className="relative pl-10">
                  <div className={`absolute left-2.5 top-2 w-3.5 h-3.5 rounded-full border ${
                    pct === 100 ? "bg-brand-700 border-brand-700" : "bg-white border-slate-300"
                  }`} />
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-800 text-sm">{s.name}</h3>
                      <span className="text-xs text-slate-500 tabular-nums">{pct}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-brand-700 h-full" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 tabular-nums">{completed} of {s.units.length} units complete</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-display font-semibold text-slate-900 mb-3">Per-subject study plans</h2>
        <div className="rule-line" />
        <div className="space-y-4 mt-5">
          {subjects.map((s) => {
            const plan = studyPlan[s.id] || "";
            const isEditing = editingSubject === s.id;
            return (
              <div key={s.id} className="panel p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-slate-900">{s.name}</h3>
                    <p className="text-xs text-slate-500 tabular-nums">{s.code} · {s.credits} credits</p>
                  </div>
                  {!isEditing && (
                    <button onClick={() => startEdit(s.id)} className="flex items-center gap-1 text-sm text-brand-700 hover:text-brand-900 transition-colors">
                      <Edit3 className="w-4 h-4" /> Edit plan
                    </button>
                  )}
                </div>
                {isEditing ? (
                  <div className="space-y-3">
                    <textarea
                      className="input"
                      rows={6}
                      placeholder="Write your study plan, schedule, notes, deadlines..."
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-brand-700 text-white border border-brand-700 transition-colors hover:bg-brand-800"
                      >
                        <Save className="w-4 h-4" /> Save
                      </button>
                      <button
                        onClick={() => { setEditingSubject(null); setDraft(""); }}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <X className="w-4 h-4" /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 whitespace-pre-wrap min-h-[60px]">
                    {plan || <span className="text-slate-400 italic">No plan yet. Click "Edit plan" to add your schedule and notes.</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="panel p-6">
        <h2 className="flex items-center gap-2 font-display font-semibold text-slate-900 mb-3">
          <Target className="w-5 h-5 text-slate-500" /> Suggested milestones
        </h2>
        <div className="rule-line" />
        <ul className="space-y-3 text-sm text-slate-600 mt-5">
          {[
            "Week 1-2: Complete Unit 1 & 2 of all subjects.",
            "Week 3-4: Complete Unit 3 & 4; attempt question bank problems.",
            "Week 5-6: Complete remaining units; solve previous question papers.",
            "Week 7-8: Revision + mock tests + lab prep (coming soon).",
          ].map((m, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-700 mt-0.5 shrink-0" /> {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
