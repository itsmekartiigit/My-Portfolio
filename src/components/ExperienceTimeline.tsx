import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Cpu, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  subtitle: string;
  metadata: string;
  bullets: string[];
  icon: React.ComponentType<any>;
  dotColor: string; // for legend mapping
}

const EXPERIENCES_DATA: TimelineItem[] = [
  {
    id: 'exp-pw',
    period: 'Completed',
    role: 'Full Stack Web Developer',
    company: 'Physics Wallah (PW Skills)',
    subtitle: 'MERN stack development boot camp & certification',
    metadata: 'Bootcamp Certification • Online',
    bullets: [
      'Completed an intensive, industry-aligned Full Stack course covering the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Developed deep hands-on expertise building scalable, responsive web systems with component-based client structures.',
      'Proficient in secure RESTful API designs, MVC architectural patterns, database modeling, and team git workflows.'
    ],
    icon: Award,
    dotColor: 'bg-purple-500',
  },
  {
    id: 'exp-bca',
    period: '2024 - Present',
    role: 'BCA Scholar',
    company: 'University of Mysore',
    subtitle: 'Foundations of computer science and systems design',
    metadata: 'Academic Degree • On-Campus',
    bullets: [
      'Studying key academic disciplines including Data Structures & Algorithms, DBMS, Object-Oriented Programming, and Computer Networks.',
      'Structuring relational database schemas, query optimizations, and secure systems architecture paradigms.',
      'Maintaining top academic standards while developing independent production web apps and scripts.'
    ],
    icon: GraduationCap,
    dotColor: 'bg-amber-500',
  },
  {
    id: 'exp-devops',
    period: 'Continuous',
    role: 'DevOps & Cloud Explorer',
    company: 'Self-Directed Learning',
    subtitle: 'Continuous integration, delivery pipelines, and performance hosting',
    metadata: 'Self-Guided • Automation',
    bullets: [
      'Configuring automated CI/CD pipelines with GitHub Actions for hands-free building and testing.',
      'Deploying secure, high-throughput production-ready applications across Vercel, Netlify, and Cloud Run.',
      'Exploring modern serverless microservices, dockerized environments, and cloud infrastructure operations.'
    ],
    icon: Cpu,
    dotColor: 'bg-emerald-500',
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black min-h-screen">
      {/* Background radial glow */}
      <div className="glow-spot top-1/4 -left-48" />
      <div className="glow-spot bottom-1/4 -right-48" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Top Header Section matching Screenshot 2 */}
        <div className="mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <span className="px-3.5 py-1 text-[11px] font-mono font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
              Career Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-none"
          >
            The journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-sans text-sm md:text-base max-w-2xl leading-relaxed font-normal"
          >
            My journey as a fresher is driven by continuous learning, hands-on projects, and a passion for building impactful software.
          </motion.p>

          {/* Color-coded filter indicators exactly like Screenshot 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-4 text-xs font-mono font-medium text-slate-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Current Role
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Bootcamp Graduate
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> DevOps & Cloud
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Academics
            </span>
          </motion.div>
        </div>

        {/* Timeline Thread */}
        <div className="relative mt-16 pl-4 md:pl-0">
          
          {/* Vertical layout line running through the left side (desktop) or far left (mobile) */}
          <div className="absolute left-[9px] md:left-[178px] top-6 bottom-6 w-[1.5px] bg-slate-800" />

          <div className="space-y-16">
            {EXPERIENCES_DATA.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-12 gap-y-4 md:gap-x-12 relative items-start group"
                >
                  
                  {/* Left Column: Thread Node Circle Indicator & Time period */}
                  <div className="col-span-12 md:col-span-3 flex md:justify-end items-center md:pr-4 relative z-10">
                    
                    {/* Ring Bullet exactly aligned with the thread line */}
                    <div className="absolute left-[1px] md:left-auto md:-right-[11px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full border-4 border-white bg-slate-950 shadow-md shadow-white/25 flex items-center justify-center" />

                    {/* Large Period Label */}
                    <div className="pl-8 md:pl-0 text-left md:text-right">
                      <span className="text-xl md:text-2xl font-display font-black text-slate-500 group-hover:text-white transition-colors duration-300">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Card Content Block exactly like Screenshot 2 */}
                  <div className="col-span-12 md:col-span-9 pl-8 md:pl-0">
                    <div className="space-y-4">
                      
                      {/* Badge Icon, Title and Subtitle Block */}
                      <div className="flex items-start gap-4">
                        
                        {/* Circle Icon Badge with Glowing Border */}
                        <div className="w-11 h-11 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 shadow-lg shadow-blue-500/5 group-hover:bg-blue-500/15 group-hover:border-blue-500/50 transition-all duration-300">
                          <Icon size={18} />
                        </div>

                        <div>
                          <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center flex-wrap gap-x-2">
                            <span>{item.role}</span>
                            <span className="text-slate-500 font-light">·</span>
                            <span className="text-slate-300 font-medium text-base">{item.company}</span>
                          </h3>
                          <p className="text-sm font-sans text-slate-400 mt-1">
                            {item.subtitle}
                          </p>
                          
                          {/* Metadata tag / subcategory */}
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                              {item.metadata}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bullet points styled in bright contrast with blue bullets */}
                      <ul className="space-y-2.5 pl-1.5 pt-2">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                            <span className="text-blue-400 font-bold shrink-0 text-base leading-none select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
