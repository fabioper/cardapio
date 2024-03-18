import CartItems from '@/components/cart-items'
import { Metadata } from 'next'
import { Title } from '@cardapio/ui/components'

export const metadata: Metadata = { title: 'Pedido' }

export default function CartPage() {
  return (
    <main className="py-5 lg:py-10">
      <div className="container">
        <Title className="mb-5">Pedido</Title>
        <CartItems />
      </div>
    </main>
  )
}
