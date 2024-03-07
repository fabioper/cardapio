'use client'

import { PropsWithChildren } from 'react'
import Portal from '@/components/portal'

export default function ActionBar({ children }: PropsWithChildren) {
  return (
    <Portal elementId="action-bar">
      <div className="bg-surface-a py-3 drop-shadow-top">{children}</div>
    </Portal>
  )
}
