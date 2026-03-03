import { Section, SectionHeading, GlassCard } from "./ui/Layout";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Partners() {
  return (
    <Section id="partners" className="bg-secondary-bg/50">
      <SectionHeading centered>Partners & Organizers</SectionHeading>
      
      <div className="max-w-5xl mx-auto mt-12 space-y-12">
        
        {/* Organizer */}
        <div className="text-center">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Organized By</h3>
          <GlassCard className="inline-block max-w-md w-full">
            <img 
              src="https://raw.githubusercontent.com/codenbuild01-droid/code-n-build/refs/heads/main/CODENBUILDLOGO.jpeg" 
              alt="Codenbuild" 
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white/10"
            />
            <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">Codenbuild</h4>
            <a href="https://codenbuild.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 text-sm mb-6 block font-medium">codenbuild.netlify.app</a>
            
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/codenbuild_support" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-pink-600/20 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/codenbuild/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-cyan-600/20 hover:text-cyan-500 transition-colors"><Linkedin size={20} /></a>
              <a href="https://chat.whatsapp.com/BVaa4GQAAddFO4SJS9mpwr" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-green-600/20 hover:text-green-500 transition-colors"><MessageCircle size={20} /></a>
            </div>
          </GlassCard>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="text-center flex flex-col items-center">
            <h3 className="text-xs uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-4 font-bold">Educational Partner</h3>
            <img 
              src="https://raw.githubusercontent.com/codenbuild01-droid/code-n-build/refs/heads/main/WhatsApp%20Image%202026-03-02%20at%2011.58.12%20PM%20(1).jpeg" 
              alt="InternPro" 
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-bold text-white mb-1">InternPro</h4>
            <p className="text-xs text-gray-400 mb-4">IT Solutions & Web Development</p>
            <a href="https://share.google/cZHVh3QwymArmFN6u" target="_blank" className="text-cyan-400 text-xs hover:underline mt-auto">Visit Website</a>
          </GlassCard>

          <GlassCard className="text-center flex flex-col items-center">
            <h3 className="text-xs uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 font-bold">Community Partner</h3>
            <img 
              src="https://raw.githubusercontent.com/codenbuild01-droid/code-n-build/refs/heads/main/WhatsApp%20Image%202026-03-03%20at%2012.03.00%20AM.jpeg" 
              alt="TeamConnect" 
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-bold text-white mb-1">TeamConnect</h4>
            <p className="text-xs text-gray-400 mb-4">Community Building</p>
            <a href="https://teamconnect025.netlify.app/" target="_blank" className="text-cyan-400 text-xs hover:underline mt-auto">Visit Website</a>
          </GlassCard>

          <GlassCard className="text-center flex flex-col items-center">
            <h3 className="text-xs uppercase tracking-widest bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 font-bold">Technology Partner</h3>
            <img 
              src="https://play-lh.googleusercontent.com/GPhO3XF2aT34B_kZs4b_NMVeE1K71qlp_ab_EQFlGGWJetJ2TUVLDunrQm8Fzeh6HCb9OavAzSPkrAvn4uMjDw=w480-h960-rw" 
              alt="AI Tool Hub" 
              className="w-20 h-20 rounded-xl mb-4 object-cover"
            />
            <h4 className="text-lg font-bold text-white mb-1">AI Tool Hub</h4>
            <p className="text-xs text-gray-400 mb-4">App & Tech</p>
            <a href="https://play.google.com/store/apps/details?id=thejcompany.netlify.app" target="_blank" className="text-cyan-400 text-xs hover:underline mt-auto">Download App</a>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
