import { Button, Page, Title } from '@cardapio/ui/components'
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react'
import PaymentForm from '@/app/checkout/pagamento/payment-form'

export default function CheckoutDeliveryPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Button
          variant="text"
          icon={BiChevronLeft}
          size="small"
          className="bg-primary-hover bg-opacity-5"
        />{' '}
        Pagamento
      </Title>
      <div className="lg:max-w-2xl">
        <PaymentForm />
      </div>
    </Page>
  )
}
