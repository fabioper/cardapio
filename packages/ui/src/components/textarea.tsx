import React from 'react'
import clsx from 'clsx'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  invalid?: boolean
  message?: string
}

export default function Textarea({
  invalid,
  message,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col">
      <textarea
        {...props}
        className={clsx(
          'bg-[#181618] border-b border-surface-d p-2 rounded-t text-foreground text-base focus:outline-none focus:border-primary placeholder:text-surface-d',
          {
            '!border-danger': invalid,
          },
          className,
        )}
      />

      {message && (
        <span
          className={clsx('text-sm mt-1', {
            'text-danger': invalid,
          })}
        >
          {message}
        </span>
      )}
    </div>
  )
}
