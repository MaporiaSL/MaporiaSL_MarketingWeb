'use client';

import { Button } from '../ui/Button';
import { MessageCircleQuestion } from 'lucide-react';

export function Survey() {
    return (
        <section className="py-16 bg-gradient-to-r from-teal-900/20 to-slate-900 border-y border-white/5">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-teal-500/10 rounded-full mb-6">
                    <MessageCircleQuestion size={32} className="text-teal-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Help Us Build Better</h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                    We want Maporia to be the perfect travel companion for you. Take our short survey and tell us what features you want most.
                </p>
                <Button
                    variant="secondary"
                    className="font-bold text-black"
                    onClick={() => window.open('https://forms.google.com', '_blank')} // Placeholder URL
                >
                    Take the Quick Survey
                </Button>
            </div>
        </section>
    );
}
