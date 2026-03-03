import { Calendar, Code, Laptop, Users, Award, Rocket } from "lucide-react";
import { Section, SectionHeading, GlassCard } from "./ui/Layout";

export default function About() {
  return (
    <>
      <Section id="about" className="bg-secondary-bg/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading>About The Battle</SectionHeading>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              BuildBattle 2026 is not your average hackathon. It is an All India online showdown organized by Codenbuild, designed to test your ability to ship real products under pressure.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 text-cyan-400">
                  <Laptop size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Mode</h4>
                  <p className="text-gray-400">Google Meet + Online Deployment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 text-cyan-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Registration Period</h4>
                  <p className="text-gray-400">6 March – 25 March 2026</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <GlassCard hoverEffect className="border-l-4 border-l-cyan-500">
              <h3 className="text-2xl font-bold text-white mb-2">Round 1</h3>
              <p className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent font-serif italic mb-2 font-bold">PPT Screening</p>
              <p className="text-gray-400">Submit your idea and architecture. Everyone will be in the coding round—no shortlisting.</p>
            </GlassCard>
            <GlassCard hoverEffect className="border-l-4 border-l-indigo-500">
              <h3 className="text-2xl font-bold text-white mb-2">Round 2</h3>
              <p className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-serif italic mb-2 font-bold">Coding & Deployment</p>
              <p className="text-gray-400">Turn your idea into reality. Code, build, and deploy your solution live.</p>
            </GlassCard>
          </div>
        </div>
      </Section>

      <Section id="objectives">
        <SectionHeading centered>Objectives</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <Code />, title: "Real-world Solving", desc: "Promote practical problem solving skills over theoretical knowledge." },
            { icon: <Rocket />, title: "Full Deployment", desc: "Encourage end-to-end project deployment, not just local prototypes." },
            { icon: <Award />, title: "Opportunities", desc: "Provide internship opportunities and identify talented student developers." },
            { icon: <Users />, title: "Ecosystem", desc: "Strengthen the student developer ecosystem across India." },
            { icon: <Laptop />, title: "Innovation", desc: "Foster a culture of innovation and rapid prototyping." },
          ].map((obj, idx) => (
            <GlassCard key={idx} hoverEffect className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-cyan-600/10 to-indigo-600/10 text-cyan-400 mb-4 border border-white/5">
                {obj.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{obj.title}</h3>
              <p className="text-gray-400 text-sm">{obj.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
