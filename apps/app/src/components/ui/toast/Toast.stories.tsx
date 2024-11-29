import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from './Toast'

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'UI/Toast',
}

export default meta
type Story = StoryObj<ToastProps>

const t = {
  createdAt: 1716478960804,
  visible: true,
  type: 'custom' as const,
  ariaProps: {
    role: 'status' as const,
    'aria-live': 'polite' as const
  },
  pauseDuration: 0,
  id: '10',
  message: "This is a default toast",
}

export const Success: Story = {
  args: {
    t: t,
    variant: 'success',
    title: 'Success',
    description: 'This is a success toast'
  },
}

export const Error: Story = {
  args: {
    t: t,
    variant: 'error',
    title: 'Error',
    description: 'This is an error toast'
  },
}

export const Ambush: Story = {
  args: {
    t: t,
    variant: 'warning',
    title: 'Warning',
    description: 'This is an warning toast'
  },
}

