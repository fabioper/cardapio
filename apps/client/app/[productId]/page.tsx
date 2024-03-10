import { findProductById } from '@/services/products.service'
import { notFound } from 'next/navigation'
import React from 'react'
import ProductForm from '@/app/[productId]/product-form'
import { formatCurrency } from '@/utils/formatter'
import Badge from '@/components/badge'

export default async function ProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const product = await findProductById(Number(params.productId))

  if (!product) return notFound()

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
            <h1 className="text-2xl lg:text-4xl font-extrabold leading-snug">
              {product.title}
            </h1>
            {product.combo && <Badge label="Combo" variant="info" />}
          </div>
          <p className="text-xl text-primary font-bold">
            {formatCurrency(product.price)}
          </p>
        </header>

        <p className="text-foreground opacity-75 text-sm leading-relaxed">
          {product.description}
        </p>

        <ProductForm product={product} />
      </section>
    </main>
  )
}
