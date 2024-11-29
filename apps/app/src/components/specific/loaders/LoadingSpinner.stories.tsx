import type { Meta, StoryObj } from '@storybook/react'
import LoadingSpinner from './LoadingSpinner'

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Specific/LoadingSpinner',
  component: LoadingSpinner
  // ...
}

type Story = StoryObj<typeof LoadingSpinner>

export const Primary: Story = () => {
  return <LoadingSpinner />
}
Primary.args = {}

export default meta
