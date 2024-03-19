import CartItems from '@/components/cart-items'
import { Metadata } from 'next'
import { Title } from '@cardapio/ui/components'
import CheckoutButton from '@/components/cart-items/checkout-button'

export const metadata: Metadata = { title: 'Pedido' }

export default function CartPage() {
  return (
    <main className="py-5 lg:py-10">
      <div className="container">
        <Title className="mb-5">Pedido</Title>

        <section className="flex flex-col gap-10 items-start lg:max-w-2xl">
          <CartItems />
          <CheckoutButton />
        </section>
      </div>
    </main>
  )
}
