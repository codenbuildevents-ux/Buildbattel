import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section id={id} className={`py-24 px-4 md:px-8 relative overflow-hidden ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export const GlassCard = ({ className = "", children, hoverEffect = false }: { className?: string, children: ReactNode, hoverEffect?: boolean }) => {
  return (
    <motion.div 
      className={`glass-card rounded-2xl p-6 ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.2)" } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeading = ({ children, centered = false }: { children: ReactNode, centered?: boolean }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-bold mb-12 tracking-tight ${centered ? 'text-center' : ''}`}
    >
      <span className="bg-gradient-to-r from-white via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        {children}
      </span>
      <div className={`h-1.5 w-24 bg-gradient-to-r from-cyan-600 to-indigo-600 mt-6 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </motion.h2>
  );
};
