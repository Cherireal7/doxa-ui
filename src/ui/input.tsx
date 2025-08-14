import * as React from 'react'
import { cn } from './_utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-xl border border-border bg-white dark:bg-zinc-900 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40',
        className
      )}
      {...props}
    />
  )
})
