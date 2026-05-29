import * as React from 'react'
import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary',
          'transition-colors duration-200',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
