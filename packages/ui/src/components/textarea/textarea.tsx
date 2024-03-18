import React from 'react'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {}

export default function Textarea(props: TextareaProps) {
  return <textarea {...props} className={props.className} />
}
