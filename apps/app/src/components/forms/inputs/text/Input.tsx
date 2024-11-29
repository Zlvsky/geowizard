import { cn } from '@/utils'
import { forwardRef } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  divClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ divClassName, name, type, ...rest }, ref): JSX.Element => {
    return (
      <>
        <div className={cn('relative flex flex-col text-left', divClassName)}>
          <input
            className="w-full border px-4 py-3 focus-visible:outline-none"
            id={name}
            name={name}
            type={type}
            ref={ref}
            {...rest}
          />
        </div>
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
