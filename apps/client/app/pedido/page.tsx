import Title from '@/components/title'
import { Item } from '@/stores/cart'
import CartItems from '@/components/cart-items'
import { Metadata } from 'next'

const items: Item[] = [
  {
    id: '1',
    product: {
      id: 1,
      title: 'Mesh Cheese',
      description:
        'Smash 80g, queijo cheddar, molho Mesh. Não acompanha molho à parte.',
      price: 20,
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/d367de79-2a0a-45ce-9703-a6194ee96eca/202308242025_ACD4_i.jpg',
        alt: '',
      },
    },
    complement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    quantity: 3,
  },
  {
    id: '2',
    product: {
      id: 9,
      title: 'Jack Sparrow',
      combo: true,
      description:
        'Pão Brioche da casa tostado na chapa, 180g de Costela Bovina, queijo prato, 3 Anéis de Cebola empanada, maionese e molho barbecue. + Acompanhamento + Bebida da sua preferencia.',
      price: 52.9,
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/97e2a546-4802-421f-8a5f-9889e0236de2/202307041146_W03K_i.jpg',
        alt: '',
      },
    },
    complement: '',
    quantity: 1,
  },
  {
    id: '3',
    product: {
      id: 3,
      title: 'Combo Cheddar Mesh Melt',
      description: 'Cheddar Mesh Melt + Batata palito + Bebida',
      price: 41.9,
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/45b13915-5481-42db-9ef0-f0fa794d9e06/202205081216_48I2_i.jpg',
        alt: '',
      },
    },
    complement: '',
    quantity: 1,
  },
]

export const metadata: Metadata = { title: 'Pedido' }

export default function CartPage() {
  return (
    <main className="py-5 lg:py-10">
      <div className="container">
        <Title>Pedido</Title>
        <CartItems items={items} />
      </div>
    </main>
  )
}
