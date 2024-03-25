import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { RadioButton } from '../components'

const RadioButtonContainer = (
  props: React.ComponentProps<typeof RadioButton>,
) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <RadioButton {...props} id="item1" name="item" />
        <label htmlFor="item1">Item 1</label>
      </div>

      <div className="flex items-center gap-2">
        <RadioButton {...props} id="item2" name="item" checked />
        <label htmlFor="item2">Item 2</label>
      </div>
    </div>
  )
}

const meta = {
  title: 'Cardápio/RadioButton',
  component: RadioButtonContainer,
} satisfies Meta<typeof RadioButtonContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
