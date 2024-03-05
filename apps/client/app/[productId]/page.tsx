import { findProductById } from '@/services/products.service'
import { notFound } from 'next/navigation'
import Button from '@/components/button'
import { FaAngleLeft } from 'react-icons/fa'
import { formatCurrency } from '@/utils/formatter'
import Link from 'next/link'
import { TbShoppingBagPlus } from 'react-icons/tb'

export default async function ProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const product = await findProductById(Number(params.productId))

  if (!product) return notFound()

  return (
    <main className="flex flex-col gap-3 items-start">
      <div className="container">
        <Link href="/">
          <Button.Outlined
            icon={FaAngleLeft}
            size="small"
            variant="info"
            label="Voltar"
          />
        </Link>
      </div>

      {product.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={product.image.url} alt={product.image.alt} />
      )}

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 container">
          <h1 className="text-2xl">{product.title}</h1>
          <p className="text-[#5D5D5D]">{product.description}</p>
          <span className="text-xl">{formatCurrency(product.price)}</span>
        </div>

        <form className="w-full">
          <div className="container">
            <div className="flex flex-col gap">
              <label htmlFor="complement">Observação:</label>
              <textarea
                id="complement"
                className="bg-white border border-surface rounded p-2 focus:outline-2 focus:outline-primary"
              />
            </div>
          </div>
        </form>

        <div className="container flex gap-5">
          <Button
            label="Adicionar ao pedido"
            className="w-full"
            icon={TbShoppingBagPlus}
          />
        </div>
      </section>
    </main>
  )
}
