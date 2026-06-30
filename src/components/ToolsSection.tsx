import React from 'react';
import { motion } from 'motion/react';

// ==========================================
// OFFICIAL BRAND/TECHNOLOGY SVG ICONS
// ==========================================

const ReactIcon: React.FC = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-none stroke-[#61DAFB] stroke-[1] animate-[spin_20s_linear_infinite]">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const JavaScriptIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 rounded" style={{ background: '#F7DF1E' }}>
    <path d="M1.38 1.38h21.24v21.24H1.38z" fill="#F7DF1E"/>
    <path d="M22.034 18.268c-.175-1.03-.77-1.853-2.093-2.428-1.17-.511-1.912-.71-1.912-1.279 0-.41.36-.66.86-.66.495 0 .874.216 1.037.64.12.308.062.535.455.535h2.006c.05 0 .11-.033.102-.132-.158-1.972-1.554-3.14-3.595-3.14-2.21 0-3.56 1.353-3.56 3.14 0 2.215 1.95 2.744 3.513 3.42 1.096.465 1.393.814 1.393 1.258 0 .524-.48.78-1.042.78-.714 0-1.2-.33-1.425-.873-.133-.3-.082-.542-.48-.542h-2.1c-.04 0-.08.025-.074.115.22 2.31 2.1 3.25 4.09 3.25 2.26 0 3.73-1.12 3.73-3.23zM13.67 11.716c-.058 0-.102.03-.102.13l.018 7.336c0 .942-.472 1.485-1.393 1.485-.754 0-1.19-.41-1.424-.926-.13-.314-.077-.514-.477-.514H8.28c-.046 0-.085.035-.078.12.28 2.37 2.155 3.16 4.167 3.16 2.322 0 3.864-1.2 3.864-3.612l-.018-7.09c0-.1-.044-.133-.102-.133H13.67z" fill="#000000"/>
  </svg>
);

const TailwindIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#38BDF8]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 5.999 12z"/>
  </svg>
);

const NodeIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#339933]">
    <path d="M11.996 0L1.758 5.912v12.16L11.996 24l10.238-5.928V5.912L11.996 0zm-1.123 20.364V12.16H8.283v4.613l-1.921-1.111v-4.63h-2.59v4.204l6.402 3.696-1.301.732zm8.337-3.696L12.808 20.36v-8.2h2.59v4.612l1.92-1.11v-4.63h-2.592v5.833l-1.02.503zM11.996 10.36H9.406V5.748l1.919 1.11V10.36zm5.836-.884l-1.92-1.11V5.748h2.59v4.204l-.67.31-.01-.786z"/>
  </svg>
);

const ExpressIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F1F5F9] stroke-[#F1F5F9] stroke-[0.5]">
    <path d="M21.9 11.5l-3-5.2c-.4-.7-1.1-1.1-1.9-1.1H5c-1.2 0-2.2 1-2.2 2.2v10.4c0 1.2 1 2.2 2.2 2.2h12c.8 0 1.5-.4 1.9-1.1l3-5.2c.4-.7.4-1.5 0-2.2zM15.4 14.8H8.6v-1.6h6.8v1.6zm0-3.2H8.6V10h6.8v1.6z"/>
  </svg>
);

const RestApiIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#38BDF8] stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
    <path d="M20 10v4" />
  </svg>
);

const MongoDBIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#47A248] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C12 2 6 8 6 12s4 7 6 10c2-3 6-6 6-10s-6-10-6-10z" fill="#47A248" fillOpacity="0.25"/>
    <path d="M12 2v20M9 9a3 3 0 0 1 6 0M9 15a3 3 0 0 0 6 0"/>
  </svg>
);

const GitIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05032]">
    <path d="M23.27 11.58L12.42.73a1.2 1.2 0 0 0-1.7 0l-1.95 1.95 2.8 2.8a2.38 2.38 0 0 1 3.28 3.28L18.1 12a2.38 2.38 0 0 1 1 3.3l-2.6 2.6a2.38 2.38 0 0 1-3.3-1L10 13.62a2.38 2.38 0 0 1-3.28-3.28l1.95-1.95L5.87 5.58l-5.14 5.14a1.2 1.2 0 0 0 0 1.7l10.85 10.85a1.2 1.2 0 0 0 1.7 0l10-10a1.2 1.2 0 0 0-.01-1.69z"/>
  </svg>
);

const VercelIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 1L24 22H0L12 1Z"/>
  </svg>
);

interface Tool {
  name: string;
  category: 'frontend' | 'backend' | 'systems' | 'creative';
  description: string;
  icon: React.ComponentType<any>;
  level: number; // percentage
}

const TOOLS: Tool[] = [
  { name: 'React.js', category: 'frontend', description: 'Component-based frontend architecture and state management.', icon: ReactIcon, level: 90 },
  { name: 'JavaScript (ES6+)', category: 'frontend', description: 'Dynamic web behavior, async-await loops, and DOM APIs.', icon: JavaScriptIcon, level: 88 },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Atomic styling, modern utility classes, and responsive design.', icon: TailwindIcon, level: 92 },
  { name: 'Node.js & Express', category: 'backend', description: 'Server architectures, middleware handlers, and application routing.', icon: NodeIcon, level: 85 },
  { name: 'RESTful APIs', category: 'backend', description: 'Endpoint development, HTTP requests, and structured payload transfers.', icon: RestApiIcon, level: 88 },
  { name: 'MongoDB & Mongoose', category: 'backend', description: 'NoSQL databases, document schemas, and object data modeling.', icon: MongoDBIcon, level: 82 },
  { name: 'Git & GitHub', category: 'systems', description: 'Version control, repository management, and collaboration pipelines.', icon: GitIcon, level: 85 },
  { name: 'Vercel, Netlify & npm', category: 'systems', description: 'Continuous deployment, production builds, and dependency managers.', icon: VercelIcon, level: 88 },
];

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-black">
      <div className="glow-spot top-1/3 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 text-center md:text-left">
          <p className="text-sm font-mono tracking-widest text-emerald-400 uppercase">Core Frameworks</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
            Tech Stacks & Tools
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            A comprehensive list of my skills, tools, and libraries aligned with modern MERN-stack and full stack web development practices.
          </p>
        </div>

        {/* Tools Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 relative group transition-all duration-300 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/[0.01]"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {tool.category}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-base font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed min-h-[40px]">
                  {tool.description}
                </p>

                {/* Level Bar */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>PROFICIENCY</span>
                    <span className="text-slate-300 font-bold">{tool.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
