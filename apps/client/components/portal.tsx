import { PropsWithChildren, useEffect, useState } from 'react'
import { usePortal } from '@/hooks/usePortal'
import { createPortal } from 'react-dom'

type PortalProps = PropsWithChildren<{ elementId: string }>

export default function Portal({ children, elementId }: PortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const element = document.getElementById(elementId)
    setContainer(element)

    return () => {
      setContainer(null)
    }
  }, [elementId])

  if (container === null) return <></>

  return createPortal(children, container)
}
