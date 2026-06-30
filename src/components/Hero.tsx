import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Twitter, Download } from 'lucide-react';
import { ScrambleText, Magnetic } from './Effects';

interface HeroProps {
  onNavigate?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollToAbout = () => {
    if (onNavigate) {
      onNavigate('about');
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumeText = `=====================================================
KARTIK TIMMAPUR - FULL STACK DEVELOPER (MERN STACK)
Hubli / Bengaluru, Karnataka, India
GitHub: https://github.com/itsmekartiigit
=====================================================

ABOUT ME
-----------------------------------------------------
I am a dedicated Full Stack Web Developer specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
I design and develop high-performance, responsive web systems, RESTful APIs, clean database collections, and custom server-side routing middlewares.

EDUCATION
-----------------------------------------------------
* Physics Wallah (PW Skills)
  Full Stack Web Development Certification Graduate (MERN Stack)
  - Focused on asynchronous systems, react state, and server architectures.

* University of Mysore
  Bachelor of Computer Applications (BCA)
  - Academics: Foundation concepts in computer science, data structures, and database management.

SKILLS & TECHNOLOGIES
-----------------------------------------------------
- Frontend: React.js, JavaScript (ES6+), HTML5, Tailwind CSS, Responsive Web Design
- Backend: Node.js, Express.js, RESTful APIs, Middleware design
- Databases: MongoDB, Mongoose ODM
- Systems/DevOps: Git, GitHub, Vercel, Netlify, CI/CD pipelines, Package Managers (npm)

PROJECTS SHOWCASE
-----------------------------------------------------
1. SwiftPay (Enterprise Invoicing Engine)
   - Real-time billing, customizable invoice templates, secure analytics, and payment tracking dashboard.
2. DevPulse (GitHub Analytics Dashboard)
   - Dynamic tracker displaying user code activity charts, star patterns, and automated repository diagnostics.
3. ZenStack (Collaborative Project Platform)
   - Clean Kanban interface, drag-and-drop tasks, multi-user project states, and real-time status flows.

CONTACT & CONNECT
-----------------------------------------------------
Email: kartikofficial445@gmail.com
LinkedIn: https://linkedin.com
GitHub: https://github.com/itsmekartiigit

Generated on: ${new Date().toLocaleDateString()}
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kartik_Timmapur_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 pt-24 md:pt-16 pb-12 overflow-hidden grid-bg">
      {/* Dynamic green glowing spot to mimic screenshot */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Spinning star/flower ornament on the right edge */}
      <div className="hidden lg:block absolute right-10 top-1/3 transform -translate-y-1/2 z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          className="w-10 h-10 text-lime-400 opacity-80"
        >
          {/* Custom SVG Star matching the screenshot's yellow star/asterisk */}
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M50 0L55 35L85 15L65 45L100 50L65 55L85 85L55 65L50 100L45 65L15 85L35 55L0 50L35 45L15 15L45 35Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-4xl text-left relative z-10 space-y-8">
        {/* Main greeting: "Hey, I'm Virat" with "Virat" in a bordered box */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white"
          >
            <span>Hey, I'm</span>
            
            {/* The highlighted Virat/Kartik box with cursor handles matching screenshot */}
            <div className="relative inline-block px-4 py-1.5 bg-white/5 border-2 border-white/20 rounded-xl">
              <span className="text-white">Kartik</span>
              {/* Corner indicators for design */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-emerald-400 rounded-sm"></div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-sm"></div>
            </div>
          </motion.div>

          {/* Subheading: "Full Stack [Developer]" styled like a code typewriter block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-slate-300 flex flex-wrap items-center gap-x-3 gap-y-1.5"
          >
            <span>Full Stack</span>
            <div className="px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-400 font-mono text-xl sm:text-3xl">
              <ScrambleText text="[Developer]" scrambleSpeed={45} />
            </div>
          </motion.div>
        </div>

        {/* Dual capsules container: GitHub Connect + Resume Download */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
          {/* GitHub Connect Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.2 }}
            className="flex-1 min-w-[280px]"
          >
            <div className="flex items-center justify-between gap-4 h-full p-3 bg-[#0a0a0a] border border-neutral-900 hover:border-emerald-500/20 transition-all duration-300 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold font-mono text-xs bg-emerald-500/10 px-1.5 py-0.5 rounded">GH</span>
                <span className="font-mono text-xs font-medium">github.com/itsmekartiigit</span>
              </div>
              <a
                href="https://github.com/itsmekartiigit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-white text-black hover:bg-slate-200 text-xs font-bold rounded-xl transition-all shadow-md shrink-0"
              >
                Explore
              </a>
            </div>
          </motion.div>

          {/* Resume Download Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.25 }}
            className="flex-1 min-w-[280px]"
          >
            <div className="flex items-center justify-between gap-4 h-full p-3 bg-[#0a0a0a] border border-neutral-900 hover:border-blue-500/20 transition-all duration-300 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 font-bold font-mono text-xs bg-blue-500/10 px-1.5 py-0.5 rounded">CV</span>
                <span className="font-mono text-xs font-medium text-slate-300">Kartik_Resume.pdf</span>
              </div>
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer shrink-0"
              >
                <Download size={13} />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Precise Paragraph with custom highlight links mimicking screenshot */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-3xl"
        >
          I build scalable, responsive web applications using the <span className="text-white font-semibold">MERN stack (MongoDB, Express.js, React.js, Node.js)</span>. Proficient in RESTful API development, component-based frontend architecture, database design, and certified by <span className="text-emerald-400 font-semibold">Physics Wallah (PW Skills)</span>. Passionate about writing clean, maintainable, and well-structured code.
        </motion.p>

        {/* Scroll down button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-6"
        >
          <button
            onClick={scrollToAbout}
            data-cursor="magnetic"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-colors group"
          >
            <span>DISCOVER MY WORKPLACE</span>
            <ArrowDown size={14} className="animate-bounce text-emerald-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
