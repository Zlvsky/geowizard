import { cn } from '@/utils'
import { forwardRef } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  divClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ divClassName, name, type, ...rest }, ref): JSX.Element => {
    return (
      <>
        <div className={cn('group relative flex flex-col text-left', divClassName)}>
          <input
            id={name}
            name={name}
            type={type}
            ref={ref}
            {...rest}
            className="border-input w-full rounded-xl border-[1.5px] px-4 py-3 focus-visible:outline-none"
          />
          {/* 
            Show the rest of the characters that can be entered in the input field
          */}
          {!!rest.maxLength && (
            <div className="pointer-events-none select-none opacity-0 transition-opacity duration-200 group-focus-within:opacity-100">
              <span className="text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 text-right text-[0.8rem]">
                {rest.maxLength -
                  (typeof rest.value === 'string' ? rest.value.length : 0)}{' '}
                / {rest.maxLength}
              </span>
            </div>
          )}
        </div>
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
