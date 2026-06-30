import React, { useEffect, useState } from 'react';
import { Home, Briefcase, GraduationCap, Cpu, User, Mail, Github, Linkedin, Menu, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// 👇 Replace this path with your actual image location
import profileImage from './../../assets/profile.png';   // <-- UPDATE THIS PATH

interface SidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionClick, isOpen, onToggle }) => {
  const [typedSubtitle, setTypedSubtitle] = useState('FullStack');
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((b) => !b);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Simple automated subtitle cycling for creative touch
  useEffect(() => {
    const subtitles = ['FullStack', 'MERN_Dev', 'React_Expert', 'Node_Builder'];
    let currentIdx = 0;
    
    const interval = setInterval(() => {
      currentIdx = (currentIdx + 1) % subtitles.length;
      let target = subtitles[currentIdx];
      let current = '';
      let charIdx = 0;
      
      const typeInterval = setInterval(() => {
        if (charIdx < target.length) {
          current += target[charIdx];
          setTypedSubtitle(current);
          charIdx++;
        } else {
          clearInterval(typeInterval);
        }
      }, 80);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    // { id: 'experience', label: 'Experience', icon: GraduationCap },
    { id: 'tools', label: 'Tools', icon: Cpu },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { label: 'Github', url: 'https://github.com/itsmekartiigit', icon: Github, color: 'hover:text-white' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin, color: 'hover:text-indigo-400' },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-8 bg-black border-r border-neutral-900 select-none">
      {/* Top Profile block – now using <img> from assets */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <img
            src={profileImage}
            alt="Kartik Timmapur"
            className="w-13 h-13 rounded-full object-cover border-2 border-white/10"
          />
          <div>
            <h2 className="font-display font-bold text-xl text-white tracking-wide">Kartik Timmapur</h2>
            <p className="font-mono text-sm text-slate-400 mt-0.5">
              {typedSubtitle}
              <span className={`inline-block w-[6px] h-3 ml-1 bg-emerald-400 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
            </p>
          </div>
        </div>

        {/* Navigation Items – increased size & no border on active */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionClick(item.id);
                  if (isOpen) onToggle(); // close mobile menu
                }}
                className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl text-[15px] font-medium font-display transition-all cursor-pointer outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 ${
                  isActive
                    ? 'bg-white/10 text-white shadow-sm'   // border removed to fix white flash
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-slate-400'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Connect + Footer area – increased spacing and font */}
      <div className="space-y-8 pt-8 border-t border-white/5">
        <div>
          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-4 pl-1">Connect</p>
          <ul className="space-y-3 pl-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-all outline-none focus:outline-none ${link.color}`}
                  >
                    <Icon size={16} />
                    <span className="font-mono text-xs">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-[11px] font-mono text-slate-600 pl-1">
          Made by Kartik | © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop fixed sidebar – width increased to 380px */}
      <aside className="hidden md:block fixed top-0 bottom-0 left-0 w-[310px] z-30">
        {sidebarContent}
      </aside>

      {/* Mobile top floating bar – bigger avatar and header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black/95 backdrop-blur-md border-b border-neutral-900 z-30 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt="Kartik Timmapur"
            className="w-9 h-9 rounded-full object-cover border border-white/10"
          />
          <span className="font-display font-bold text-sm text-white uppercase tracking-wider">Kartik Timmapur</span>
        </div>
        
        <button
          onClick={onToggle}
          className="p-2 -mr-2 text-slate-400 hover:text-white transition-colors outline-none focus:outline-none"
        >
          {isOpen ? <CloseIcon size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer Slide-out – width increased to 380px */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-30"
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="md:hidden fixed top-0 bottom-0 left-0 w-[380px] z-40"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};