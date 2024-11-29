/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'
import InputSelect from './InputSelect'

const meta: Meta<typeof InputSelect> = {
  title: 'Forms/InputSelect',
  component: InputSelect
  // ...
}

// type Story = StoryObj<typeof Input>

const Template = (args?: any) => {
  const { control } = useForm()

  return <InputSelect {...args} control={control} />
}

export const Default: any = Template.bind({})

Default.args = {
  name: 'name',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ],
  disabled: false,
  placeholder: 'Placeholder',
  required: false,
  type: 'text',
  isMulti: false
}

export default meta
