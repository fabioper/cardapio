import { Page, Title } from '@cardapio/ui/components'
import OrderSummary from '@/components/order-summary'

export default function SummaryPage() {
  return (
    <Page>
      <Title className="mb-5">Resumo</Title>

      <OrderSummary />
    </Page>
  )
}
