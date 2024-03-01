import React from 'react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-green-600 text-white py-2 px-5 w-full rounded text-sm"
    >
      {children}
    </button>
  )
}
