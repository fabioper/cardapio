import Link from 'next/link'
import React from 'react'
import { getProducts } from '@/services/products.service'

function formatCurrency(value: number, currency: string = 'BRL') {
  let currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  })

  return currencyFormatter.format(value)
}

export default async function ProductsListing() {
  const products = await getProducts()

  return (
    <section className="flex flex-col gap-3">
      {products.map(product => (
        <div key={product.id}>
          <div className="flex flex-col gap items-start">
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
