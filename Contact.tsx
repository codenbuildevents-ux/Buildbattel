import { Phone, Mail } from "lucide-react";
import { Section, SectionHeading, GlassCard } from "./ui/Layout";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading centered>Contact Us</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
        <GlassCard className="flex items-center gap-4 hover:bg-white/5 transition-colors">
          <div className="p-4 rounded-full bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 text-cyan-400">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Team Codenbuild</h4>
            <p className="text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-1 font-bold">Soham Thakare</p>
            <a href="tel:+917822916318" className="text-gray-400 hover:text-white transition-colors">+91 78229 16318</a>
          </div>
        </GlassCard>
        
        <GlassCard className="flex items-center gap-4 hover:bg-white/5 transition-colors">
          <div className="p-4 rounded-full bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 text-cyan-400">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Team Connect</h4>
            <p className="text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-1 font-bold">Aman Wankar</p>
            <a href="tel:+917820954891" className="text-gray-400 hover:text-white transition-colors">+91 78209 54891</a>
          </div>
        </GlassCard>
      </div>
      
      <div className="text-center mt-12">
        <a href="mailto:codenbuild.events@gmail.com" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Mail size={18} />
          <span>codenbuild.events@gmail.com</span>
        </a>
      </div>
    </Section>
  );
}
