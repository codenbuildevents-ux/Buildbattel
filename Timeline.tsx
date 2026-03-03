import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Section, SectionHeading } from "./ui/Layout";

const events = [
  {
    day: "Day 1",
    date: "28 March 2026",
    schedule: [
      { time: "10:00 AM", event: "Inauguration" },
      { time: "11:00 AM", event: "Problem Statement Release" },
      { time: "01:30 PM", event: "PPT Submission Deadline" },
      { time: "03:00 PM", event: "Coding Round Briefing" },
      { time: "03:00 PM", event: "Coding Begins" },
      { time: "07:00 PM", event: "Mentoring Session" },
    ]
  },
  {
    day: "Day 2",
    date: "29 March 2026",
    schedule: [
      { time: "11:00 AM", event: "Progress Check" },
      { time: "03:00 PM", event: "Final Submission" },
    ]
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <Section id="timeline" className="relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: y1, opacity }} 
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2, opacity }} 
          className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" 
        />
      </div>

      <SectionHeading centered>Event Timeline</SectionHeading>
      
      <div className="max-w-4xl mx-auto mt-12 relative z-10">
        {events.map((day, dayIdx) => (
          <div key={dayIdx} className="mb-12 last:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 mb-6 will-change-transform"
            >
              <h3 className="text-2xl font-bold text-cyan-400">{day.day}</h3>
              <span className="h-px flex-1 bg-white/10"></span>
              <span className="text-gray-400 font-serif italic">{day.date}</span>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="space-y-6 relative pl-8 ml-3"
            >
              {/* Gradient Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-50" />

              {day.schedule.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                  }}
                  className="relative group will-change-transform"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[39px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-500 z-10 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-300"></span>
                  
                  <div className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:translate-x-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono font-bold whitespace-nowrap min-w-[100px] text-lg">{item.time}</span>
                    <span className="text-white font-medium text-lg">{item.event}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Final Results</h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-serif text-xl relative z-10">31 March 2026</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
