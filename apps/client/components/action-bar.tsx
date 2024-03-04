'use client'

import { createPortal } from 'react-dom'
import React, { PropsWithChildren, useEffect, useState } from 'react'

const actionBarElementId = 'action-bar-root'

export function ActionBarRoot() {
  return <div id={actionBarElementId} />
}

export function ActionBar({ children }: PropsWithChildren) {
  const [container, setContainer] = useState<HTMLElement | null>()

  useEffect(() => {
    setContainer(document.getElementById(actionBarElementId))
    return () => setContainer(null)
  }, [])

  if (!container) return <></>

  return createPortal(
    <div className="w-full border-t border-t-slate-200 py-2">
      <div className="container">{children}</div>
    </div>,
    container,
  )
}

export default ActionBar
