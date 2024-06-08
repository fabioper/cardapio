import { Page, Title } from '@cardapio/ui/components'

export default function SuccessPage() {
  return (
    <Page className="max-w-xl mx-auto text-center flex items-center justify-center h-full">
      <Title className="text-primary text-3xl">Pedido recebido!</Title>
      <p>Já recebemos seu pedido e logo começaremos a prepará-lo.</p>
    </Page>
  )
}
