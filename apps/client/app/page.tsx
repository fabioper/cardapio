import React from 'react'
import { getProducts } from '@/services/products.service'
import ProductsList from '@/components/products-list'
import { Page, Title } from '@cardapio/ui/components'

export default async function Home() {
  const products = await getProducts()

  return (
    <Page containerProps={{ className: 'flex flex-col gap-3 lg:gap-5' }}>
      <Title>Produtos</Title>
      <ProductsList products={products} />
    </Page>
  )
}
