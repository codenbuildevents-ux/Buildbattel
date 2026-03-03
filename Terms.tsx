import { Section, SectionHeading } from "./ui/Layout";

export default function Terms() {
  return (
    <Section id="terms" className="bg-secondary-bg/30">
      <SectionHeading>Terms & Conditions</SectionHeading>
      <div className="h-64 overflow-y-auto glass-card p-6 text-sm text-gray-400 space-y-4 custom-scrollbar">
        <p><strong className="text-white">1. Eligibility:</strong> Open to all students currently enrolled in a college or university in India.</p>
        <p><strong className="text-white">2. Team Rules:</strong> Teams must have 3-5 members. Changes to team structure after registration are not allowed without prior approval.</p>
        <p><strong className="text-white">3. Registration:</strong> Fees are non-refundable. Registration closes strictly on 25 March 2026.</p>
        <p><strong className="text-white">4. Development:</strong> All code must be written during the hackathon. Pre-built projects are not allowed.</p>
        <p><strong className="text-white">5. Deployment:</strong> Projects must be deployed on a public URL (Vercel, Netlify, Heroku, etc.) for evaluation.</p>
        <p><strong className="text-white">6. Code of Conduct:</strong> Harassment, plagiarism, or unethical behavior will lead to immediate disqualification.</p>
        <p><strong className="text-white">7. IP Rights:</strong> Participants retain ownership of their code. Organizers may use project demos for promotional purposes.</p>
        <p><strong className="text-white">8. Sponsors:</strong> Organizers are not responsible for any promises or decisions made by third-party sponsors.</p>
        <p><strong className="text-white">9. Liability:</strong> Organizers are not liable for any technical issues, internet failures, or platform downtimes faced by participants.</p>
        <p><strong className="text-white">10. Acceptance:</strong> By registering, you agree to all the terms and conditions mentioned above.</p>
      </div>
    </Section>
  );
}
