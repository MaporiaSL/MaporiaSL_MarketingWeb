'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Features', href: '#features' },
        { name: 'Team', href: '#team' },
        { name: 'Contribute', href: '#about' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 100; // Offset for the fixed navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <div className={`
                pointer-events-auto
                relative px-6 py-3 rounded-full flex items-center justify-between gap-8
                transition-all duration-300 ease-out
                ${scrolled || mobileMenuOpen ? 'bg-slate-900/80 border-slate-700/50 shadow-2xl backdrop-blur-xl w-full max-w-5xl' : 'bg-white/5 border-white/10 backdrop-blur-md w-auto min-w-[320px] max-w-4xl hover:bg-black/40'}
                border scale-100 hover:scale-[1.01]
            `}>
                {/* Logo */}
                <a href="#" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 group">
                    {/* Use the transparent logo we have, or text */}
                    <img src="/maporia-logo-transparent-1.svg" alt="Maporia" className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                    {/* Optional Text if logo is just icon */}
                    {/* <span className="font-bold text-lg text-white tracking-wide">Maporia</span> */}
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button
                        size="sm"
                        variant="primary"
                        className="rounded-full !px-6 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)]"
                        onClick={(e) => scrollToSection(e, '#waitlist')}
                    >
                        Join Waitlist
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-auto md:hidden flex flex-col gap-2"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="px-4 py-3 text-center text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2 flex justify-center">
                            <Button
                                size="sm"
                                variant="primary"
                                className="w-full rounded-xl"
                                onClick={(e) => scrollToSection(e, '#waitlist')}
                            >
                                Join Waitlist
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
