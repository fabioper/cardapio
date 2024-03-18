'use client'

import React, { PropsWithChildren } from 'react'
import Portal from '../portal'

export default function ActionBar({ children }: PropsWithChildren) {
  return (
    <Portal elementId="action-bar">
      <div className="bg-surface-a py-3 border-t border-t-surface-b overflow-x-auto">
        {children}
      </div>
    </Portal>
  )
}
