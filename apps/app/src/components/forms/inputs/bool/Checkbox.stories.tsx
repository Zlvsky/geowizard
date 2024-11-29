/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox
  // ...
}

// type Story = StoryObj<typeof Input>

const Template = (args?: any) => {
  return <Checkbox {...args}>This is the text of checkbox</Checkbox>
}

export const Default: any = Template.bind({})

Default.args = {
  checked: false,
  id: 'checkbox',
  name: 'checkbox',
  required: false
}

export default meta
