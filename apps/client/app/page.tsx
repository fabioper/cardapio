import React from 'react'
import { getProducts } from '@/services/products.service'
import ProductCard from '@/components/product-card'
import Title from '@/components/title'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="py-5 lg:py-10">
      <div className="container flex flex-col gap-3 lg:gap-5">
        <Title>Produtos</Title>

        <section
          className={`
            divide-surface-b
            divide-y md:divide-none
            flex flex-col
            md:grid md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:gap-4
          `}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  )
}
