import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ParticleBackground } from './components/Effects';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactForm } from './components/ContactForm';
import { Sidebar } from './components/Sidebar';
import { ToolsSection } from './components/ToolsSection';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState('home');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans antialiased overflow-hidden selection:bg-emerald-500/35 selection:text-white bg-black">
      {/* 1. Global Scroll Progress indicator - Sleek Emerald Green matching the theme */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 2. Interactive Reactive Particle Canvas background */}
      <ParticleBackground />

      {/* 4. Desktop Sidebar & Mobile Drawer Menu Navigation */}
      <Sidebar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isOpen={isMobileSidebarOpen}
        onToggle={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* 5. Main Layout content stream - offset on desktop by sidebar width (320px) */}
      <main className="relative z-10 w-full md:pl-[320px] pt-14 md:pt-0 min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {activeSection === 'home' && <Hero onNavigate={handleSectionClick} />}
              {activeSection === 'about' && <BentoGrid />}
              {activeSection === 'projects' && <ProjectsShowcase />}
              {activeSection === 'experience' && <ExperienceTimeline />}
              {activeSection === 'tools' && <ToolsSection />}
              {activeSection === 'contact' && <ContactForm />}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* 6. Simple Footer Section */}
        <footer className="py-12 border-t border-neutral-900 relative z-10 bg-black/80 backdrop-blur-sm text-center">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>© {new Date().getFullYear()} KARTIK..</p>
            <div className="flex gap-4">
              <span className="hover:text-emerald-400 transition-colors">STATUS: Available To work </span>
          
              {/* <span className="hover:text-emerald-400 transition-colors">PORTFOLIO DEPLOYED</span> */}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
