import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Award, GraduationCap, Cpu } from 'lucide-react';

interface SkillDetail {
  name: string;
  desc: string;
}

export const BentoGrid: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const subSkills: SkillDetail[] = [
    { name: 'React.js', desc: 'Component-based client architectures, custom hooks, and dynamic rendering.' },
    { name: 'Node.js', desc: 'V8 event loop servers, package management, and custom scripts.' },
    { name: 'Express.js', desc: 'Lightweight servers, RESTful routers, and middleware integrations.' },
    { name: 'MongoDB', desc: 'NoSQL databases, collections, and Mongoose object data modeling.' },
    { name: 'RESTful APIs', desc: 'Endpoint design, request-response lifecycles, and payload delivery.' },
    { name: 'JavaScript', desc: 'Asynchronous scripting, ES6+ features, and event loop handling.' },
    { name: 'TypeScript', desc: 'Strict interface validation, compiled type safety, and autocomplete support.' },
    { name: 'Tailwind CSS', desc: 'Atomic design, utility-first styling, and high-performance responsive layouts.' },
  ];

  const journeyMilestones = [
    {
      role: 'Full Stack Web Developer',
      org: 'Physics Wallah (PW Skills)',
      period: 'Completed',
      desc: 'Mastered Full Stack Development covering the MERN stack (MongoDB, Express.js, React.js, Node.js). Built multiple high-performance end-to-end web applications.',
      icon: Award,
    },
    {
      role: 'Bachelor of Computer Applications (BCA)',
      org: 'University of Mysore',
      period: 'Currently Pursuing',
      desc: 'Studying foundational computer science concepts, structures & algorithms, database management, and object-oriented programming.',
      icon: GraduationCap,
    },
    {
      role: 'DevOps & Cloud Computing',
      org: 'Tutedude',
      period: 'Learning',
      desc: 'Actively studying modern deployment pipelines, containerization, and automation configurations with GitHub Actions, Vercel, and Netlify.',
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-black min-h-screen">
      {/* Background visual cues */}
      <div className="glow-spot top-1/4 -left-48" />
      <div className="glow-spot bottom-1/4 -right-48" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Name Header & Subtitle (matching Screenshot 3 layout) */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl sm:text-8xl md:text-9xl font-display font-extrabold text-white tracking-tight leading-none"
          >
            K@rtik
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-400 uppercase flex flex-wrap items-center gap-x-2.5 gap-y-1.5"
          >
            <span>FULL-STACK DEV</span>
            <span className="text-emerald-500">•</span>
            <span>MERN DEVELOPER</span>
            <span className="text-emerald-500">•</span>
            <span>REST APIs</span>
            <span className="text-emerald-500">•</span>
            <span>SYSTEM DESIGN</span>
            <span className="text-emerald-500">•</span>
            <span>DATABASES</span>
            <span className="text-emerald-500">•</span>
            <span>WEB APPS</span>
          </motion.div>

          {/* Interactive Skill Pills (Screenshot 3 style) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {subSkills.map((skill) => (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border outline-none focus:outline-none ${
                  selectedSkill === skill.name
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/90 text-slate-400 border-white/5 hover:border-emerald-500/30 hover:text-white'
                }`}
              >
                {skill.name}
              </button>
            ))}
          </motion.div> */}

          {/* Skill description popover matching the screenshot's clean, minimalist layout */}
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20 text-emerald-300 font-mono text-xs leading-relaxed"
            >
              <span className="font-bold text-white mr-2">{selectedSkill}:</span>
              {subSkills.find((s) => s.name === selectedSkill)?.desc}
            </motion.div>
          )}
        </div>

        {/* Section: Who I Am */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-mono font-bold text-white border-b border-white/5 pb-2">
            Who I Am
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Hello! I'm Kartik, a Hubli-based software developer passionate about building products that simplify lives. I've been writing code since 2025, with an active focus on designing elegant full-stack systems, RESTful APIs, clean database models, and highly responsive user interfaces.
          </p>
        </motion.div>

        {/* Section: What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-mono font-bold text-white border-b border-white/5 pb-2">
            What I Do
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Currently a Certified MERN Stack Developer certified from <span className="text-emerald-400 font-medium">Physics Wallah (PW Skills)</span> and pursuing my Bachelor of Computer Applications (BCA) degree at the <span className="text-indigo-400 font-medium">University of Mysore</span>. I build responsive, component-driven client portals, lightweight router middlewares, structured MongoDB collections, and production deployment flows.
          </p>
        </motion.div>

        {/* Section: My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-mono font-bold text-white border-b border-white/5 pb-2">
            My Journey
          </h2>
          
          <div className="relative border-l border-white/10 pl-6 space-y-8">
            {journeyMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline bullet/circle with pulsing glow exactly matching the screen style */}
                  <div className="absolute -left-[35px] top-1.5 w-[18px] h-[18px] rounded-full bg-slate-950 border border-emerald-500/50 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-emerald-400" />
                        <h3 className="font-display font-bold text-base text-white">
                          {milestone.role}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono  text-emerald-300 sm:text-right  border-white/5 px-2.5py-0.5 rounded-full uppercase tracking-wider">
                        {milestone.period}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-slate-400">
                      {milestone.org}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl pt-1">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
