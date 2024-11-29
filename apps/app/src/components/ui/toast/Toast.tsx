import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { Toast as ToastType } from 'react-hot-toast';


export interface ToastProps {
  t: ToastType
  variant: 'success' | 'error' | 'warning'
  title: string;
  description: string;
}

const toastVariants = cva(
  'pointer-events-auto relative flex w-full max-w-52 flex-row rounded-lg border border-white/10 bg-white',
  {
    variants: {
      variant: {
        success: 'before:bg-green-500/90',
        error: 'before:bg-red-500/90',
        warning: 'before:bg-yellow-500/90'
      }
    },
    defaultVariants: {
      variant: 'success'
    }
  }
)

const Icon = ({ variant }: { variant: ToastProps['variant']}) => {
  switch (variant) {
    case 'success':
      return '👍'
    case 'warning':
      return '⚠️'
    case 'error':
      return '❌'
    default:
      return <></>
  }
}

export const Toast = ({ t, variant, title, description }: ToastProps) => {
  return (
    <div
      className={cn(
        toastVariants({ variant }),
        t.visible ? 'animate-toastEnter ' : 'animate-toastLeave ',
        'min-w-64 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:translate-x-[-0.5px] before:rounded-l-lg'
      )}>
      <div className="flex flex-1 flex-col gap-1.5 rounded-r-lg px-3 py-2.5 shadow-xl">
        <div className="flex flex-row items-center gap-3">
          <Icon variant={variant} />
          <div className="flex flex-col gap-1">
            <span className="text-black">{title}</span>
            <p className="text-sm text-black/80">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}