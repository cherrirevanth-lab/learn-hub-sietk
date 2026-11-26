import { useState, useEffect } from "react";
import { useAuth, ACCENTS } from "../context/AuthContext";
import { BRANCHES } from "../data/subjects";
import { APP_NAME } from "../config";
import {
  getNotifyPref, saveNotifyPref, notificationSupported, currentPermission,
  requestPermission, sendNotification, registerSW,
} from "../utils/notifications";
import {
  UserRound,
  Palette,
  Save,
  CheckCircle2,
  Sun,
  Moon,
  Monitor,
  GraduationCap,
  Mail,
  Bell,
  BellOff,
  Send,
  Info,
} from "lucide-react";

export default function Settings() {
  const { user, updateProfile, appearance, setTheme, setAccent } = useAuth();
  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    branch: user.branch || "CSE",
    semester: user.semester || 2,
  });
  const [saved, setSaved] = useState(false);
  const [notifyPref, setNotifyPref] = useState(getNotifyPref());
  const [notifyStatus, setNotifyStatus] = useState(currentPermission());

  useEffect(() => { registerSW(); }, []);

  const toggleNotifications = async () => {
    if (!notificationSupported()) {
      setNotifyStatus("unsupported");
      return;
    }
    if (notifyPref.enabled) {
      const next = { ...notifyPref, enabled: false };
      setNotifyPref(next); saveNotifyPref(next);
      return;
    }
    const perm = await requestPermission();
    setNotifyStatus(perm);
    if (perm === "granted") {
      const next = { ...notifyPref, enabled: true };
      setNotifyPref(next); saveNotifyPref(next);
      await sendNotification({ title: "Notifications enabled", body: "You'll get study reminders from Learn Hub.", url: "/roadmap" });
    }
  };

  const changeReminder = (reminder) => {
    const next = { ...notifyPref, reminder, lastShown: null };
    setNotifyPref(next); saveNotifyPref(next);
  };

  const testNotification = async () => {
    const ok = await sendNotification({ title: "Learn Hub · Test", body: "Your study reminders are working.", url: "/roadmap" });
    setNotifyStatus(ok ? "sent" : currentPermission());
  };

  const saveProfile = (e) => {
    e.preventDefault();
    updateProfile({ ...form, semester: Number(form.semester) });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const themeOptions = [
    { key: "light", label: "Light", icon: Sun },
    { key: "dark", label: "Dark", icon: Moon },
    { key: "system", label: "System", icon: Monitor },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-semibold text-slate-900">Settings</h1>
        <div className="rule-line mt-3" />
        <p className="text-sm text-slate-500 mt-3">
          Set up your profile and choose how {APP_NAME} looks on this device.
        </p>
      </div>

      {!user.profileComplete && (
        <div className="panel shadow-none p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-slate-800">Complete your profile</p>
            <p className="text-xs text-slate-600 mt-0.5">
              Add your name, branch and semester below, then save. Your subjects and study plan depend on this.
            </p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile */}
        <div className="panel shadow-none p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <UserRound className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900">Profile</h2>
              <p className="text-xs text-slate-500">
                {user.profileComplete ? "Update your details anytime" : "Add your details to get started"}
              </p>
            </div>
            {user.profileComplete && (
              <span className="ml-auto chip border-slate-200 bg-slate-50 text-slate-600">
                <CheckCircle2 className="w-3 h-3" /> Complete
              </span>
            )}
          </div>
          <div className="rule-line mt-4" />

          <form onSubmit={saveProfile} className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  className="input pl-10 transition-colors"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  className="input pl-10 transition-colors"
                  placeholder="you@college.edu"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Branch</label>
                <select
                  className="input transition-colors"
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                >
                  {BRANCHES.map((b) => (
                    <option key={b.key} value={b.key}>{b.key}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Semester</label>
                <select
                  className="input tabular-nums transition-colors"
                  value={form.semester}
                  onChange={(e) => setForm({ ...form, semester: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                    <option key={s} value={s}>Sem {s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Account type</label>
              <div className="input bg-slate-50 capitalize flex items-center text-slate-500 transition-colors">
                {user.role}
              </div>
              <p className="text-xs text-slate-400 mt-1">Role is set at sign-in and cannot be changed here.</p>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              <Save className="w-4 h-4" /> Save profile
            </button>
            {saved && (
              <p className="text-sm text-emerald-700 text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Profile saved.
              </p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          {/* Appearance */}
          <div className="panel shadow-none p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Palette className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-slate-900">Appearance</h2>
                <p className="text-xs text-slate-500">Theme and accent color apply instantly</p>
              </div>
            </div>
            <div className="rule-line mt-4" />

            {/* Theme */}
            <div className="mt-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
              <div className="grid grid-cols-3 gap-2">
                {themeOptions.map((t) => {
                  const active = appearance.theme === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setTheme(t.key)}
                      aria-pressed={active}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-colors ${
                        active ? "border-accent-500 bg-slate-50" : "border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      <t.icon className={`w-5 h-5 ${active ? "text-accent-500" : "text-slate-400"}`} />
                      <span className={`text-xs font-medium ${active ? "text-accent-600" : "text-slate-600"}`}>{t.label}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Dark mode changes surfaces and text. System follows your device setting.
              </p>
            </div>

            {/* Accent */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Accent color</label>
              <div className="grid grid-cols-2 gap-1.5">
                {Object.entries(ACCENTS).map(([key, palette]) => {
                  const active = appearance.accent === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setAccent(key)}
                      aria-pressed={active}
                      className="flex items-center gap-2 p-2 rounded-lg text-slate-800 transition-colors hover:bg-slate-50"
                      title={key}
                    >
                      <span
                        className={`w-4 h-4 rounded-full shrink-0 ${active ? "ring-1 ring-current ring-offset-2 ring-offset-transparent" : ""}`}
                        style={{ background: palette[500] }}
                      />
                      <span className="text-xs capitalize text-slate-600">{key}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live preview */}
          <div className="panel shadow-none p-6">
            <h3 className="font-display text-sm font-semibold text-slate-700">Live preview</h3>
            <div className="rule-line mt-3" />
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-slate-900 text-sm truncate">{user.name || "Your name"}</p>
                <p className="text-xs text-slate-500 capitalize tabular-nums">
                  {user.role} · {user.branch} · Sem {user.semester}
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600">
                Preview
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip border-slate-200 bg-white text-slate-600">Primary</span>
              <span className="chip border-slate-200 bg-white text-slate-600">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: ACCENTS[appearance.accent]?.[500] }}
                /> Accent
              </span>
              <span className="chip border-slate-200 bg-white text-slate-600">Surface</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="panel shadow-none p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Bell className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900">Notifications</h3>
                <p className="text-xs text-slate-500">Study reminders on this device</p>
              </div>
            </div>
            <div className="rule-line mt-4" />

            <button
              onClick={toggleNotifications}
              disabled={notifyStatus === "unsupported" || notifyStatus === "denied"}
              className={`mt-5 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                notifyPref.enabled
                  ? "bg-slate-50 text-slate-700 border border-slate-300"
                  : notifyStatus === "denied" || notifyStatus === "unsupported"
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                  : "btn-primary"
              }`}
            >
              {notifyPref.enabled ? <><Bell className="w-4 h-4" /> Notifications on</> : <><BellOff className="w-4 h-4" /> Enable notifications</>}
            </button>

            {notifyStatus === "denied" && (
              <p className="text-xs text-rose-600 mt-2">Notifications are blocked in your browser. Allow them in site settings to enable.</p>
            )}

            {notifyPref.enabled && (
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Reminder frequency</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[["daily", "Daily"], ["3days", "Every 3 days"], ["weekly", "Weekly"]].map(([k, l]) => (
                      <button
                        key={k}
                        onClick={() => changeReminder(k)}
                        aria-pressed={notifyPref.reminder === k}
                        className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                          notifyPref.reminder === k
                            ? "border-accent-500 bg-slate-50 text-accent-600"
                            : "border-slate-200 text-slate-600 hover:border-slate-400"
                        }`}
                      >{l}</button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={testNotification}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-700 inline-flex items-center justify-center gap-2 transition-colors hover:bg-slate-50"
                >
                  <Send className="w-4 h-4" /> Send test notification
                </button>
                {notifyStatus === "sent" && <p className="text-xs text-emerald-700">Test notification sent.</p>}
              </div>
            )}

            <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
              Notifications are delivered by the installed PWA service worker — they can appear even when the tab is closed, while the device is online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
