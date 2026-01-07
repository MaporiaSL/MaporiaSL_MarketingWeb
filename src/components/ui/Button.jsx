import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ className, variant = 'primary', size = 'md', children, ...props }) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

    const variants = {
        primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110 shadow-lg shadow-teal-500/30',
        secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-110',
        glass: 'glass-panel text-white hover:bg-white/10 border-white/20',
        ghost: 'hover:bg-white/5 text-slate-200',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
