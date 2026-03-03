import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Rocket } from "lucide-react";

export default function StickyCTA({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const showTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 2000);

    // Auto-hide after 10 seconds (optional, but requested "disappear after a few seconds")
    // Let's make it 12 seconds total (2s wait + 10s visible)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 max-w-md"
        >
          <div className="glass-card p-4 rounded-2xl border border-cyan-500/30 shadow-[0_10px_40px_rgba(6,182,212,0.3)] flex items-center gap-4 bg-black/80 backdrop-blur-md">
            <div className="hidden sm:flex p-3 rounded-full bg-cyan-600/20 text-cyan-400">
              <Rocket size={24} />
            </div>
            
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm sm:text-base">Ready to Build?</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Join BuildBattle 2026 today!</p>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={onRegisterClick}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-lg shadow-cyan-900/20"
              >
                Register Now
              </button>
              <button 
                onClick={handleDismiss}
                className="p-1 text-gray-500 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
