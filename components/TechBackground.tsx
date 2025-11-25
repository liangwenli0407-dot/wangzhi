import React, { useEffect, useRef } from 'react';

const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min((width * height) / 12000, 100);
    const connectionDistance = 180;
    const mouse = { x: -1000, y: -1000, radius: 200 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.directionX = (Math.random() * 0.3) - 0.15;
        this.directionY = (Math.random() * 0.3) - 0.15;
        this.size = Math.random() * 2 + 1;
        this.color = '#3b82f6';
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.fill();
      }

      update() {
        // Wall collision
        if (this.x > width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > height || this.y < 0) this.directionY = -this.directionY;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            // Move away from mouse
            this.x -= directionX;
            this.y -= directionY;
        } else {
            // Return to normal movement flow
            this.x += this.directionX;
            this.y += this.directionY;
        }
        
        this.draw();
      }
    }

    const init = () => {
        particlesArray.length = 0;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        
        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#020617'); // Slate 950
        gradient.addColorStop(0.5, '#0f172a'); // Slate 900
        gradient.addColorStop(1, '#1e1b4b'); // Indigo 950
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Subtle Grid Overlay
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 60;
        
        // Perspective Grid Effect (Simplified)
        for (let x = 0; x < width; x += gridSize) {
             ctx.beginPath();
             ctx.moveTo(x, 0);
             ctx.lineTo(x, height);
             ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Connect particles
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacityValue = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }

        particlesArray.forEach(particle => particle.update());
        animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
};

export default TechBackground;