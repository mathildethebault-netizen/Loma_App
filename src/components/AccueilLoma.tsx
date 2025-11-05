import React from "react";
import { useNavigate } from "react-router-dom";
import lomaAccueil from "../assets/loma-accueil-16-9.png";

export default function AccueilLoma() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundColor: "#FEFBDA" }}
    >
      {/* 🌸 Image d’arrière-plan */}
      <img
        src={lomaAccueil}
        alt="Bienvenue dans Loma"
        className="absolute inset-0 w-full h-full object-contain md:scale-95 select-none transition-transform duration-500"
        draggable="false"
      />

      {/* 🟣 Bouton Français */}
      <button
        onClick={() => navigate("/francais")}
        className="absolute z-10 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#c5b3ca]/40 hover:bg-[#c5b3ca]/10 active:scale-95 transition-all duration-150 ease-out"
        style={{
          bottom: "8%",
          left: "24%",
          width: "20%",
          height: "8.5%",
          cursor: "pointer",
        }}
        aria-label="Entrer dans le monde du Français"
      />

      {/* 🟠 Bouton Maths */}
      <button
        onClick={() => navigate("/maths")}
        className="absolute z-10 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#e2994a]/40 hover:bg-[#e2994a]/10 active:scale-95 transition-all duration-150 ease-out"
        style={{
          bottom: "8%",
          right: "32.5%",
          width: "19.5%",
          height: "8.5%",
          cursor: "pointer",
        }}
        aria-label="Entrer dans le monde des Maths"
      />
    </div>
  );
}