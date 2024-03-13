import { findProductById } from '@/services/products.service'
import { notFound } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'
import { PropsWithParams } from '@/utils/types'
import ProductDetails from '@/components/product-details'

type Params = { productId: string }

export async function generateMetadata({
  params,
}: PropsWithParams<Params>): Promise<Metadata> {
  const product = await findProductById(params.productId)
  return { title: product?.title }
}

export default async function ProductPage({ params }: PropsWithParams<Params>) {
  const product = await findProductById(params.productId)

  if (!product) return notFound()

  return <ProductDetails product={product} />
}
