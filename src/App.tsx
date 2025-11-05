import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// 🌍 Mondes enfants
import AccueilMonde from "./worlds/AccueilMonde";
import FrancaisMonde from "./worlds/FrancaisMonde";
import MathsMonde from "./worlds/MathsMonde";

// 🔢 Mondes d’accueil
import MathsAccueil from "./components/MathsAccueil";
import FrancaisAccueil from "./components/FrancaisAccueil"; // ✅ nouvelle page (fond V3)

// 👩‍🏫 Espace enseignant
import EnseignantHost from "./worlds/enseignant/EnseignantHost";

// 🏠 Accueil général (Espace Enfant / Enseignant)
import AccueilPrincipal from "./components/AccueilPrincipal";

// 🌸 Accueil Loma (choix Français / Maths)
import AccueilLoma from "./components/AccueilLoma";

// ======================================================
// 🌈 Layout global
// ======================================================
function AppContent() {
  const location = useLocation();
  const isAccueil = location.pathname === "/";

  // 🎹 Raccourci enseignant (Ctrl + Shift + L)
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
      // 🏠 Page d’accueil principale (choix Élève / Enseignant)
      { index: true, element: <AccueilPrincipal /> },

      // 🌿 Accueil LOMA (choix Français / Maths)
      { path: "loma", element: <AccueilLoma /> },

      // 🟣 Monde du Français (page d’accueil + sous-pages)
      {
        path: "francais",
        children: [
          { index: true, element: <FrancaisAccueil /> }, // ✅ ton image V3 ici
          { path: "lecture", element: <FrancaisMonde /> },
          { path: "grammaire", element: <FrancaisMonde /> },
          { path: "orthographe", element: <FrancaisMonde /> },
          { path: "lexique", element: <FrancaisMonde /> },
        ],
      },

      // 🔢 Monde des Maths
      {
        path: "maths",
        children: [
          { index: true, element: <MathsAccueil /> },
          { path: "calculs", element: <MathsMonde /> },
          { path: "geometrie", element: <MathsMonde /> },
          { path: "grandeurs-mesures", element: <MathsMonde /> },
          { path: "problemes", element: <MathsMonde /> },
        ],
      },

      // 👩‍🏫 Espace Enseignant
      { path: "enseignant", element: <EnseignantHost /> },

      // 🌸 Optionnel : Monde Enfant
      { path: "child", element: <AccueilMonde /> },

      // 🚫 Redirection par défaut
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