'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'
import Link from 'next/link'

export default function DeliveryForm() {
  const smallScreen = useMediaQuery('(max-width: 500px)')

  const button = (
    <Link href="/checkout/pagamento">
      <Button label="Continuar" className={clsx({ 'w-full': smallScreen })} />
    </Link>
  )

  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Endereço</label>
        <input type="text" id="name" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="number">Número</label>
        <input type="text" id="number" />
      </div>

      {smallScreen ? (
        <ActionBar>
          <div className="container">{button}</div>
        </ActionBar>
      ) : (
        button
      )}
    </form>
  )
}
