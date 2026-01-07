import { Github, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 py-12 text-slate-400">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Maporia</h3>
                    <p className="text-sm mt-2 flex items-center justify-center md:justify-start gap-2">
                        <MapPin size={14} className="text-teal-500" />
                        Made with love in Sri Lanka
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-8 text-sm font-medium">
                    <a href="#features" className="hover:text-teal-400 transition-colors">Features</a>
                    <a href="#team" className="hover:text-teal-400 transition-colors">Team</a>
                    <a href="#about" className="hover:text-teal-400 transition-colors">Contribute</a>
                </div>

                {/* Socials */}
                <div className="flex gap-4">
                    <a href="https://github.com/MaporiaSL" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/company/maporia/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
            <div className="text-center text-xs text-slate-600 mt-8">
                &copy; {new Date().getFullYear()} Team Maporia. All rights reserved.
            </div>
        </footer>
    );
}
