import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface PageProps extends React.HTMLProps<HTMLDivElement> {
  containerProps?: React.HTMLProps<HTMLDivElement>
}

export default function Page({
  children,
  containerProps = {},
  ...props
}: PropsWithChildren<PageProps>) {
  return (
    <main {...props} className={clsx('py-5 lg:pt-10', props.className)}>
      <div
        {...containerProps}
        className={clsx('container', containerProps.className)}
      >
        {children}
      </div>
    </main>
  )
}
