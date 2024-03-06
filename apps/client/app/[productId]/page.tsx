import { findProductById } from '@/services/products.service'
import { notFound } from 'next/navigation'
import Button from '@/components/button'
import { formatCurrency } from '@/utils/formatter'
import { TbShoppingBagPlus } from 'react-icons/tb'
import ActionBar from '@/components/action-bar'
import React from 'react'

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
          className="w-full max-h-96 object-cover shadow-lg"
        />
      )}

      <section className="flex flex-col gap-5 container">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold">{product.title}</h1>
          <p className="text-[#666] text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        <span className="text-xl">{formatCurrency(product.price)}</span>

        <form className="w-full">
          <div className="flex flex-col gap">
            <label htmlFor="complement">Observação:</label>
            <textarea
              id="complement"
              className="bg-white border border-surface rounded p-2 focus:outline-2 focus:outline-primary"
            />
          </div>
        </form>

        <ActionBar>
          <div className="container flex gap-5 items-center">
            <Button
              label="Adicionar ao pedido"
              className="w-full"
              icon={TbShoppingBagPlus}
            />
          </div>
        </ActionBar>
      </section>
    </main>
  )
}
