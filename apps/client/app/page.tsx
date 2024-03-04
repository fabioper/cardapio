import { ActionBar } from '@/components/action-bar'
import React from 'react'
import Button from '@/components/button'
import Link from 'next/link'
import { getProducts } from '@/services/products.service'
import { FaShoppingBag } from 'react-icons/fa'
import ProductCard from '@/components/product-card'

export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      <h2 className="text-xl font-bold mb-3 container">Produtos</h2>

      <section className="flex flex-col">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/${product.id}`}
            className="border-t last:border-b border-border"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </section>

      <ActionBar>
        <Link href="/pedido">
          <Button
            itemLeft={<FaShoppingBag />}
            itemRight="R$ 20,00"
            className="w-full"
          >
            Conferir pedido
          </Button>
        </Link>
      </ActionBar>
    </main>
  )
}
