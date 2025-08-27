// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary:  { DEFAULT: '#4f46e5', foreground: '#ffffff' },   // example only
                success:  { DEFAULT: '#059669', foreground: '#ffffff' },
                warning:  { DEFAULT: '#f59e0b', foreground: '#111827' },
                danger:   { DEFAULT: '#dc2626', foreground: '#ffffff' },
                background: '#0b1220',
                foreground: '#e5e7eb',
                border: '#334155',
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.25rem',
            },
        },
    },
} satisfies Config;
