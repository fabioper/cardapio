import { Button, Page, Title } from '@cardapio/ui/components'
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react'
import PaymentForm from '@/app/checkout/pagamento/payment-form'

export default function CheckoutDeliveryPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Button variant="filled" icon={BiChevronLeft} size="small" /> Pagamento
      </Title>
      <div className="lg:max-w-2xl">
        <PaymentForm />
      </div>
    </Page>
  )
}
