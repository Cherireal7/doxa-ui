// src/ui/button.tsx
import * as React from 'react';
import { cn } from './_utils';

type Size = 'sm' | 'md' | 'lg';

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size = 'md', type = 'button', ...props }, ref) => {
      return (
          <button
              ref={ref}
              type={type}
              className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
                  'bg-primary text-white transition-colors hover:opacity-90',
                  'focus:outline-none focus:ring-2 focus:ring-primary/40',
                  'disabled:opacity-50 disabled:pointer-events-none',
                  sizeClasses[size],
                  className
              )}
              {...props}
          />
      );
    }
);
Button.displayName = 'Button';
