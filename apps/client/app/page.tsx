import { ActionBar } from '@/components/action-bar'
import React from 'react'
import Button from '@/components/button'
import { formatCurrency } from '@/utils/formatter'
import Link from 'next/link'
import { getProducts } from '@/services/products.service'
import { FaShoppingBag } from 'react-icons/fa'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="my-5">
      <div className="container">
        <h2 className="text-2xl font-bold mb-5">Produtos</h2>

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

        <ActionBar>
          <Button leftItem={<FaShoppingBag />} rightItem="R$ 20,00" fill>
            Conferir pedido
          </Button>
        </ActionBar>
      </div>
    </main>
  )
}
