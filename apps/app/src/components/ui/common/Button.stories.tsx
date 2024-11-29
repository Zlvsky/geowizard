import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button
  // ...
}

type Story = StoryObj<typeof Button>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Primary: Story = (args: any) => {
  return (
    <Button {...args} type="button">
      Primary
    </Button>
  )
}
Primary.args = {
  disabled: false,
  type: 'button'
}

export default meta
