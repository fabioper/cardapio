'use client'

import { Button, TextInput } from '@cardapio/ui/components'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Delivery, useCheckout } from '@/stores/checkout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

export default function DeliveryForm() {
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
          maxLength={8}
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

      <Button label="Continuar" type="submit" className="w-full md:w-auto" />
    </form>
  )
}
