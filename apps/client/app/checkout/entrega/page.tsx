import { Button, Page, Title } from '@cardapio/ui/components'
import DeliveryForm from '@/app/checkout/entrega/delivery-form'
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react'

export default function CheckoutDeliveryPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Button variant="filled" icon={BiChevronLeft} size="small" /> Entrega
      </Title>
      <div className="lg:max-w-2xl">
        <DeliveryForm />
      </div>
    </Page>
  )
}
