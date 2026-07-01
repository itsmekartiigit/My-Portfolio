import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ProfileAvatar } from './ProfileAvatar';

// ==========================================
// 3D PARALLAX TILT CARD COMPONENT
// ==========================================
interface TiltCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    setCoords({
      x: relativeX * 20,
      y: -relativeY * 20,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenDetails(project)}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale(${isHovered ? 1.02 : 1})`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between h-[480px] relative transition-all duration-300 border border-white/5 hover:border-emerald-500/40 group shadow-lg shadow-black/20 cursor-pointer"
    >
      {/* Visual Glare Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(circle at ${coords.x * 2 + 50}% ${-coords.y * 2 + 50}%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />

      {/* Image Wrap */}
      <div className="relative h-56 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
        
        {/* Active status badge top right */}
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white-500/15 text-white font-mono text-[10px] font-bold border borderwhite-500/35 uppercase tracking-wider backdrop-blur-sm">
          active
        </span>
      </div>

      {/* Details Area */}
      <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 text-[9px] font-mono rounded-lg bg-slate-900 border border-white/5 text-slate-400">
                {tag}
              </span>
            ))}
          </div>

          {/* Visit & GitHub Action buttons side-by-side */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
              className="flex-1 py-2 px-4 rounded-full bg-white hover:bg-slate-200 text-slate-950 text-xs font-bold transition-all shadow-md text-center"
            >
              Visit
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 py-2 px-4 rounded-full bg-slate-900 hover:bg-slate-850 border border-white/10 text-white text-xs font-semibold transition-all text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN PROJECTS SHOWCASE
// ==========================================
export const ProjectsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', 'Web App', 'AI', 'MERN'];

  const filteredProjects = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(filter) || p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-black min-h-screen">
      <div className="glow-spot -bottom-24 -right-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mt-2 tracking-tight">
                    My  Projects
                  </h2>
                  <p className="text-slate-400 mt-2 font-mono text-sm tracking-wide">
                   Turning Ideas into Applications
                  </p>
                </div>

                {/* Filtering Tab Pills */}
                <div className="flex flex-wrap gap-2 self-start md:self-end bg-slate-900/40 p-1.5 rounded-2xl border border-white/5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all relative outline-none focus:outline-none ${
                        filter === cat
                          ? 'text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {filter === cat && (
                        <motion.div
                          layoutId="activeFilter"
                          className="absolute inset-0 bg-emerald-500 rounded-xl"
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* PROJECTS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <TiltCard
                    key={project.id}
                    project={project}
                    onOpenDetails={setSelectedProject}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-10"
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-mono text-xs uppercase tracking-wider group outline-none focus:outline-none"
              >
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                <span>Back to Projects</span>
              </button>

              {/* Main Detail Grid Layout (from Screenshots) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left side (Overview, Features, Outcomes) */}
                <div className="lg:col-span-8 space-y-12">
                  
                  {/* Overview Block */}
                  <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                      Project Overview
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-4xl">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features Section */}
                  {selectedProject.features && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-extrabold text-white tracking-tight">
                        Key Features
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-emerald-500/20 transition-all duration-300"
                          >
                            {/* Blue dot bullet exactly like Screenshot */}
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                            <span className="text-slate-300 text-sm leading-relaxed font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learning Outcomes Section (Screenshot 3) */}
                  {selectedProject.learningOutcomes && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-extrabold text-white tracking-tight">
                        Learning Outcomes
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.learningOutcomes.map((outcome, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-emerald-500/20 transition-all duration-300"
                          >
                            {/* Green rounded outcome index number */}
                            <div className="w-6 h-6 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-slate-300 text-sm leading-relaxed">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side widgets (Tech Stack, Links, Project Info) */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Tech Stack Widget */}
                  <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
                    <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase font-bold">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/5 text-slate-300 text-xs font-mono font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {selectedProject.id === 'ai-invoice-generator' && (
                        <>
                          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/5 text-slate-300 text-xs font-mono font-medium">Gemini AI</span>
                          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/5 text-slate-300 text-xs font-mono font-medium">Clerk Auth</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Links Widget */}
                  <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
                    <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase font-bold">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 border border-white/5 text-slate-300 hover:text-white hover:border-emerald-500/20 hover:bg-slate-850 transition-all text-xs font-mono font-medium"
                      >
                        <div className="flex items-center gap-3">
                          <Github size={16} />
                          <span>View Source Code</span>
                        </div>
                        <ArrowUpRight size={14} className="text-slate-500" />
                      </a>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 border border-white/5 text-slate-300 hover:text-white hover:border-emerald-500/20 hover:bg-slate-850 transition-all text-xs font-mono font-medium"
                      >
                        <div className="flex items-center gap-3">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </div>
                        <ArrowUpRight size={14} className="text-slate-500" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info Widget */}
                  <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
                    <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase font-bold">
                      Project Info
                    </h3>
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-slate-500">Author</span>
                        <div className="flex items-center gap-2">
                          <ProfileAvatar size={20} />
                          <span className="text-slate-300 font-semibold font-sans">{selectedProject.author || 'Kartik Timmapur'}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-slate-500">Status</span>
                        <span className="text-emerald-400 font-bold">{selectedProject.status || 'Active'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Category</span>
                        <span className="text-indigo-400 font-bold">{selectedProject.detailedCategory || selectedProject.category}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
