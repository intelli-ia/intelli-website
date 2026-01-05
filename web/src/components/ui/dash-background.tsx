import { useEffect, useRef } from 'react';

export function DashBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const smoothedMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // Attempt to find the H1 element to center the particles on it initially
        const heroH1 = document.querySelector('h1');
        if (heroH1) {
            const rect = heroH1.getBoundingClientRect();
            const centerX = rect.left + rect.width / 4;
            const centerY = rect.top + rect.height / 2;
            mouse.x = centerX;
            mouse.y = centerY;
            smoothedMouse.x = centerX;
            smoothedMouse.y = centerY;
        }

        let time = 0;

        // Configuration
        const spacing = 35; // Slightly more spaced
        const dashLength = 1; // Thinner
        const dashWidth = 6;   // Shorter
        const spotlightRadius = 300; // Smaller spotlight area
        const waveAmplitude = 30; // Increased amplitude for more pronounced motion
        const waveFrequency = 0.003; // Increased frequency for more active motion
        const lerpFactor = 0.02; // Even slower smoothing speed for maximum inertia

        class Particle {
            originX: number;
            originY: number;
            x: number;
            y: number;
            angle: number;
            color: string;
            opacity: number;

            constructor(x: number, y: number) {
                this.originX = x;
                this.originY = y;
                this.x = x;
                this.y = y;
                this.angle = 0;
                this.color = '#BFFF00'; // intelli-green
                this.opacity = 0;
            }

            update(t: number, sm: { x: number, y: number }) {
                // 1. Organic Wave Motion (idle)
                const waveX = Math.sin(t * waveFrequency + this.originY * 0.01) * waveAmplitude;
                const waveY = Math.cos(t * waveFrequency + this.originX * 0.01) * waveAmplitude;

                const targetX = this.originX + waveX;
                const targetY = this.originY + waveY;

                // 2. Interaction with Smoothed Mouse
                const dx = sm.x - this.x;
                const dy = sm.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < spotlightRadius) {
                    // Spotlight visibility - Changed to linear falloff for more intensity
                    this.opacity = 1 - (distance / spotlightRadius);

                    const force = (spotlightRadius - distance) / spotlightRadius;
                    const angle = Math.atan2(dy, dx);

                    // Slight repulsion and rotation
                    const repulsion = force * 15;
                    this.x -= Math.cos(angle) * repulsion;
                    this.y -= Math.sin(angle) * repulsion;
                    this.angle = angle + Math.PI / 2;
                } else {
                    this.opacity = 0;
                    this.angle *= 0.9;
                }

                // Return to modulated origin
                this.x += (targetX - this.x) * 0.05;
                this.y += (targetY - this.y) * 0.05;
            }

            draw(ctx: CanvasRenderingContext2D) {
                if (this.opacity <= 0) return;

                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                // Very subtle glow effect
                ctx.shadowBlur = 2;
                ctx.shadowColor = this.color;

                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity * 1;

                ctx.fillRect(-dashLength / 2, -dashWidth / 2, dashLength, dashWidth);
                ctx.restore();
            }
        }

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];

            for (let x = 0; x < canvas.width + spacing; x += spacing) {
                for (let y = 0; y < canvas.height + spacing; y += spacing) {
                    particles.push(new Particle(x, y));
                }
            }
        };

        const animate = () => {
            time++;

            // Update smoothed mouse position (Lerp)
            smoothedMouse.x += (mouse.x - smoothedMouse.x) * lerpFactor;
            smoothedMouse.y += (mouse.y - smoothedMouse.y) * lerpFactor;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update(time, smoothedMouse);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            init();
        };

        init();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
