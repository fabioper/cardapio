import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components'

const meta = {
  title: 'Cardápio/Button',
  component: Button,
  args: {
    label: 'Badge',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Button',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    label: 'Button',
  },
}

export const Warn: Story = {
  args: {
    variant: 'warn',
    label: 'Button',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Button',
  },
}
