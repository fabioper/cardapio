import { Product } from '@/services/products.service'
import ProductCard from '@/components/product-card'
import React from 'react'

export default function ProductsList(props: { products: Product[] }) {
  return (
    <section
      className={`
        divide-surface-b
        divide-y md:divide-none
        flex flex-col
        md:grid md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:gap-4
      `}
    >
      {props.products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
