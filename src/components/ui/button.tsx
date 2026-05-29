import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium cursor-pointer select-none',
          'transition-all duration-200 rounded-xl',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
          'disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]',
          {
            'bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/10':
              variant === 'primary',
            'border border-border text-secondary hover:border-primary/60 hover:text-primary bg-transparent':
              variant === 'outline',
            'text-muted hover:text-foreground bg-transparent': variant === 'ghost',
          },
          {
            'min-h-[36px] px-3 text-xs': size === 'sm',
            'min-h-[44px] px-5 text-sm': size === 'md',
            'min-h-[50px] px-7 text-sm tracking-wide': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
