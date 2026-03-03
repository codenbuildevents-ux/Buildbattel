import { Check, Users, CreditCard } from "lucide-react";
import { Section, SectionHeading, GlassCard } from "./ui/Layout";

export default function Registration({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <Section id="registration" className="bg-gradient-to-b from-black to-[#050505]">
      <SectionHeading centered>Registration</SectionHeading>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
        <GlassCard className="relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            RECOMMENDED
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Hackathon</h3>
          <div className="text-4xl font-bold text-cyan-400 mb-6">₹100 <span className="text-sm text-gray-500 font-normal">/ participant</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-300">
              <Users size={18} className="text-cyan-500" />
              <span>Team Size: 3–5 Members</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={18} className="text-cyan-500" />
              <span>Full Access to Hackathon</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={18} className="text-cyan-500" />
              <span>Certificate of Participation</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={18} className="text-cyan-500" />
              <span>Internship Opportunities</span>
            </li>
          </ul>
          
          <button 
            onClick={onRegisterClick}
            className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-center rounded-lg font-semibold transition-all shadow-lg shadow-cyan-900/20"
          >
            Register Team
          </button>
        </GlassCard>

        <GlassCard>
          <h3 className="text-2xl font-bold text-white mb-2">AI Tool Workshop</h3>
          <div className="text-4xl font-bold text-green-400 mb-6">Free</div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-300">
              <Users size={18} className="text-green-500" />
              <span>Individual Registration</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={18} className="text-green-500" />
              <span>Learn Latest AI Tools</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={18} className="text-green-500" />
              <span>Expert Sessions</span>
            </li>
          </ul>
          
          <button 
            onClick={onRegisterClick}
            className="block w-full py-3 bg-white/10 hover:bg-white/20 text-white text-center rounded-lg font-semibold transition-colors"
          >
            Register for Workshop
          </button>
        </GlassCard>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-4">
          <CreditCard size={16} />
          <span className="text-sm font-medium">Payment Mode: PhonePe / UPI</span>
        </div>
        <p className="text-gray-400 text-sm">
          Registration closes on 25 March 2026 • Fees are non-refundable
        </p>
      </div>
    </Section>
  );
}
