import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, Copy, Check, ShieldAlert } from 'lucide-react';
import { Magnetic } from './Effects';
import emailjs from '@emailjs/browser';

// ==========================================
// BESPOKE INTERNAL CANVAS CONFETTI
// ==========================================
const runCanvasConfetti = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

  // Theme-compatible emerald green tones
  const colors = ['#10b981', '#059669', '#34d399', '#6ee7b7', '#a7f3d0'];
  const confetti: Array<{
    x: number;
    y: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
    rotation: number;
    rotationSpeed: number;
  }> = [];

  for (let i = 0; i < 90; i++) {
    confetti.push({
      x: width / 2,
      y: height - 10,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 8 - 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
    });
  }

  let animationFrameId: number;
  const gravity = 0.22;

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    confetti.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += gravity;
      p.rotation += p.rotationSpeed;

      // Draw confetti particle
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      // Remove off-screen particles
      if (p.y > height) {
        confetti.splice(idx, 1);
      }
    });

    if (confetti.length > 0) {
      animationFrameId = requestAnimationFrame(animate);
    }
  };

  animate();

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
};

// ==========================================
// MAIN CONTACT FORM COMPONENT
// ==========================================
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const successCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // ==========================================
  // EmailJS credentials – replace with your own
  // ==========================================
  const EMAILJS_SERVICE_ID = 'your_service_id';      // e.g. 'service_abc123'
  const EMAILJS_TEMPLATE_ID = 'your_template_id';    // e.g. 'template_xyz789'
  const EMAILJS_PUBLIC_KEY = 'your_public_key';      // e.g. 'user_abc123def'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        // Optionally add: to_email: 'Kartikofficial445@gmail.com'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form after success
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // Run confetti when status becomes success
  useEffect(() => {
    if (status === 'success' && successCanvasRef.current) {
      const cleanup = runCanvasConfetti(successCanvasRef.current);
      return cleanup;
    }
  }, [status]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('Kartikofficial445@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="glow-spot bottom-1/4 left-1/3" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-mono tracking-widest text-emerald-400 uppercase">Contact  me </p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
            Connect with me
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Initiate a message packet or directly clone my coordinates to begin collaborating on exceptional interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Info Sidebar card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-auto min-h-[250px] md:col-span-1 border-white/5 shadow-md">
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Direct message</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                For direct replies, you can copy my private communications address below.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Digital Mail</p>

              {/* Copy Email Tool */}
              <div className="flex items-center justify-between gap-1.5 p-2 rounded-2xl bg-slate-950 border border-white/5 mt-2">
                <span className="font-mono text-xs text-emerald-300 truncate pl-2">
                  Kartikofficial445@gmail.com
                </span>

                <Magnetic range={30}>
                  <button
                    data-cursor="copy"
                    onClick={copyEmailToClipboard}
                    className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:scale-105 transition-all relative"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}

                    {/* Tooltip feedback */}
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.8 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-500 text-slate-950 text-[10px] rounded font-mono font-bold"
                        >
                          COPIED!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Columns 2-3: Main Interactive Contact Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:col-span-2 relative overflow-hidden min-h-[380px] border-white/5 shadow-xl shadow-emerald-500/[0.01]">
            {/* Confetti canvas overlay upon success */}
            {status === 'success' && (
              <canvas
                ref={successCanvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              />
            )}

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                // SUCCESS STATE
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2, stiffness: 260, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6"
                  >
                    <CheckCircle size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Sync Completed!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mt-3 leading-relaxed">
                    Your packet has been safely routed. I will initiate an active feedback loop with your coordinates shortly.
                  </p>
                  <button
                    data-cursor="magnetic"
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                // FORM EDITING STATE
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={status === 'sending'}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-white/5 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 text-white font-sans text-sm outline-none transition-all placeholder:text-slate-600 disabled:opacity-50"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                        Your Coordinates (Email)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === 'sending'}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-white/5 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 text-white font-sans text-sm outline-none transition-all placeholder:text-slate-600 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                      Message Payload
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={status === 'sending'}
                      rows={4}
                      placeholder="Transmission details..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-white/5 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 text-white font-sans text-sm outline-none transition-all placeholder:text-slate-600 resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    {/* Error indicator */}
                    <div className="min-h-[20px]">
                      {status === 'error' && (
                        <span className="flex items-center gap-2 text-rose-400 font-mono text-[10px] uppercase tracking-wider animate-shake">
                          <ShieldAlert size={14} /> Please fill out all fields 
                        </span>
                      )}
                    </div>

                    {/* Magnetic Submit Button */}
                    <Magnetic range={40}>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        data-cursor="send"
                        className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-sm font-semibold shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 disabled:opacity-50 active:scale-95 transition-all duration-150"
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-slate-950/20 border-t-slate-950 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={14} />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};