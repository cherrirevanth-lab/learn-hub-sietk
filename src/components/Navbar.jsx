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

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto h-full px-5 flex items-center justify-between">
          {/* Masthead */}
          <Link to="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="hidden sm:block leading-tight">
              <span className="block font-display font-semibold text-slate-900">{APP_NAME}</span>
              <span className="block text-[10px] font-medium text-slate-500">R23 · CSE</span>
            </span>
          </Link>

          {/* Desktop nav — text links, underlined when active */}
          <nav className="hidden md:flex items-center gap-5 h-full">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`flex items-center gap-2 h-full border-b-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-brand-600 text-slate-900"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${active ? "text-slate-700" : "text-slate-400"}`} />
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
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors relative"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-12 w-72 panel p-4">
                  <h4 className="font-display font-semibold text-slate-900 flex items-center gap-2">
                    <Bell className="w-4 h-4 text-slate-500" /> Notifications
                  </h4>
                  <div className="rule-line my-3" />
                  <div className="space-y-2 text-sm">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="font-medium text-slate-900">Getting started with {APP_NAME}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Complete your first unit to get started.</p>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-200">
                      <p className="font-medium text-slate-900">New subjects available</p>
                      <p className="text-xs text-slate-500 mt-0.5 tabular-nums">8 theory subjects ready for you.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <span className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 font-semibold text-sm shrink-0">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span className="hidden lg:block leading-tight">
                <span className="block text-sm font-semibold text-slate-900">{user.name}</span>
                <span className="block text-[11px] text-slate-500 capitalize">{user.role}</span>
              </span>
            </div>

            <button
              onClick={logout}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Sign out"
              aria-label="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/20 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 space-y-1" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className={active ? "border-b-2 border-brand-600" : ""}>{item.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-slate-400" />
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
