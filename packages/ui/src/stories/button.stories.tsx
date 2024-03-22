import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components'
import { BiCheck } from 'react-icons/bi'

const meta = {
  title: 'Cardápio/Button',
  component: Button,
  argTypes: {
    status: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'regular'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Regular: Story = {
  args: {
    status: 'primary',
    label: 'Button',
    variant: 'regular',
  },
}

export const Text: Story = {
  args: {
    status: 'primary',
    label: 'Button',
    variant: 'text',
  },
}

export const Outlined: Story = {
  args: {
    status: 'primary',
    label: 'Button',
    variant: 'outlined',
  },
}

export const Filled: Story = {
  args: {
    status: 'primary',
    label: 'Button',
    variant: 'filled',
  },
}

export const Icon: Story = {
  name: 'With icon',
  args: {
    status: 'primary',
    label: 'Button',
    variant: 'regular',
    icon: BiCheck,
  },
}

export const IconOnly: Story = {
  name: 'Icon only',
  args: {
    status: 'primary',
    variant: 'regular',
    icon: BiCheck,
  },
}

export const Badge: Story = {
  args: {
    status: 'primary',
    variant: 'regular',
    icon: BiCheck,
    badge: '1',
  },
}
