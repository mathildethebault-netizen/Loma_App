import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import mascotteMaths from "../assets/mascotteMaths.png";
import mascotteFrancais from "../assets/mascotteFrancais.png";

export default function AccueilLoma() {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      if (!isMuted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  return (
    <div className="min-h-screen bg-[#faefd6] flex flex-col items-center justify-center text-center font-sans relative overflow-hidden">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo Loma École"
        className="w-56 mb-4 mt-6 drop-shadow-md"
      />

      {/* Texte d’accueil */}
      <h1 className="text-4xl font-bold text-[#604A3B] font-[ChildosArabic] drop-shadow-sm mb-2">
        Bienvenue dans Loma
      </h1>
      <p className="text-lg text-[#7B5B45] max-w-md mb-8 leading-snug">
        Choisis ton monde et découvre un espace d’apprentissage{" "}
        <span className="font-semibold">doux et bienveillant.</span>
      </p>

      {/* Mascottes */}
      <div className="flex items-center justify-center gap-12 mb-10">
        {/* Mascotte Français */}
        <motion.img
          src={mascotteFrancais}
          alt="Mascotte Français"
          className="w-40 cursor-pointer drop-shadow-md"
          whileHover={{
            scale: 1.05,
            filter: "drop-shadow(0px 0px 12px rgba(150,137,158,0.6))",
          }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          onClick={() => navigate("/francais")}
        />

        {/* Mascotte Maths */}
        <motion.img
          src={mascotteMaths}
          alt="Mascotte Maths"
          className="w-40 cursor-pointer drop-shadow-md"
          whileHover={{
            scale: 1.05,
            filter: "drop-shadow(0px 0px 12px rgba(226,153,74,0.6))",
          }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          onClick={() => navigate("/maths")}
        />
      </div>

      {/* Boutons */}
      <div className="flex gap-6 mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/francais")}
          className="px-6 py-3 rounded-full text-white text-lg font-medium bg-gradient-to-r from-[#c5b3ca] to-[#96899e] shadow-md"
        >
          Monde du Français
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/maths")}
          className="px-6 py-3 rounded-full text-white text-lg font-medium bg-gradient-to-r from-[#f2b469] to-[#e2994a] shadow-md"
        >
          Monde des Maths
        </motion.button>
      </div>

      {/* Contrôle audio */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 text-2xl text-[#604A3B] opacity-80 hover:opacity-100 transition"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      {/* Fond musical */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2023/02/07/audio_fbb0d8db92.mp3?filename=happy-childhood-144470.mp3"
      />
    </div>
  );
}