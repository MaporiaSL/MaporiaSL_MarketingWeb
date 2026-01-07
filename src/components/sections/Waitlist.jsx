'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { addToWaitlist } from '../../app/actions';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData();
        formData.append('email', email);

        const result = await addToWaitlist(null, formData);

        if (result.success) {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
            setEmail('');
        } else {
            setStatus('error');
        }
        setMessage(result.message);
    };

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

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            disabled={status === ('loading') || status === 'success'}
                            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all disabled:opacity-50"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={status === 'loading' || status === 'success'}
                            className={`rounded-full px-8 border-none shadow-xl min-w-[160px] ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-teal-500 hover:bg-teal-400'} text-white shadow-teal-900/50`}
                        >
                            {status === 'loading' ? <Loader2 className="animate-spin" /> :
                                status === 'success' ? <CheckCircle /> :
                                    "Get Early Access"}
                        </Button>
                    </form>

                    {/* Feedback Message */}
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mt-6 text-sm font-medium flex items-center justify-center gap-2 ${status === 'error' ? 'text-red-400' : 'text-teal-400'}`}
                        >
                            {status === 'error' && <AlertCircle size={16} />}
                            {message}
                        </motion.div>
                    )}

                    {!message && (
                        <p className="mt-6 text-sm text-slate-500">
                            We promise not to spam. Only updates about our launch.
                        </p>
                    )}
                </GlassCard>
            </div>
        </section>
    );
}
