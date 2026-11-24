import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FirstLoginInstructions from "./FirstLoginInstructions";
import { useAuth } from "../context/AuthContext";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function Layout() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />

      {user.id && !user.profileComplete && (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-20">
          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors"
          >
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-amber-900">Complete your profile to personalize your subjects</p>
              <p className="text-xs text-amber-700">Set your name, branch, semester and theme in Settings.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>
      )}

      <main className="pt-24 pb-16 px-4 sm:px-6 max-w-[1400px] mx-auto w-full">
        <Outlet />
      </main>
      <FirstLoginInstructions />
    </div>
  );
}
