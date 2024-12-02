// export interface ButtonInterface {
//   size?: 'sm' | 'md' | 'lg' | 'full'
//   style?: 'filled' | 'transparent'
//   className?: string
//   children: React.ReactNode
//   disabled?: boolean
//   type: 'button' | 'submit' | 'reset' | undefined
//   onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
//   fullHeight?: boolean
// }

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        outline:
          'border border-black dark:border-foreground bg-background dark:bg-foreground/20 text-black dark:text-background',
        link: 'underline-offset-4 hover:underline',
        icon: 'ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        input:
          'w-full border-[1.5px] border-gray dark:border-gray-foreground bg-background dark:bg-foreground/20 rounded-xl text-base justify-between dark:text-background'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-full px-8',
        icon: 'h-7 w-7 p-0 [&_svg]:h-4 [&_svg]:w-4',
        input: 'px-4 py-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
