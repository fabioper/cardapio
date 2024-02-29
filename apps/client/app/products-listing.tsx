import Link from 'next/link'

const products = [
  {
    id: 1,
    title: 'Product 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 20,
  },
  {
    id: 2,
    title: 'Product 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 25,
  },
  {
    id: 3,
    title: 'Product 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 15.9,
  },
  {
    id: 4,
    title: 'Product 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 11.1,
  },
  {
    id: 5,
    title: 'Product 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 5.8,
  },
]

function formatCurrency(value: number, currency: string = 'BRL') {
  let currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  })

  return currencyFormatter.format(value)
}

export default function ProductsListing() {
  return (
    <section className="flex flex-col gap-3">
      {products.map(product => (
        <div key={product.id}>
          <div className="flex flex-col gap">
            <Link href={`/${product.id}`}>
              <h3 className="text-blue-600 underline">{product.title}</h3>
            </Link>
            <p className="text-sm">{product.description}</p>
            <p>{formatCurrency(product.price)}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
