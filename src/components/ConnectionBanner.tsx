import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 🌐 ConnectionBanner — affiche "Connecté" / "Hors ligne" selon l'état du réseau
 */
export default function ConnectionBanner() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setVisible(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-md text-sm font-semibold backdrop-blur-sm ${
            isOnline
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {isOnline ? "🟢 Connecté à Internet" : "🔴 Vous êtes hors ligne"}
        </motion.div>
      )}
    </AnimatePresence>
  );
}