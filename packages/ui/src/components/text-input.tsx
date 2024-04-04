import React, { ForwardedRef, forwardRef } from 'react'
import clsx from 'clsx'
import { IconType } from 'react-icons'

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: IconType
  invalid?: boolean
  message?: string
}

function TextInput(
  {
    invalid,
    className,
    icon: Icon,
    type = 'text',
    message,
    ...props
  }: TextInputProps,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  return (
    <span className="inline-flex flex-col">
      <span className="relative">
        {Icon && (
          <Icon className="absolute box-content w-5 px-2 text-4xl top-1/2 -translate-y-1/2 left-0 text-surface-e" />
        )}

        <input
          {...props}
          ref={ref}
          type={type}
          className={clsx(
            'bg-[#181618] border-b border-surface-d p-2 rounded-t text-foreground text-base focus:outline-none focus:border-primary placeholder:text-surface-d w-full',
            {
              '!border-danger': invalid,
              'pl-10': Icon,
            },
            className,
          )}
        />
      </span>

      {message && (
        <span
          className={clsx('text-sm mt-1', {
            'text-danger': invalid,
          })}
          aria-live="polite"
        >
          {message}
        </span>
      )}
    </span>
  )
}

export default forwardRef(TextInput)
