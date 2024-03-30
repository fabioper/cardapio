import { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../components'

const meta = {
  title: 'Cardápio/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Regular: Story = {}

export const WithHelper: Story = {
  args: {
    message: 'This is a helper message',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    message: 'This is a error message',
  },
}
