import { Briefcase, Gift, Award } from "lucide-react";
import { motion } from "motion/react";
import { Section, SectionHeading, GlassCard } from "./ui/Layout";

const colorStyles = {
  yellow: {
    glow: "bg-yellow-500/20",
    iconBg: "bg-yellow-500/10",
    ring: "ring-yellow-500/30",
    text: "text-yellow-400"
  },
  cyan: {
    glow: "bg-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    ring: "ring-cyan-500/30",
    text: "text-cyan-400"
  },
  purple: {
    glow: "bg-purple-500/20",
    iconBg: "bg-purple-500/10",
    ring: "ring-purple-500/30",
    text: "text-purple-400"
  }
};

const PrizeCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  delay,
  perks
}: { 
  icon: any, 
  title: string, 
  description: string, 
  color: keyof typeof colorStyles, 
  delay: number,
  perks: string[]
}) => {
  const styles = colorStyles[color];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="relative group h-full will-change-transform"
    >
      <div className={`absolute inset-0 ${styles.glow} blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
      <GlassCard className="relative flex flex-col items-center text-center p-8 border-t-2 border-t-white/10 hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className={`p-4 rounded-full ${styles.iconBg} mb-6 ring-1 ${styles.ring}`}>
          <Icon size={40} className={styles.text} />
        </div>
        <h3 className={`text-2xl font-bold ${styles.text} mb-4`}>{title}</h3>
        <p className="text-gray-300 mb-6 min-h-[3rem]">{description}</p>
        <ul className="text-sm text-gray-400 space-y-2 mt-auto">
          {perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
};

export default function Prizes() {
  return (
    <Section id="prizes" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none" />

      <SectionHeading centered>Rewards & Perks</SectionHeading>
      
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-4">
        {/* Internship */}
        <PrizeCard 
          icon={Briefcase} 
          title="Internship Opportunities" 
          description="Direct interview opportunities for the top performing teams with our hiring partners."
          color="yellow" 
          delay={0}
          perks={[
            "+ Top 2 Teams",
            "+ Individual Performance Based",
            "+ Career Growth"
          ]}
        />

        {/* Goodies */}
        <PrizeCard 
          icon={Gift} 
          title="Exciting Prizes" 
          description="Win amazing goodies, tech accessories, and exclusive merchandise."
          color="cyan" 
          delay={0.1}
          perks={[
            "+ Tech Accessories",
            "+ Winner Trophies",
            "+ Exclusive Swag"
          ]}
        />

        {/* Certificates */}
        <PrizeCard 
          icon={Award} 
          title="Recognition" 
          description="Official recognition of your skills and participation."
          color="purple" 
          delay={0.2}
          perks={[
            "+ Certificate of Excellence",
            "+ Participation Certificates",
            "+ LinkedIn Badges"
          ]}
        />
      </div>
    </Section>
  );
}
