import * as React from 'react'
import { cn } from './_utils'

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('rounded-2xl border border-border bg-white dark:bg-zinc-900 shadow-sm', props.className)}
    />
  )
}
export const CardHeader = (p: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={cn('px-4 pt-4 pb-2', p.className)} />
)
export const CardTitle = (p: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 {...p} className={cn('text-base font-semibold', p.className)} />
)
export const CardDescription = (p: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p {...p} className={cn('text-sm text-muted', p.className)} />
)
export const CardContent = (p: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={cn('px-4 pb-4', p.className)} />
)
export const CardFooter = (p: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={cn('px-4 py-3 border-t border-border', p.className)} />
)
