import { Product } from '@/services/products.service'
import { Item } from '@/stores/cart'
import { formatCurrency } from '@/utils/formatter'
import ProductForm from '@/components/product-form'
import React from 'react'
import { Badge, Page, Title } from '@cardapio/ui/components'

interface ProductDetailsProps {
  product: Product
  cartItem?: Omit<Item, 'product'>
}

export default function ProductDetails({
  product,
  cartItem,
}: ProductDetailsProps) {
  return (
    <Page
      className="pt-0"
      containerProps={{
        className:
          'p-0 max-w-none flex flex-col gap-3 items-start pb-3 lg:flex-row lg:container',
      }}
    >
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

        <ProductForm product={product} cartItem={cartItem} />
      </section>
    </Page>
  )
}
