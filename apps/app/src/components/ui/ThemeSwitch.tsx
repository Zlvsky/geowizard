import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '@/utils'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-light data-[state=unchecked]:bg-light/10 peer relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
    ref={ref}
  >
    <div className="absolute flex w-full justify-between rounded-full">
      <div className="flex h-7 w-7 items-center justify-center">
        <Moon size={18} color="#8D98A8" />
      </div>
      <div className="flex h-7 w-7 items-center justify-center">
        <Sun size={18} color="#8D98A8" />
      </div>

      <span className="sr-only">Toggle theme</span>
    </div>
    <SwitchPrimitives.Thumb
      className={cn(
        'bg-primary pointer-events-none relative flex h-7 w-7 items-center justify-center rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0'
      )}
    >
      <div className="">{props.children}</div>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
ThemeSwitch.displayName = SwitchPrimitives.Root.displayName

export { ThemeSwitch }
