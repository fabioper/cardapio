import { findProductById } from '@/services/products.service'
import { notFound } from 'next/navigation'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'
import ProductForm from '@/app/[productId]/product-form'

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
          className="w-full max-h-96 object-cover shadow-lg lg:rounded-2xl"
        />
      )}

      <section className="flex flex-col gap-5 container">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl lg:text-4xl font-extrabold">
            {product.title}
          </h1>
          <p className="text-xl">{formatCurrency(product.price)}</p>
        </header>

        <p className="text-[#666] text-sm leading-relaxed">
          {product.description}
        </p>

        <ProductForm />
      </section>
    </main>
  )
}
