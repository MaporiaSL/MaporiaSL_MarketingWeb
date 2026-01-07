'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Github, Linkedin, Plus, Minus } from 'lucide-react';

const team = [
    {
        name: "Anuk Ranasinghe",
        role: "Frontend Developer",
        github: "https://github.com/anucr",
        linkedin: "",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Anuk&backgroundColor=e0f2fe",
        initials: "AR"
    },
    {
        name: "Anuja Jayasinghe",
        role: "Frontend Developer",
        github: "https://github.com/Anuja-jayasinghe",
        linkedin: "https://www.linkedin.com/in/anuja-jayasinghe/",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Anuja&backgroundColor=ccfbf1",
        initials: "AJ"
    },
    {
        name: "Pudamya Yamini",
        role: "UI/UX & Flutter Specialist",
        github: "https://github.com/PudamyaYamini",
        linkedin: "http://www.linkedin.com/in/pudamya-de-silva-1a2ab7320",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Coco&backgroundColor=fce7f3",
        initials: "PY"
    },
    {
        name: "Kaushal Senevirathne",
        role: "Frontend Developer",
        github: "https://github.com/KaushalSenevirathne",
        linkedin: "",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Kaushal&backgroundColor=fef3c7",
        initials: "KS"
    },
    {
        name: "Hitheshi Kariyawasam",
        role: "UI/UX & Product Design",
        github: "https://github.com/hitheshik",
        linkedin: "https://www.linkedin.com/in/hitheshi-kariyawasam-719600378/",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Bella&backgroundColor=ede9fe",
        initials: "HK"
    },
    {
        name: "Sedani Lesara",
        role: "UI/UX & QA",
        github: "https://github.com/Sedani25",
        linkedin: "http://www.linkedin.com/in/sedani-lesara-sethumlee-956998395",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Daisy&backgroundColor=ffe4e6",
        initials: "SL"
    }
];

const accordionData = [
    {
        title: "Our Mission",
        content: "To gamify travel in Sri Lanka, encouraging locals and tourists to explore hidden gems, cultural landmarks, and nature trails, promoting sustainable and diversified tourism across all 25 districts."
    },
    {
        title: "Our Vision",
        content: "To become the ultimate digital travel companion that transforms exploring Sri Lanka into an engaging, rewarding, and shareable adventure for everyone."
    },
    {
        title: "Why We Started",
        content: "We realized that many beautiful locations in Sri Lanka go unnoticed. We wanted to build an app that makes discovery fun, rewarding curiosity with digital achievements and creating a verified travel portfolio."
    }
];

function Accordion({ title, content, isOpen, onClick }) {
    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-teal-500/10 border-teal-500' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
            >
                <span className="text-lg font-bold text-white">{title}</span>
                {isOpen ? <Minus className="text-teal-400" /> : <Plus className="text-teal-400" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className={`p-6 pt-2 text-slate-400 leading-relaxed border-l-2 border-teal-500/30 ml-6 my-2`}>
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Team() {
    const [openAccordion, setOpenAccordion] = useState(0);

    return (
        <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT SIDE: Info & Accordion */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-teal-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Builders</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Meet the Minds Behind <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Maporia</span>
                            </h2>
                            <p className="text-slate-400 mb-10 text-lg">
                                We are a group of passionate innovators from IIT. We are building Maporia to solve real-world engagement problems with code and creativity.
                            </p>

                            <div className="space-y-2">
                                {accordionData.map((item, index) => (
                                    <Accordion
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                        isOpen={openAccordion === index}
                                        onClick={() => setOpenAccordion(index === openAccordion ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Team Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 gap-4">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <GlassCard className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 hover:border-teal-500/30 transition-colors group text-center sm:text-left">
                                        {/* Avatar / Circle */}
                                        <div className="relative shrink-0 w-16 h-16">
                                            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-white border border-white/10 group-hover:border-teal-500 transition-colors overflow-hidden">
                                                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{member.name}</h3>
                                            <p className="text-teal-500 text-xs font-bold uppercase tracking-wide mb-2">{member.role}</p>

                                        </div>

                                        {/* Socials */}
                                        <div className="flex gap-4 opacity-100 transition-opacity">
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                                    <Linkedin size={20} />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
