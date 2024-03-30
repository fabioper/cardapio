'use client'

import { ActionBar, Button, TextInput } from '@cardapio/ui/components'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useSmallScreen } from '@/hooks/use-small-screen'

export default function DeliveryForm() {
  const smallScreen = useSmallScreen()

  const button = (
    <Link href="/checkout/pagamento">
      <Button label="Continuar" className={clsx({ 'w-full': smallScreen })} />
    </Link>
  )

  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="cep">CEP</label>
        <TextInput id="cep" placeholder="Ex.: 123" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Endereço</label>
        <TextInput id="name" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="number">Número</label>
        <TextInput id="number" placeholder="Número ou s/n" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="complement">Complemento</label>
        <TextInput
          id="complement"
          placeholder="Apartamento, casa, conjunto, edifício, etc"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="district">Bairro</label>
        <TextInput id="district" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city">Cidade</label>
        <TextInput id="city" />
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
