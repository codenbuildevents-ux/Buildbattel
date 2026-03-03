import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "motion/react";
import { MessageCircle } from "lucide-react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-03-28T10:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="glass-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 border border-cyan-500/30">
        <span className="text-2xl md:text-4xl font-bold font-mono text-white">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center flex-wrap mt-12">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Mins" />
      <TimeBox value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{x: number, y: number, size: number, speedX: number, speedY: number, opacity: number}> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 100);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Mouse interaction
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 2;
            const directionY = forceDirectionY * force * 2;

            p.x -= directionX;
            p.y -= directionY;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Since canvas is fixed/absolute, client coordinates map well if we account for scroll if needed, 
      // but for a fixed background usually clientX/Y is enough if it covers viewport.
      // However, the canvas is absolute in the section.
      // If the section is relative and scrolls, we need to be careful.
      // The current implementation has canvas as absolute inset-0 in a relative section.
      // So we need to map mouse to canvas coordinates.
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
    
    // Listen on window to catch mouse everywhere
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function Hero({ onRegisterClick }: { onRegisterClick: () => void }) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 250]);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const titleX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const titleY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const subtitleX = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
  const subtitleY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);

  const buttonX = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  const buttonY = useTransform(mouseYSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <ParticleBackground />
      </motion.div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span 
            style={{ x: subtitleX, y: subtitleY }}
            className="inline-block py-1 px-3 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider mb-6"
          >
            28–29 MARCH 2026
          </motion.span>
          <motion.h1 
            style={{ x: titleX, y: titleY }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-white">BUILD</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> BATTLE</span>
            <span className="text-gray-400"> 2026</span>
          </motion.h1>
          <motion.p 
            style={{ x: subtitleX, y: subtitleY }}
            className="text-xl md:text-2xl text-cyan-400 font-serif italic mb-2"
          >
            Code. Compete. Conquer.
          </motion.p>
          <motion.p 
            style={{ x: subtitleX, y: subtitleY }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            This Is Not a Hackathon. It’s a Build Battle.
          </motion.p>
          
          <motion.div 
            style={{ x: buttonX, y: buttonY }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button 
              onClick={onRegisterClick}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]"
            >
              Register Now
            </button>
            <a 
              href="#about"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div style={{ x: buttonX, y: buttonY }}>
            <Countdown />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
