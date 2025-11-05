import React from "react";
import { useNavigate } from "react-router-dom";
import accueilPrincipal from "../assets/accueilprincipal.png";

export default function AccueilPrincipal() {
  const navigate = useNavigate();

  const buttonHoverStyle: React.CSSProperties = {
    transition: "all 0.3s ease",
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${accueilPrincipal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🧸 Bouton Espace Élèves */}
      <button
        onClick={() => navigate("/loma")}
        className="absolute z-10"
        style={{
          top: "63%",
          left: "12%",
          width: "25%",
          height: "10%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.5)";
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label="Aller à l’espace élèves"
      />

      {/* 🎓 Bouton Espace Enseignants */}
      <button
        onClick={() => navigate("/enseignant")}
        className="absolute z-10"
        style={{
          top: "75%",
          left: "12%",
          width: "25%",
          height: "10%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.5)";
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label="Aller à l’espace enseignants"
      />
    </div>
  );
}