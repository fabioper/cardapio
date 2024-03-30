'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import { useSmallScreen } from '@/hooks/use-small-screen'
import { useForm } from 'react-hook-form'
import { Customer, useCheckout } from '@/stores/checkout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export default function CustomerForm() {
  const smallScreen = useSmallScreen()
  const router = useRouter()
  const checkout = useCheckout()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(Customer),
  })

  const saveCustomer = useCallback(
    (values: Customer) => {
      checkout.setCustomer(values)
      router.push('/checkout/entrega')
    },
    [checkout, router],
  )

  return (
    <form
      className="flex flex-col items-start gap-5"
      onSubmit={handleSubmit(saveCustomer)}
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Nome</label>
        <input type="text" {...register('name')} />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="phone">Telefone</label>
        <input type="tel" {...register('phone')} />
      </div>

      {smallScreen ? (
        <ActionBar>
          <div className="container">
            <Button type="submit" label="Continuar" className="w-full" />
          </div>
        </ActionBar>
      ) : (
        <Button type="submit" label="Continuar" />
      )}
    </form>
  )
}
