// function Checkbox({
//   children,
//   required,
//   checked,
//   id,
//   name,
//   disabled,
//   labelClassName,
//   ...rest
// }: CheckboxInterface): JSX.Element {
//   return (
//     <div className="align-center flex items-center">
//       <div className="relative flex flex-col">
//         <label
//           htmlFor={id}
//           className={cn('relative', {
//             'cursor-pointer': disabled === false || disabled === undefined,
//             'cursor-not-allowed': disabled === true
//           })}>
//           <input
//             id={id}
//             type="checkbox"
//             name={name}
//             className={cn(
//               'checkBox-input rounded-base check-1 z-10 h-4 w-4 appearance-none border border-black p-2'
//             )}
//             required={required}
//             disabled={disabled}
//             checked={checked}
//             {...rest}
//           />
//           <div className="checkBox-content check-1 absolute bottom-2.5 left-1 z-0 h-2.5 w-2.5 rounded-sm bg-black opacity-0 transition-opacity"></div>
//         </label>
//       </div>

//       <label htmlFor={id} className={cn('-mt-[6px] ml-2 text-left', labelClassName)}>
//         {children}
//       </label>
//     </div>
//   )
// }

import Check from '@/assets/icons/ui/check.svg?react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/utils'
import { forwardRef } from 'react'

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'focus-visible:ring-ring data-[state=checked]:text-primary-white group peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="size-4 group-data-[state=checked]:stroke-white" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxWithText = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.ComponentPropsWithoutRef<any> & { label: string }
>(({ label, children, ...props }, ref) => (
  <div className="flex space-x-2">
    <Checkbox id={props.name} ref={ref} {...props} />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor={props.name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <p className="text-sm">{children}</p>
    </div>
  </div>
))

CheckboxWithText.displayName = 'CheckboxWithText'

export { Checkbox, CheckboxWithText }
