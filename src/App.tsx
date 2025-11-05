// src/App.tsx
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// 🌍 Mondes enfants
import AccueilMonde from "./worlds/AccueilMonde";
import FrancaisMonde from "./worlds/FrancaisMonde";
import MathsMonde from "./worlds/MathsMonde";

// 👩‍🏫 Espace enseignant
import EnseignantHost from "./worlds/enseignant/EnseignantHost";

// 🌸 Nouvelle page d’accueil LOMA (avec mascottes)
import AccueilLoma from "./components/AccueilLoma";

// ======================================================
// 🌈 Layout global (fond général + gestion des sous-pages)
// ======================================================
function AppContent() {
  const location = useLocation();

  const isAccueil = location.pathname === "/";
  const isMonde = location.pathname === "/child";

  // 🎹 Raccourci clavier pour accéder à l’espace enseignant
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "l") {
        window.location.href = "/enseignant";
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center font-[Nunito] text-gray-800 relative w-screen h-screen m-0 p-0"
      style={{
        backgroundImage: isAccueil
          ? "url('/images/fond-loma-accueil.png')"
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff8ee",
      }}
    >
      {isAccueil && (
        <div className="absolute inset-0 bg-[#fff8ee]/40 backdrop-blur-[1px] -z-10" />
      )}
      <Outlet />
    </div>
  );
}

// ======================================================
// 🚀 ROUTEUR PRINCIPAL
// ======================================================
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContent />,
    children: [
      // 🏠 Nouvelle page d’accueil Loma
      { index: true, element: <AccueilLoma /> },

      // 🌸 Mondes enfants
      { path: "child", element: <AccueilMonde /> },
      { path: "francais", element: <FrancaisMonde /> },
      { path: "maths", element: <MathsMonde /> },

      // 👩‍🏫 Espace enseignant
      { path: "enseignant", element: <EnseignantHost /> },

      // 🚫 Redirection vers l’accueil si mauvaise URL
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

// ======================================================
// 🧩 Application principale
// ======================================================
export default function App() {
  return (
    <div className="w-screen h-screen bg-[#fff8ee] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}