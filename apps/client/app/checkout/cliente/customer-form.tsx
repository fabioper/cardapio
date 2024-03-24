'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'
import Link from 'next/link'

export default function CustomerForm() {
  const smallScreen = useMediaQuery('(max-width: 500px)')

  const button = (
    <Link href="/checkout/entrega">
      <Button label="Continuar" className={clsx({ 'w-full': smallScreen })} />
    </Link>
  )
  return (
    <form className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="tel">Telefone</label>
        <input type="tel" id="tel" />
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
