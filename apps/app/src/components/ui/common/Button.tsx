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
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border border-black bg-black text-white hover:bg-black/90',
        outline: 'border border-black bg-transparent text-black',
        link: 'underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10'
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