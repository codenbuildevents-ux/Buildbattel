import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeading } from "./ui/Layout";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  { q: "Who can participate?", a: "The hackathon is open to all college students across India. Teams can consist of 3-5 members." },
  { q: "What is the registration fee?", a: "The fee is ₹100 per participant for the Hackathon. The AI Tool Workshop is free." },
  { q: "Is the fee refundable?", a: "No, registration fees are non-refundable under any circumstances." },
  { q: "Is deployment mandatory?", a: "Yes, full project deployment is required for the final submission. Localhost demos will not be accepted." },
  { q: "Can we use AI tools?", a: "Yes, the use of AI tools is encouraged to speed up development, but the core logic and implementation must be understood by the team." },
  { q: "Will certificates be provided?", a: "Yes, all registered participants who submit a project will receive a certificate of participation." },
];

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">{question}</span>
        <span className={`p-2 rounded-full bg-white/5 transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-cyan-600/40 to-indigo-600/40 rotate-180' : ''}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading centered>Frequently Asked Questions</SectionHeading>
      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </Section>
  );
}
