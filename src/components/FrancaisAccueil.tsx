// src/components/FrancaisAccueil.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FrancaisAccueil() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/v3.png')", // ✅ le fichier est dans /public
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === Zones cliquables invisibles === */}

      {/* 📖 Lecture */}
      <button
        onClick={() => navigate("/francais/lecture")}
        className="absolute z-10"
        style={{
          top: "39%",
          left: "14.5%",
          width: "16%",
          height: "18%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Lecture"
      />

      {/* ✏️ Grammaire / Conjugaison */}
      <button
        onClick={() => navigate("/francais/grammaire")}
        className="absolute z-10"
        style={{
          top: "39%",
          left: "33.5%",
          width: "16%",
          height: "18%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Grammaire et Conjugaison"
      />

      {/* 🅰️ Orthographe */}
      <button
        onClick={() => navigate("/francais/orthographe")}
        className="absolute z-10"
        style={{
          top: "64.5%",
          left: "14.5%",
          width: "16%",
          height: "18%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Orthographe"
      />

      {/* 📚 Lexique */}
      <button
        onClick={() => navigate("/francais/lexique")}
        className="absolute z-10"
        style={{
          top: "66.5%",
          left: "33.5%",
          width: "16%",
          height: "18%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Lexique"
      />
    </div>
  );
}