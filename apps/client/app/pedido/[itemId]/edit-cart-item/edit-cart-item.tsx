'use client'

import useCart from '@/stores/cart'
import { notFound } from 'next/navigation'
import Title from '@/components/title'
import Badge from '@/components/badge'
import { formatCurrency } from '@/utils/formatter'
import ProductForm from '@/components/product-form'
import React from 'react'

export default function EditCartItem({ itemId }: { itemId: string }) {
  const items = useCart(state => state.items)
  const item = items.find(item => item.id === itemId)

  if (!item) return notFound()

  const { product } = item

  return (
    <main className="flex flex-col gap-3 items-start pb-3 lg:flex-row lg:py-10 lg:container">
      {product.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full max-h-96 lg:w-auto object-cover object-center shadow-lg lg:rounded-xl"
        />
      )}

      <section className="flex flex-col gap-5 container">
        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Title>{product.title}</Title>
            {product.combo && <Badge label="Combo" variant="secondary" />}
          </div>
          <p className="text-xl text-primary font-bold">
            {formatCurrency(product.price)}
          </p>
        </header>

        <p className="text-foreground opacity-75 text-sm leading-relaxed">
          {product.description}
        </p>

        <ProductForm product={product} cartItem={item} />
      </section>
    </main>
  )
}
