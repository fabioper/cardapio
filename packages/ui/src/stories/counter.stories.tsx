import { Meta, StoryObj } from '@storybook/react'
import { Counter } from '../components'

const meta = {
  title: 'Cardápio/Counter',
  component: Counter,
} satisfies Meta<typeof Counter>

export default meta

type Story = StoryObj<typeof meta>

export const Regular: Story = {}
