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

  return createPortal(children, container)
}

export default ActionBar
