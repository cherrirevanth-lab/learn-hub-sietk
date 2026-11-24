import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import SubjectList from "./components/SubjectList";
import SubjectDetail from "./components/SubjectDetail";
import UnitDetail from "./components/UnitDetail";
import Roadmap from "./components/Roadmap";
import AdminDashboard from "./components/AdminDashboard";
import Settings from "./components/Settings";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user || !user.id) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const { user } = useAuth();
  const isAuthed = Boolean(user && user.id);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isAuthed ? <Navigate to="/" replace /> : <Login />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<SubjectList />} />
          <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
          <Route path="/subjects/:subjectId/units/:unitNumber" element={<UnitDetail />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthed ? "/" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
