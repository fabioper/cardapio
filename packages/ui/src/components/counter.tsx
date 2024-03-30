'use client'

import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import clsx from 'clsx'
import Button from './button'
import TextInput from './text-input'

type CounterProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  'type' | 'onChange' | 'value' | 'size' | 'ref'
> & {
  value?: number
  onChange?: (value?: number) => void
  onRemove?: () => void
  removable?: boolean
  defaultValue?: number
  size?: React.ComponentProps<typeof Button>['size']
}

export default function Counter({
  value,
  onChange,
  size = 'regular',
  removable = false,
  onRemove,
  ...props
}: CounterProps) {
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

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      event.key !== 'Backspace' &&
      event.key !== 'Tab' &&
      !(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) &&
      !/[0-9]/i.test(event.key)
    ) {
      event.preventDefault()
    }
  }, [])

  return (
    <div
      className={clsx('flex items-center gap-1', {
        'gap-2': size === 'small',
      })}
    >
      {!removable || (value !== undefined && value !== 1) ? (
        <Button
          variant="text"
          data-testid="decreaseButton"
          onClick={decrease}
          disabled={!value || reachedMinimum}
          icon={FiMinus}
          size={size}
        />
      ) : (
        <Button
          variant="text"
          data-testid="removeButton"
          onClick={onRemove}
          icon={FiTrash2}
          size={size}
        />
      )}

      <TextInput
        {...props}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        role="spinbutton"
        inputMode="numeric"
        className="p-1 w-6 text-base sm:w-8 text-center"
      />

      <Button
        data-testid="increaseButton"
        variant="text"
        onClick={increase}
        disabled={reachedMaximum}
        icon={FiPlus}
        size={size}
      />
    </div>
  )
}
