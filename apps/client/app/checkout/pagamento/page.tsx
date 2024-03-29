import { Button, Page, Title } from '@cardapio/ui/components'
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react'
import PaymentForm from '@/app/checkout/pagamento/payment-form'
import Link from 'next/link'

export default function CheckoutDeliveryPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Link href="/checkout/entrega">
          <Button variant="filled" icon={BiChevronLeft} size="small" />
        </Link>{' '}
        Pagamento
      </Title>
      <div className="lg:max-w-md">
        <PaymentForm />
      </div>
    </Page>
  )
}
