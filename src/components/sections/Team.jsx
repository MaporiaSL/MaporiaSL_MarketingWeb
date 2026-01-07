'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

/* Placeholder Team Data */
const team = [
    {
        name: "Team Lead",
        role: "Project Manager & Dev",
        image: "https://ui-avatars.com/api/?name=Team+Lead&background=0D8ABC&color=fff"
    },
    {
        name: "Lead Designer",
        role: "UI/UX & Gamification",
        image: "https://ui-avatars.com/api/?name=Lead+Designer&background=14b8a6&color=fff"
    },
    {
        name: "Backend Dev",
        role: "Systems Architect",
        image: "https://ui-avatars.com/api/?name=Backend+Dev&background=fbbf24&color=000"
    },
    {
        name: "Mobile Dev",
        role: "Flutter Specialist",
        image: "https://ui-avatars.com/api/?name=Mobile+Dev&background=f472b6&color=fff"
    }
];

export function Team() {
    return (
        <section className="py-24 bg-slate-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built by <span className="text-amber-400">Team Maporia</span></h2>
                    <p className="text-slate-400">Passionate undergraduates building the future of Sri Lankan travel.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="text-center flex flex-col items-center p-8 bg-white/5 border-white/10">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mb-4 border-2 border-teal-500/50 shadow-lg shadow-teal-500/20"
                                />
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-teal-400 text-sm font-medium">{member.role}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
