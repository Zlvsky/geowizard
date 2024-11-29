import type { Meta, StoryObj } from '@storybook/react'
import InputLabel from './InputLabel'

const meta: Meta<typeof InputLabel> = {
  title: 'UI/InputLabel',
  component: InputLabel
  // ...
}

import { IInputLabel } from './InputLabel'

type Story = StoryObj<typeof InputLabel>

export const Primary: Story = (args: IInputLabel) => {
  return <InputLabel {...args} />
}
Primary.args = {
  name: 'Name',
  label: 'Name',
  error: 'Error'
}

export default meta
