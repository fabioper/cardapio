import React from 'react'
import Link from 'next/link'
import { getProducts } from '@/services/products.service'
import ProductCard from '@/components/product-card'

export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      <h2 className="text-xl font-bold mb-3 container">Produtos</h2>

      <section className="container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <Link key={product.id} href={`/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </section>
    </main>
  )
}
