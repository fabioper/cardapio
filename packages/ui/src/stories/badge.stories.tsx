import { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components'

const meta = {
  title: 'Cardápio/Badge',
  component: Badge,
  args: {
    label: 'Badge',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
