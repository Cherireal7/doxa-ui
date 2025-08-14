// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--bg) / <alpha-value>)',
                fg: 'rgb(var(--fg) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.25rem',
            },
        },
    },
} satisfies Config;
