import React from 'react'
import { getProducts } from '@/services/products.service'
import ProductCard from '@/components/product-card'

export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      <h2 className="text-xl font-bold mb-3 container">Produtos</h2>

      <section className="container flex flex-col lg:grid lg:grid-cols-3 lg:gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
