import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// ==========================================
// 1. NEURAL PARTICLE BACKGROUND CANVAS
// ==========================================
export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const particleCount = Math.min(65, Math.floor((width * height) / 20000));

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#a855f7' : '#3b82f6',
      });
    }

    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient background subtle glow
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks with bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction force
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 0.8;
          p.y -= (dy / dist) * force * 0.8;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p2.x - p.x, p2.y - p.y);
          if (distNodes < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Alpha increases as distance decreases
            const alpha = (110 - distNodes) / 110 * 0.12;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-bg"
      className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
    />
  );
};


// ==========================================
// 2. MAGNETIC WRAPPER COMPONENT
// ==========================================
interface MagneticProps {
  children: React.ReactElement;
  range?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, range = 45 }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < range) {
      // Pull element closer to mouse proportional to range
      const ratio = (range - distance) / range;
      x.set(dx * ratio * 0.4);
      y.set(dy * ratio * 0.4);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};


// ==========================================
// 3. TEXT SCRAMBLE / DECRYPTION EFFECT
// ==========================================
interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  triggerOnMount?: boolean;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 30,
  triggerOnMount = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);
  const chars = '!@#$%^&*()_+{}[]|:;<>?,./X█▓▒░★⚛⚙⚡';

  const scramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        isScrambling.current = false;
      }

      iterations += 1 / 2; // Scramble speed factor
    }, scrambleSpeed);
  };

  useEffect(() => {
    if (triggerOnMount) {
      scramble();
    }
  }, [text]);

  return (
    <span
      className={`inline-block font-mono cursor-default select-none ${className}`}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};


// ==========================================
// 4. REACTIVE MAGNETIC CUSTOM CURSOR (DISABLED)
// ==========================================
export const CustomCursor: React.FC = () => {
  return null;
};
