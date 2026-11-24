import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { APP_NAME } from "../config";
import {
  Menu,
  X,
  Home,
  BookOpen,
  ClipboardList,
  ShieldCheck,
  Bell,
  LogOut,
  GraduationCap,
  Settings as SettingsIcon,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "home", label: "Dashboard", icon: Home, path: "/" },
  { key: "subjects", label: "Subjects", icon: BookOpen, path: "/subjects" },
  { key: "roadmap", label: "Study Plan", icon: ClipboardList, path: "/roadmap" },
  { key: "admin", label: "Admin", icon: ShieldCheck, path: "/admin" },
  { key: "settings", label: "Settings", icon: SettingsIcon, path: "/settings" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const isAdmin = user.role === "admin";
  const navItems = NAV_ITEMS.filter((i) => !(i.key === "admin" && !isAdmin));

  const roleColors = {
    student: "bg-blue-100 text-blue-700",
    teacher: "bg-indigo-100 text-indigo-700",
    admin: "bg-emerald-100 text-emerald-700",
    professor: "bg-purple-100 text-purple-700",
    designer: "bg-pink-100 text-pink-700",
    engineer: "bg-orange-100 text-orange-700",
  };

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white/90 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-[1400px] mx-auto h-full px-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white shadow-lg shadow-brand-600/25 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-slate-900 leading-tight">{APP_NAME}</div>
              <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">R23 · CSE</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-white text-brand-700 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${active ? "text-brand-600" : ""}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors relative"
                title="Notifications"
              >
                <Bell className="w-4.5 h-4.5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-12 w-72 panel p-4 animate-fade-in">
                  <h4 className="font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Bell className="w-4 h-4 text-brand-600" /> Notifications
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 rounded-xl bg-brand-50 border border-brand-100">
                      <p className="font-medium text-brand-900">Welcome to {APP_NAME}!</p>
                      <p className="text-xs text-brand-600 mt-0.5">Complete your first unit to get started.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50">
                      <p className="font-medium text-slate-800">New subjects available</p>
                      <p className="text-xs text-slate-500 mt-0.5">8 theory subjects ready for you.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-slate-800 leading-tight">{user.name}</p>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${roleColors[user.role] || "bg-slate-100 text-slate-600"}`}>
                  {user.role}
                </span>
              </div>
            </div>

            <button
              onClick={logout}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 space-y-1 shadow-xl" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-item ${active ? "active" : ""}`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                  <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
