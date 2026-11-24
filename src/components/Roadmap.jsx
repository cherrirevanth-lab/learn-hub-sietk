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
    <div className="space-y-8 animate-fade-in">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-2">
          <ClipboardList className="w-3 h-3" /> PERSONALIZED
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900">Study Plan &amp; Roadmap</h1>
        <p className="text-sm text-slate-500 mt-1">Plan your study schedule and track your roadmap.</p>
      </div>

      <div className="panel p-6">
        <h2 className="flex items-center gap-2 font-display font-bold text-slate-900 mb-5">
          <Calendar className="w-5 h-5 text-brand-600" /> Your Roadmap Overview
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
          <div className="space-y-4">
            {subjects.map((s) => {
              const p = progress[s.id];
              const completed = p ? Object.values(p.units || {}).filter(Boolean).length : 0;
              const pct = s.units.length ? Math.round((completed / s.units.length) * 100) : 0;
              return (
                <div key={s.id} className="relative pl-10">
                  <div className={`absolute left-2 top-1 w-4 h-4 rounded-full border-2 ${pct === 100 ? "bg-emerald-500 border-emerald-500" : "bg-white border-brand-500"}`} />
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-800 text-sm">{s.name}</h3>
                      <span className="text-xs text-slate-500">{pct}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-brand-600 h-full transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{completed} of {s.units.length} units complete</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-display font-bold text-slate-900 mb-4">Per-Subject Study Plans</h2>
        <div className="space-y-4">
          {subjects.map((s) => {
            const plan = studyPlan[s.id] || "";
            const isEditing = editingSubject === s.id;
            return (
              <div key={s.id} className="panel p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-slate-900">{s.name}</h3>
                    <p className="text-xs text-slate-400">{s.code} · {s.credits} credits</p>
                  </div>
                  {!isEditing && (
                    <button onClick={() => startEdit(s.id)} className="flex items-center gap-1 text-sm text-brand-600 hover:underline">
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
                      <button onClick={saveEdit} className="btn-primary"><Save className="w-4 h-4" /> Save</button>
                      <button onClick={() => { setEditingSubject(null); setDraft(""); }} className="btn-outline"><X className="w-4 h-4" /> Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700 whitespace-pre-wrap min-h-[60px]">
                    {plan || <span className="text-slate-400 italic">No plan yet. Click "Edit plan" to add your schedule and notes.</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="panel p-6">
        <h2 className="flex items-center gap-2 font-display font-bold text-slate-900 mb-4">
          <Target className="w-5 h-5 text-brand-600" /> Suggested Milestones
        </h2>
        <ul className="space-y-3 text-sm text-slate-600">
          {[
            "Week 1-2: Complete Unit 1 & 2 of all subjects.",
            "Week 3-4: Complete Unit 3 & 4; attempt question bank problems.",
            "Week 5-6: Complete remaining units; solve previous question papers.",
            "Week 7-8: Revision + mock tests + lab prep (coming soon).",
          ].map((m, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
