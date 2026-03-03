import { useState, useEffect } from "react";
import { Lock, Unlock, Clock } from "lucide-react";
import { Section, SectionHeading, GlassCard } from "./ui/Layout";

interface SubmissionCardProps {
  title: string;
  link: string;
  openTime: Date;
  closeTime: Date;
}

const SubmissionCard = ({ title, link, openTime, closeTime }: SubmissionCardProps) => {
  const [status, setStatus] = useState<"upcoming" | "active" | "closed">("upcoming");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      if (now < openTime) {
        setStatus("upcoming");
        const diff = openTime.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        setTimeLeft(`Opens in ${hours}h ${mins}m`);
      } else if (now >= openTime && now <= closeTime) {
        setStatus("active");
        const diff = closeTime.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        setTimeLeft(`Closes in ${hours}h ${mins}m`);
      } else {
        setStatus("closed");
        setTimeLeft("Submission Closed");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [openTime, closeTime]);

  return (
    <GlassCard className="flex flex-col items-center text-center p-8">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-sm text-gray-400 mb-6 font-mono">
        {openTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} • {openTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} - {closeTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      <div className="mb-6">
        {status === "upcoming" && <Lock className="w-12 h-12 text-gray-500 mx-auto mb-2" />}
        {status === "active" && <Unlock className="w-12 h-12 text-green-500 mx-auto mb-2 animate-pulse" />}
        {status === "closed" && <Clock className="w-12 h-12 text-red-500 mx-auto mb-2" />}
        <p className={`font-medium ${status === "active" ? "text-green-400" : status === "closed" ? "text-red-400" : "text-gray-500"}`}>
          {timeLeft}
        </p>
      </div>

      <a
        href={status === "active" ? link : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 rounded-lg font-bold transition-all ${
          status === "active"
            ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/20 cursor-pointer"
            : "bg-gray-800 text-gray-500 cursor-not-allowed"
        }`}
        onClick={(e) => status !== "active" && e.preventDefault()}
      >
        {status === "active" ? "Submit Now" : status === "closed" ? "Closed" : "Wait for Window"}
      </a>
    </GlassCard>
  );
};

export default function Submission() {
  return (
    <Section id="submission">
      <SectionHeading centered>Submission Zone</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        <SubmissionCard 
          title="PPT Submission"
          link="https://forms.gle/gBvfeXh48j2ZR4C37"
          openTime={new Date("2026-03-28T11:00:00")}
          closeTime={new Date("2026-03-28T13:30:00")}
        />
        <SubmissionCard 
          title="Final Submission"
          link="https://forms.gle/MyuBkDSEQa76ia5T9"
          openTime={new Date("2026-03-29T11:00:00")}
          closeTime={new Date("2026-03-29T15:00:00")}
        />
      </div>
    </Section>
  );
}
