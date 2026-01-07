'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

export function Waitlist() {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-slate-950 z-0" />

            <div className="container relative z-10 px-4">
                <GlassCard className="max-w-4xl mx-auto text-center p-12 py-16 bg-gradient-to-br from-white/10 to-white/5 border-white/20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Ready to Start Your Journey?
                    </motion.h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        Maporia is currently in closed beta. Join the waitlist to be among the first explorers to clear the clouds.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                        />
                        <Button size="lg" className="rounded-full px-8 bg-teal-500 hover:bg-teal-400 text-white border-none shadow-xl shadow-teal-900/50">
                            Get Early Access
                        </Button>
                    </form>

                    <p className="mt-6 text-sm text-slate-500">
                        We promise not to spam. Only updates about our launch.
                    </p>
                </GlassCard>
            </div>
        </section>
    );
}
