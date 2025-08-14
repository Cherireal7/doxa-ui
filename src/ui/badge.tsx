import { cn } from './_utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs', className)}>
      {children}
    </span>
  )
}
