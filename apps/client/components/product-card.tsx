import { Product } from '@/services/products.service'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/${product.id}`}
      className="border-b border-border last:border-b-0 lg:border-none"
    >
      <div className="flex items-start gap-2 py-3 lg:flex-row-reverse lg:gap-5">
        <div className="flex flex-col gap-2 items-start w-full">
          <h3 className="leading-snug text-base font-bold">{product.title}</h3>
          <p className="text-sm text-[#999]">{product.description}</p>
          <p>{formatCurrency(product.price)}</p>
        </div>

        {product.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-1/4 aspect-square object-cover rounded shadow-lg"
          />
        )}
      </div>
    </Link>
  )
}
