'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const duration = video.duration;
            const currentTime = video.currentTime;

            if (!duration) return;

            // Slow down to 60% speed during the first 1.5s and last 1.5s
            // This softens the loop point
            const threshold = 1.5;

            if (currentTime < threshold || currentTime > duration - threshold) {
                video.playbackRate = 0.8;
            } else {
                video.playbackRate = 1.0;
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full scale-105" // Slight zoom to prevent edge artifacts
                    src="/srilanka-loop.mp4"
                />
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-slate-950 via-black/50 to-teal-950/30 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 text-sm uppercase tracking-wider text-teal-300 mb-6 backdrop-blur-md">
                        Coming Soon
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Sri Lanka</span>, <br />
                        One District at a Time.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        A gamified travel portfolio that turns your journey into an adventure. Clear the clouds, collect memories, and build your map.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            variant="primary"
                            onClick={() => {
                                const element = document.getElementById('waitlist');
                                if (element) {
                                    const offset = 100;
                                    const bodyRect = document.body.getBoundingClientRect().top;
                                    const elementRect = element.getBoundingClientRect().top;
                                    const elementPosition = elementRect - bodyRect;
                                    const offsetPosition = elementPosition - offset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                            }}
                        >
                            Join the Waitlist
                        </Button>

                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
