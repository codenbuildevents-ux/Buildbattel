import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Registration", href: "#registration" },
  { name: "Submission", href: "#submission" },
  { name: "Partners", href: "#partners" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRegisterClick();
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-serif font-bold text-xl tracking-wider">
            <span className="text-white">BUILD</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">BATTLE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://chat.whatsapp.com/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors uppercase tracking-wide border border-green-500/30 px-4 py-2 rounded-full hover:bg-green-500/10"
          >
            <MessageCircle size={16} />
            <span>Join Community</span>
          </a>
          <button 
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-cyan-600/20"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-white py-2 block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://chat.whatsapp.com/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-green-400 hover:text-green-300 py-2 border border-green-500/30 rounded-lg bg-green-500/5"
              >
                <MessageCircle size={18} />
                <span>Join WhatsApp Community</span>
              </a>
              <button 
                onClick={handleRegisterClick}
                className="bg-cyan-600 text-white py-3 rounded-lg text-center font-semibold"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
