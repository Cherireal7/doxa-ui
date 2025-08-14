import { useState } from 'react'

export default function PreviewCard({
  title,
  code,
  children,
}: {
  title: string
  code: string
  children: React.ReactNode
}) {
  const [copied, setCopied] = useState(false)
  const onCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className="rounded-2xl border border-border bg-white/70 dark:bg-zinc-900/70 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          onClick={onCopy}
          className="text-xs px-2 py-1 rounded-md border hover:bg-black/5"
          aria-label="Copy code"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="p-4">{children}</div>
      <pre className="m-0 p-4 text-xs overflow-auto bg-zinc-950 text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
