import React from 'react'
import clsx from 'clsx'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {}

export default function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        `
          bg-surface-c
          rounded
          p-2
          focus:outline-2
          focus:outline
          focus:outline-primary
        `,
        props.className,
      )}
    />
  )
}
