import { Meta, StoryObj } from '@storybook/react'
import { Title } from '../components'

const meta = {
  title: 'Cardápio/Title',
  component: Title,
  args: {
    children: 'Título',
  },
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

export const Regular: Story = {}
