import React from 'react'
import { getProducts } from '@/services/products.service'
import ProductCard from '@/components/product-card'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="py-5 lg:py-10">
      <h2 className="text-2xl lg:text-3xl font-extrabold mb-3 lg:mb-5 container">
        Produtos
      </h2>

      <section className="container divide-y md:divide-none flex flex-col md:grid md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
