import { Button, Page, Title } from '@cardapio/ui/components'
import OrderSummary from '@/components/order-summary'
import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react'

export default function SummaryPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Link href="/checkout/pagamento">
          <Button variant="filled" icon={BiChevronLeft} size="small" />
        </Link>{' '}
        Resumo
      </Title>

      <OrderSummary />
    </Page>
  )
}
