import React from 'react'
import { getProducts } from '@/services/products.service'
import ProductCard from '@/components/product-card'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="py-5 lg:py-10">
      <h2 className="text-2xl lg:text-4xl font-extrabold mb-3 container">
        Produtos
      </h2>

      <section className="container flex flex-col lg:grid lg:grid-cols-4 lg:gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
