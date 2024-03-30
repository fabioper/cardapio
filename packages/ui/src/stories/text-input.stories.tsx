import { Meta, StoryObj } from '@storybook/react'
import TextInput from '../components/text-input'

const meta = {
  title: 'Cardápio/TextInput',
  component: TextInput,
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Regular: Story = {
  args: {},
}

export const WithHelperMessage: Story = {
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
