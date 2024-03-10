import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

export default function Title({
  children,
  ...props
}: PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) {
  return (
    <h2
      {...props}
      className={clsx(
        'text-2xl lg:text-3xl font-extrabold leading-snug',
        props.className,
      )}
    >
      {children}
    </h2>
  )
}
