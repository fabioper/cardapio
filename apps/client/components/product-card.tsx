import { Product } from '@/services/products.service'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image?.url}
        alt={product.image?.alt}
        className="w-full block aspect-square object-cover rounded"
      />

      <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex flex-col gap">
          <h3 className="leading-snug font-medium">{product.title}</h3>
        </div>
        <p className="text-[#666]">{formatCurrency(product.price)}</p>
      </div>
    </div>
  )
}
