// src/pages/ui/core.tsx
// Standalone page: no external UI imports.

import { useState } from 'react';
import type {
    ButtonProps,
    ButtonSize,
    ButtonVariant,
} from '../types/button';

/* ------------------------- Local utilities ------------------------- */

function CodeBlock({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch {
            /* no-op */
        }
    };
    return (
        <div className="relative">
            <button
                onClick={copy}
                className="absolute right-3 top-3 rounded-md border border-white/15 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20"
                aria-label="Copy code"
            >
                {copied ? 'Copied' : 'Copy'}
            </button>
            <pre className="m-0 overflow-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100">
        <code>{code}</code>
      </pre>
        </div>
    );
}

/* ------------------------- Improved Button (inline) ------------------------- */

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400',
    secondary:
        'bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600',
    outline:
        'border border-zinc-300 text-zinc-800 hover:bg-zinc-50 dark:border-white/20 dark:text-white/90 dark:hover:bg-white/10',
};

function Button({
                    children,
                    className = '',
                    size = 'md',
                    variant = 'primary',
                    type = 'button',
                    ...props
                }: ButtonProps) {
    return (
        <button
            type={type}
            aria-disabled={props.disabled || undefined}
            disabled={props.disabled}
            className={[
                'inline-flex items-center justify-center rounded-xl font-medium transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-indigo-400/50',
                'disabled:opacity-50 disabled:pointer-events-none',
                sizeClasses[size],
                variantClasses[variant],
                className || '',
            ].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
}

/* ------------------------- Page content ------------------------- */

export default function CorePage() {
    const [value, setValue] = useState('');

    const analysisIntro =
        "The provided `Button` component is relatively concise and well-written, but there are a few potential issues and suggestions for improvement. Here's a detailed analysis of the code:";

    // Updated sample to show importing the interface from the types file.
    const buttonSource = `import type { ButtonProps } from '../../types/button';

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  size = 'md',
  variant = 'primary',
  type = 'button',
  ...props
}) => {
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  } as const;

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-400',
    secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-600',
    outline: 'border border-zinc-300 text-zinc-800 hover:bg-zinc-50 dark:border-white/20 dark:text-white/90 dark:hover:bg-white/10',
  } as const;

  const resolvedSize = sizes[size] ?? sizes.md;
  const resolvedVariant = variants[variant] ?? variants.primary;

  return (
    <button
      type={type as 'button' | 'submit' | 'reset'}
      aria-disabled={props.disabled || undefined}
      disabled={props.disabled}
      className={[
        'inline-flex items-center justify-center rounded-xl font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-indigo-400/50',
        'disabled:opacity-50 disabled:pointer-events-none',
        resolvedSize,
        resolvedVariant,
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};`;

    return (
        <main className="mx-auto max-w-6xl px-4 py-10 text-zinc-100">
            <h1 className="mb-2 text-3xl font-bold">Core Components — Button Review</h1>
            <p className="mb-8 text-zinc-400">{analysisIntro}</p>

            {/* Potential Problems */}
            <section className="mb-10 space-y-6">
                <h2 className="text-xl font-semibold">Potential Problems</h2>
                <ol className="list-inside list-decimal space-y-4 text-zinc-200">
                    <li>
                        <p className="font-medium">ClassName Construction</p>
                        <p className="text-zinc-400">
                            Using <code>[...].join(' ')</code> works, but if <code>className</code> is{' '}
                            <code>undefined</code>, you could end up with literal <code>undefined</code> in the class string. Default to
                            an empty string.
                        </p>
                        <CodeBlock code={`<Button className={undefined as unknown as string} />`} />
                    </li>

                    <li>
                        <p className="font-medium">size and variant Defaulting</p>
                        <p className="text-zinc-400">
                            Typos like <code>{'<Button size="medium" />'}</code> silently fall back. Prefer TypeScript-enforced unions.
                        </p>
                        <CodeBlock
                            code={`type ButtonSize = keyof typeof sizeClasses; // 'sm' | 'md' | 'lg'
type ButtonVariant = keyof typeof variantClasses; // 'primary' | 'secondary' | 'outline'`}
                        />
                    </li>

                    <li>
                        <p className="font-medium">Accessibility Issues</p>
                        <p className="text-zinc-400">
                            Add <code>aria-disabled</code> and keep visible focus styles for keyboard users.
                        </p>
                        <CodeBlock
                            code={`<button
  type={type}
  aria-disabled={props.disabled}
  disabled={props.disabled}
/>`}
                        />
                    </li>

                    <li>
                        <p className="font-medium">
                            Spread (<code>...props</code>) Overwrites
                        </p>
                        <p className="text-zinc-400">
                            Later props can override earlier ones. Keep important defaults first and document intended usage.
                        </p>
                        <CodeBlock code={`<Button type="submit" onClick={undefined} />`} />
                    </li>

                    <li>
                        <p className="font-medium">Tailwind Dark Mode Consistency</p>
                        <p className="text-zinc-400">
                            Ensure all variants include dark styles, not just <code>outline</code>.
                        </p>
                    </li>

                    <li>
                        <p className="font-medium">
                            Button <code>type</code> Safety
                        </p>
                        <p className="text-zinc-400">
                            Limit to <code>'button' | 'submit' | 'reset'</code> with TypeScript.
                        </p>
                    </li>

                    <li>
                        <p className="font-medium">Rigid Size Tokens</p>
                        <p className="text-zinc-400">
                            Fixed heights and paddings are fine for a kit; adjust per layout if needed.
                        </p>
                    </li>
                </ol>
            </section>

            {/* Suggestions */}
            <section className="mb-10 space-y-4">
                <h2 className="text-xl font-semibold">Suggestions for Improvements</h2>
                <ul className="list-inside list-disc space-y-2 text-zinc-300">
                    <li>
                        Strictly type <code>size</code> and <code>variant</code> props with unions.
                    </li>
                    <li>Optionally warn on invalid values instead of silently falling back.</li>
                    <li>Ensure consistent dark mode styles across all variants.</li>
                    <li>Keep components stateless; add unit/visual tests later.</li>
                </ul>
            </section>

            {/* Final Code */}
            <section className="mb-10 space-y-4">
                <h2 className="text-xl font-semibold">Final Updated Code</h2>
                <CodeBlock code={buttonSource} />
            </section>

            {/* Live Demo using the inline Button above */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Live Demo</h2>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                    <div className="flex flex-wrap gap-3">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button size="sm">Small</Button>
                        <Button size="lg">Large</Button>
                        <Button disabled>Disabled</Button>
                    </div>

                    <div className="mt-6 space-y-2">
                        <label className="text-sm text-zinc-300">Example: Button with onClick</label>
                        <Button onClick={() => alert(`Clicked with value: ${value || '(empty)'}`)}>Click Me</Button>
                        <input
                            className="ml-3 h-10 rounded-xl border border-white/15 bg-zinc-900 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                            placeholder="Optional value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
