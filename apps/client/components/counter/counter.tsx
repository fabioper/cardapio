'use client'

import React, { ChangeEvent, useCallback } from 'react'
import Button from '@/components/button'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface CounterProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'type' | 'onChange' | 'value'
  > {
  value?: number
  onChange?: (value?: number) => void
}

export default function Counter({ value, onChange, ...props }: CounterProps) {
  const reachedMinimum = props.min !== undefined && value === props.min
  const reachedMaximum = props.max !== undefined && value === props.max

  const increase = useCallback(() => {
    if (reachedMaximum) return

    onChange?.((value || 0) + 1)
  }, [onChange, reachedMaximum, value])

  const decrease = useCallback(() => {
    if (reachedMinimum) return
    onChange?.((value || 0) - 1)
  }, [onChange, reachedMinimum, value])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(Number(event.target.value) || 0)
    },
    [onChange],
  )

  return (
    <div className="flex items-center gap-2">
      <Button
        data-testid="decreaseButton"
        onClick={decrease}
        disabled={value === 0 || reachedMinimum}
        icon={FiMinus}
        size="small"
      />

      <input
        {...props}
        value={value}
        onChange={handleChange}
        onKeyDown={event => {
          if (
            event.key !== 'Backspace' &&
            !(
              event.shiftKey ||
              event.altKey ||
              event.ctrlKey ||
              event.metaKey
            ) &&
            !/[0-9]/i.test(event.key)
          ) {
            event.preventDefault()
          }
        }}
        type="text"
        role="spinbutton"
        className="border border-surface-c p-2 w-12 text-center appearance-none focus:outline-primary"
      />

      <Button
        data-testid="increaseButton"
        onClick={increase}
        disabled={reachedMaximum}
        icon={FiPlus}
        size="small"
      />
    </div>
  )
}
