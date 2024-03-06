'use client'

import { PropsWithChildren } from 'react'
import Portal from '@/components/portal'

export default function ActionBar({ children }: PropsWithChildren) {
  return (
    <Portal elementId="action-bar">
      <div className="bg-white py-3 border border-t-border">{children}</div>
    </Portal>
  )
}
