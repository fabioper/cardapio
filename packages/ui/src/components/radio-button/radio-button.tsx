import React from 'react'
import clsx from 'clsx'

type RadioButtonProps = Omit<React.HTMLProps<HTMLInputElement>, 'type'>

export default function RadioButton({ className, ...props }: RadioButtonProps) {
  return (
    <input
      {...props}
      type="radio"
      className={clsx(
        `
        appearance-none
        transition-all
        p-0 w-4 h-4
        rounded-full
        bg-surface-a
        border-2
        border-surface-c
        checked:border-4
        checked:border-primary
        focus:outline-0 focus:outline-primary focus:outline-offset-0
        hover:border-2
        checked:hover:border-primary-hover
        checked:hover:border-4
        checked:bg-surface-b
      `,
        className,
      )}
    />
  )
}
