import { Button, Page, Title } from '@cardapio/ui/components'
import DeliveryForm from '@/app/checkout/entrega/delivery-form'
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

export default function CheckoutDeliveryPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Link href="/checkout/cliente">
          <Button variant="filled" icon={BiChevronLeft} size="small" />
        </Link>{' '}
        Entrega
      </Title>
      <div className="lg:max-w-md">
        <DeliveryForm />
      </div>
    </Page>
  )
}
