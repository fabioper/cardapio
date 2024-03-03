import { Product } from '@/services/products.service'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="container flex items-start gap-4 py-3">
      <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex flex-col gap">
          <h3 className="text-base text-black">{product.title}</h3>
          <p className="text-xs text-[#5D5D5D]">{product.description}</p>
        </div>
        <p className="text-sm">{formatCurrency(product.price)}</p>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image?.url}
        alt={product.image?.alt}
        className="w-1/4 rounded-md block aspect-square object-cover"
      />
    </div>
  )
}
