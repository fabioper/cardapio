import React from 'react'
import { getProducts } from '@/services/products.service'
import ProductsList from '@/components/products-list'
import { Title } from '@cardapio/ui/components'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="py-5 lg:py-10">
      <div className="container flex flex-col gap-3 lg:gap-5">
        <Title>Produtos</Title>
        <ProductsList products={products} />
      </div>
    </main>
  )
}
