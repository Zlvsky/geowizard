import toast from "react-hot-toast"
import { Toast, ToastProps } from './Toast'

export const displayToast = (variant: ToastProps['variant'], title: string, description: string) => {
  toast.custom((t) => (
    <Toast t={t} variant={variant} title={title} description={description} />
  ))
}