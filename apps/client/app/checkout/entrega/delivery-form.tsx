'use client'

import { ActionBar, Button, TextInput } from '@cardapio/ui/components'
import React, { useCallback } from 'react'
import { useSmallScreen } from '@/hooks/use-small-screen'
import { useForm } from 'react-hook-form'
import { Delivery, useCheckout } from '@/stores/checkout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

export default function DeliveryForm() {
  const smallScreen = useSmallScreen()
  const checkout = useCheckout()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Delivery>({
    resolver: zodResolver(Delivery),
    defaultValues: checkout.delivery,
  })

  const saveDelivery = useCallback(
    (values: Delivery) => {
      checkout.setDelivery(values)
      router.push('/checkout/pagamento')
    },
    [checkout, router],
  )

  return (
    <form
      className="flex flex-col items-start gap-5"
      onSubmit={handleSubmit(saveDelivery)}
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="postalCode">CEP</label>
        <TextInput
          placeholder="Ex.: 123"
          {...register('postalCode')}
          invalid={!!errors.postalCode}
          message={errors.postalCode?.message}
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="address">Endereço</label>
        <TextInput
          {...register('address')}
          invalid={!!errors.address}
          message={errors.address?.message}
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="addressNumber">Número</label>
        <TextInput
          id="addressNumber"
          placeholder="Número ou s/n"
          {...register('addressNumber')}
          invalid={!!errors.addressNumber}
          message={errors.addressNumber?.message}
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="complement">Complemento</label>
        <TextInput
          placeholder="Apartamento, casa, conjunto, edifício, etc"
          {...register('complement')}
          invalid={!!errors.complement}
          message={errors.complement?.message}
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="district">Bairro</label>
        <TextInput
          {...register('district')}
          invalid={!!errors.district}
          message={errors.district?.message}
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="city">Cidade</label>
        <TextInput
          {...register('city')}
          invalid={!!errors.city}
          message={errors.city?.message}
        />
      </div>

      {smallScreen ? (
        <ActionBar>
          <div className="container">
            <Button label="Continuar" className="w-full" type="submit" />
          </div>
        </ActionBar>
      ) : (
        <Button label="Continuar" type="submit" />
      )}
    </form>
  )
}
