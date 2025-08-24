// src/pages/ui/core.tsx
import { useState } from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant } from '@/types/button';

/* ---------- Minimal Button (inline) ---------- */
const sizeClasses: Record<ButtonSize, string> = {
	sm: 'h-8 px-3 text-sm',
	md: 'h-10 px-4 text-sm',
	lg: 'h-12 px-5 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400',
	secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600',
	outline:
		'border border-zinc-300 text-zinc-100 hover:bg-white/5 dark:border-white/20',
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

/* ---------- Tiny CodeBlock (purple glass) ---------- */
function CodeBlock({ code }: { code: string }) {
	const [copied, setCopied] = useState(false);
	const onCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 900);
		} catch {/* noop */}
	};

	return (
		<div className="relative overflow-hidden rounded-2xl border border-purple-400/30 bg-purple-500/15 backdrop-blur-xl shadow-[0_0_0_1px_rgba(168,85,247,0.25)]">
			{/* smoke/light bloom */}
			<div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(420px_200px_at_20%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(300px_160px_at_90%_20%,rgba(147,51,234,0.22),transparent_60%)] blur-3xl" />
			<button
				onClick={onCopy}
				className="absolute right-3 top-3 z-10 rounded-md border border-white/15 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20"
			>
				{copied ? 'Copied' : 'Copy'}
			</button>
			<pre className="relative z-10 m-0 overflow-auto p-4 text-xs text-white">
        <code>{code}</code>
      </pre>
		</div>
	);
}

/* ---------- Page ---------- */
export default function CorePage() {
	const snippet = `
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
`.trim();

	return (
		<main className="min-h-screen bg-[#0b1220] text-white">
			<div className="mx-auto max-w-6xl px-4 py-10">
				<h1 className="text-3xl font-bold mb-2">Core</h1>
				<p className="text-zinc-300/80 mb-8">Foundational UI elements.</p>

				<div className="grid gap-6 md:grid-cols-2">
					{/* Live demo (purple glass) */}
					<div className="relative overflow-hidden rounded-2xl border border-purple-400/30 bg-purple-500/15 p-6 backdrop-blur-xl shadow-[0_0_0_1px_rgba(168,85,247,0.25)]">
						<div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(420px_220px_at_10%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(320px_160px_at_95%_10%,rgba(147,51,234,0.22),transparent_60%)] blur-3xl" />
						<h2 className="text-xl font-semibold mb-3">Button</h2>
						<div className="flex flex-wrap gap-3">
							<Button>Primary</Button>
							<Button variant="secondary">Secondary</Button>
							<Button variant="outline">Outline</Button>
							<Button size="sm">Small</Button>
							<Button size="lg">Large</Button>
							<Button disabled>Disabled</Button>
						</div>
					</div>

					{/* Code (purple glass) */}
					<CodeBlock code={snippet} />
				</div>
			</div>
		</main>
	);
}
