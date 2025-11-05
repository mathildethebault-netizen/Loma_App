import React from "react";
import { useNavigate } from "react-router-dom";
import mondeMaths from "../assets/monde-maths.png"; // ✅ ton image finale (fond complet)

export default function MathsAccueil() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${mondeMaths})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === Zones cliquables invisibles === */}

      {/* ➕ Calculs */}
      <button
        onClick={() => navigate("/maths/calculs")}
        className="absolute z-10"
        style={{
          top: "39%",
          left: "15.6%",
          width: "16%",
          height: "18%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Calculs"
      />

      {/* 📐 Espace & Géométrie */}
      <button
        onClick={() => navigate("/maths/geometrie")}
        className="absolute z-10"
        style={{
          top: "37.5%",
          left: "35%",
          width: "16%",
          height: "19%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Espace et Géométrie"
      />

      {/* ⚖️ Grandeurs & Mesures */}
      <button
        onClick={() => navigate("/maths/grandeurs-mesures")}
        className="absolute z-10"
        style={{
          top: "64%",
          left: "15.3%",
          width: "16%",
          height: "19%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Grandeurs et Mesures"
      />

      {/* 📘 Problèmes */}
      <button
        onClick={() => navigate("/maths/problemes")}
        className="absolute z-10"
        style={{
          top: "66.5%",
          left: "35%",
          width: "16%",
          height: "18%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        aria-label="Problèmes"
      />
    </div>
  );
}