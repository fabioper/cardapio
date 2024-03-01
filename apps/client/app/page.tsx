import ProductsListing from '@/app/products-listing'
import ActionBar from '@/components/action-bar'
import React from 'react'
import Button from '@/components/button'

export default function Home() {
  return (
    <main className="my-5">
      <div className="container">
        <h2 className="text-3xl font-bold mb-5">Produtos</h2>

        <ProductsListing />

        <ActionBar>
          <div className="container py-3">
            <Button>Conferir pedido (R$ 0,00)</Button>
          </div>
        </ActionBar>
      </div>
    </main>
  )
}
