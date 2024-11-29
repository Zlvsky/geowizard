/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input
  // ...
}

// type Story = StoryObj<typeof Input>

const Template = (args?: any) => {
  const { register } = useForm()

  return <Input {...args} register={register} />
}

export const Default: any = Template.bind({})

Default.args = {
  name: 'name',
  disabled: false,
  placeholder: 'Placeholder',
  required: false,
  type: 'text'
}

export default meta
