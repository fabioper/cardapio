import { Meta, StoryObj } from '@storybook/react'
import { Counter } from '../components'
import { ComponentProps, useState } from 'react'

const CounterWrapper = (props: ComponentProps<typeof Counter>) => {
  const [counter, setCounter] = useState<number | undefined>(
    props.value || props.defaultValue || 0,
  )

  return (
    <Counter {...props} value={counter} onChange={value => setCounter(value)} />
  )
}

const meta = {
  title: 'Cardápio/Counter',
  component: CounterWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof CounterWrapper>

export default meta

type Story = StoryObj<typeof meta>

export const Regular: Story = {}

export const TrashIcon: Story = {
  name: 'Trash icon',
  args: {
    removable: true,
    defaultValue: 5,
  },
}
