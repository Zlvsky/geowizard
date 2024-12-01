import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/toast'
import { TOAST_DESCRIPTION, TOAST_HEADER } from '@/data/toaster-dictionary'
import { useToast } from '@/hooks/useToast'
import { CircleCheck, CircleXIcon, LoaderCircleIcon } from 'lucide-react'

export function CustomToster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const isLoading = title?.includes('LOADING')
        const isError = title?.includes('ERROR')
        return (
          <Toast key={id} {...props}>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row gap-2">
                {isLoading ? (
                  <LoaderCircleIcon size={30} className="animate-spin" />
                ) : isError ? (
                  <CircleXIcon color="red" size={30} />
                ) : (
                  <CircleCheck color="green" size={30} />
                )}
              </div>
              <div className="grid">
                <ToastTitle>
                  {TOAST_HEADER[title as keyof typeof TOAST_HEADER]}
                </ToastTitle>
                <ToastDescription>
                  {TOAST_DESCRIPTION[title as keyof typeof TOAST_DESCRIPTION]}
                </ToastDescription>
              </div>
            </div>
            {/* {action} */}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
