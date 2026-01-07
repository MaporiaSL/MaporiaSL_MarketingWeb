import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function GlassCard({ className, children, hoverEffect = true, ...props }) {
    return (
        <div
            className={twMerge(
                'glass-panel rounded-2xl p-6 transition-all duration-300',
                hoverEffect && 'hover:bg-white/10 hover:shadow-xl hover:shadow-teal-900/20 hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
