import { useState } from 'react';

export default function PreviewCard({ title, code, children,}: {
    title: string;
    code: string;
    children: React.ReactNode;
}) {
    const [copied, setCopied] = useState(false);
    const onCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div
            className="
        rounded-2xl overflow-hidden
        border border-purple-400/30
        bg-purple-500/50 backdrop-blur-xl
        text-zinc-100
        shadow-[0_0_0_1px_rgba(168,85,247,0.25)]
      "
        >
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <h3 className="text-sm font-medium text-white/90">{title}</h3>
                <button
                    onClick={onCopy}
                    className="
            text-xs px-2 py-1 rounded-md
            border border-white/15
            bg-black/20 hover:bg-black/30
            transition-colors
          "
                    aria-label="Copy code"
                >
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>

            <div className="p-4">{children}</div>

            <pre className="m-0 p-4 text-xs overflow-auto bg-black/60 text-zinc-100">
        <code>{code}</code>
      </pre>
        </div>
    );
}
