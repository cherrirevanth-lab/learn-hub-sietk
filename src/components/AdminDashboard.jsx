import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { SUBJECTS } from "../data/subjects";
import { Users, BarChart3, Search, TrendingUp, ShieldCheck, BookOpen } from "lucide-react";

const MOCK_STUDENTS = [
  { id: "s1", name: "Aarav Sharma", email: "aarav@college.edu", role: "student", branch: "CSE", semester: 2, progress: { "23CS0511": { units: { 1: true, 2: true, 3: true } }, "23CS0512": { units: { 1: true, 2: true } } } },
  { id: "s2", name: "Priya Reddy", email: "priya@college.edu", role: "student", branch: "CSE", semester: 2, progress: { "23CS0511": { units: { 1: true } }, "23HS0838": { units: { 1: true, 2: true, 3: true, 4: true, 5: true } } } },
  { id: "s3", name: "Rahul Verma", email: "rahul@college.edu", role: "student", branch: "CSE", semester: 2, progress: { "23CS0513": { units: { 1: true, 2: true, 3: true, 4: true } } } },
  { id: "s4", name: "Sneha Patel", email: "sneha@college.edu", role: "student", branch: "CSE", semester: 2, progress: {} },
];

export default function AdminDashboard() {
  const { user, progress } = useAuth();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  if (user.role !== "admin") {
    return (
      <div className="panel p-12 text-center border-dashed border-amber-200 bg-amber-50/50">
        <ShieldCheck className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-xl font-display font-bold text-slate-900 mb-2">Admin Access Required</h2>
        <p className="text-sm text-slate-500">Only admin accounts can view the progress dashboard. Sign in with the Admin role.</p>
      </div>
    );
  }

  const allUsers = [...MOCK_STUDENTS, { id: "self", name: user.name, email: user.email, role: user.role, branch: user.branch, semester: user.semester, progress }];
  const filtered = allUsers.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
  const totalUnits = SUBJECTS.filter((s) => s.branch === "CSE" && s.semester === 2 && !s.isLab).reduce((a, s) => a + s.units.length, 0);
  const pctOf = (u) => {
    const c = Object.values(u.progress || {}).reduce((a, s) => a + Object.values(s?.units || {}).filter(Boolean).length, 0);
    return totalUnits ? Math.round((c / totalUnits) * 100) : 0;
  };
  const avg = Math.round(allUsers.reduce((a, u) => a + pctOf(u), 0) / allUsers.length);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-2">
          <ShieldCheck className="w-3 h-3" /> ADMIN AREA
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Monitor student progress across subjects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total Users" value={allUsers.length} icon={Users} color="bg-brand-50 text-brand-600" />
        <StatCard label="Avg Progress" value={avg + "%"} icon={TrendingUp} color="bg-emerald-50 text-emerald-600" />
        <StatCard label="Total Units" value={totalUnits} icon={BookOpen} color="bg-violet-50 text-violet-600" />
      </div>

      <div className="relative max-w-xl">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input className="input pl-10" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Branch/Sem</th>
                <th className="px-4 py-3 text-left">Progress</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((u) => {
                const pct = pctOf(u);
                return (
                  <tr key={u.id} className="hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">{u.name.charAt(0)}</div>
                        <div>
                          <p className="font-medium text-slate-800">{u.name}</p>
                          <p className="text-xs text-slate-400">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 capitalize text-slate-600">{u.role}</td>
                    <td className="px-4 py-3 text-slate-600">{u.branch} / Sem {u.semester}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-brand-600 h-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-slate-500">{pct}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => setSelected(u)} className="text-xs text-brand-600 hover:underline">View details</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4">
          <div className="panel w-full max-w-md p-6 animate-fade-in">
            <h3 className="font-display font-bold text-slate-900 mb-4">{selected.name} — Subject Progress</h3>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {SUBJECTS.filter((s) => s.branch === selected.branch && s.semester === selected.semester && !s.isLab).map((s) => {
                const p = selected.progress?.[s.id];
                const c = p ? Object.values(p.units || {}).filter(Boolean).length : 0;
                const pct = s.units.length ? Math.round((c / s.units.length) * 100) : 0;
                return (
                  <div key={s.id} className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">{s.name}</p>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                        <div className="bg-brand-600 h-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">{pct}%</span>
                  </div>
                );
              })}
            </div>
            <button onClick={() => setSelected(null)} className="btn-outline w-full mt-5">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="panel p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}><Icon className="w-5 h-5" /></div>
      <div>
        <div className="text-2xl font-display font-bold text-slate-900">{value}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    </div>
  );
}
