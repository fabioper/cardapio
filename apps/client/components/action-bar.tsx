'use client'

import { createPortal } from 'react-dom'
import React, { PropsWithChildren, useEffect, useState } from 'react'

const actionBarElementId = 'actionBar'

function useActionBarContainer() {
  const [container, setContainer] = useState<HTMLElement | null>()

  useEffect(() => {
    setContainer(document.getElementById(actionBarElementId))
    return () => setContainer(null)
  }, [])

  return container
}

export function ActionBarWrapper() {
  return <div id={actionBarElementId} />
}

function ActionBar({ children }: PropsWithChildren) {
  const container = useActionBarContainer()

  if (!container) return <></>

  return createPortal(
    <div className="bg-white border-t border-t-slate-200 shadow-stone-950 shadow-lg">
      {children}
    </div>,
    container,
  )
}

export default ActionBar
