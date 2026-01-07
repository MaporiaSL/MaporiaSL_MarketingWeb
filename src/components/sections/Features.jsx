'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Map, Trophy, Compass, Cloud, Camera, Share2 } from 'lucide-react';

const features = [
    {
        icon: Cloud,
        title: 'Clear the Clouds',
        description: 'The map starts hidden. Travel to districts to physically clear the fog and unlock the map.',
        color: 'text-sky-400'
    },
    {
        icon: Map,
        title: 'Unlock Districts',
        description: 'Visit key locations to achieve 100% exploration in each of the 25 districts.',
        color: 'text-teal-400'
    },
    {
        icon: Trophy,
        title: 'Earn Achievements',
        description: 'Collect badges for every temple, beach, or mountain you conquer.',
        color: 'text-amber-400'
    },
    {
        icon: Compass,
        title: 'Interactive Travel Portfolio',
        description: 'Build a visual history of your journeys. Your map tells your story.',
        color: 'text-emerald-400'
    },
    {
        icon: Camera,
        title: 'Memory Vault',
        description: 'Save photos and notes pinned directly to the locations you visited.',
        color: 'text-purple-400'
    },
    {
        icon: Share2,
        title: 'Social Leaderboards',
        description: 'Compete with friends. Who has unlocked more of Sri Lanka?',
        color: 'text-pink-400'
    }
];

export function Features() {
    return (
        <section className="py-24 relative bg-slate-950">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Gamify Your <span className="text-teal-400">Travels</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Maporia isn't just a map. It's a real-world exploration game where your physical presence unlocks the digital world.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col items-start border-white/5 bg-slate-900/50">
                                <div className={`p-3 rounded-xl bg-white/5 mb-4 ${feature.color}`}>
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
