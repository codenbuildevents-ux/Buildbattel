import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (agreed) {
      window.open("https://forms.gle/9Q7BqX8Geidi4evP9", "_blank");
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-cyan-900/10">
              <h3 className="text-xl font-serif font-bold text-white">Terms & Conditions</h3>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-4 text-gray-300 text-sm">
              <p><strong className="text-cyan-400">1. Eligibility:</strong> Open to all students currently enrolled in a college or university in India.</p>
              <p><strong className="text-cyan-400">2. Team Rules:</strong> Teams must have 3-5 members. Changes to team structure after registration are not allowed without prior approval.</p>
              <p><strong className="text-cyan-400">3. Registration:</strong> Fees are non-refundable. Registration closes strictly on 25 March 2026.</p>
              <p><strong className="text-cyan-400">4. Development:</strong> All code must be written during the hackathon. Pre-built projects are not allowed.</p>
              <p><strong className="text-cyan-400">5. Deployment:</strong> Projects must be deployed on a public URL (Vercel, Netlify, Heroku, etc.) for evaluation.</p>
              <p><strong className="text-cyan-400">6. Code of Conduct:</strong> Harassment, plagiarism, or unethical behavior will lead to immediate disqualification.</p>
              <p><strong className="text-cyan-400">7. IP Rights:</strong> Participants retain ownership of their code. Organizers may use project demos for promotional purposes.</p>
              <p><strong className="text-cyan-400">8. Liability:</strong> Organizers are not liable for any technical issues, internet failures, or platform downtimes faced by participants.</p>
              <p><strong className="text-cyan-400">9. Acceptance:</strong> By checking the box below, you agree to all the terms and conditions mentioned above.</p>
            </div>

            <div className="p-6 border-t border-white/10 bg-black/40">
              <label className="flex items-start gap-3 cursor-pointer group mb-6">
                <div className="relative mt-0.5">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-all ${agreed ? 'bg-cyan-600 border-cyan-600' : 'border-white/20 group-hover:border-cyan-500/50'}`}>
                    {agreed && <CheckCircle2 size={14} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                  </div>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                  I have read and agree to the terms and conditions of BuildBattle 2026.
                </span>
              </label>

              <button
                disabled={!agreed}
                onClick={handleContinue}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  agreed 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Registration
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
