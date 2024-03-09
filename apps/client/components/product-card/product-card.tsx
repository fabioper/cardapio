import { Product } from '@/services/products.service'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/${product.id}`}>
      <div className="flex items-start h-full justify-end gap-2 py-3 md:flex-col-reverse md:gap-5 md:bg-surface-b md:rounded-lg md:p-5 md:shadow-lg">
        <div className="flex flex-col w-full gap-2 items-start md:items-center md:text-center">
          <h3 className="leading-snug font-semibold">{product.title}</h3>
          <p className="text-sm text-foreground opacity-75">
            {product.description}
          </p>
          <p className="text-sm font-semibold md:text-lg text-primary">
            {formatCurrency(product.price)}
          </p>
        </div>

        {product.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-1/4 aspect-square object-cover rounded shadow-lg md:w-full max-h-80"
          />
        )}
      </div>
    </Link>
  )
}
