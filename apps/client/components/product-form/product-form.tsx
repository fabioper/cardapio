'use client'

import Textarea from '@/components/textarea/textarea'
import Counter from '@/components/counter'
import Button from '@/components/button'
import { TbShoppingBagPlus } from 'react-icons/tb'
import React, { ChangeEvent, useCallback, useState } from 'react'
import ActionBar from '@/components/action-bar'
import { useMediaQuery } from 'usehooks-ts'
import { formatCurrency } from '@/utils/formatter'
import { Product } from '@/services/products.service'
import useCart from '@/stores/cart'
import { uniqueId } from 'lodash'
import { useRouter } from 'next/navigation'

interface ProductFormProps {
  product: Product
}

export default function ProductForm({ product }: ProductFormProps) {
  const { addItem } = useCart()
  const router = useRouter()
  const [quantity, setQuantity] = useState<number>(1)
  const [complement, setComplement] = useState<string>('')

  const isSmallScreen = useMediaQuery('(max-width: 500px)')

  const addItemToCart = useCallback(() => {
    addItem({
      id: uniqueId(),
      quantity,
      complement,
      product,
    })
    router.push('/pedido')
  }, [addItem, complement, product, quantity, router])

  const buttons = (
    <div className="flex items-center justify-between gap-2 sm:gap-5">
      <Counter
        value={quantity}
        onChange={value => setQuantity(value || 1)}
        min={1}
      />

      <Button
        label="Adicionar"
        className="grow lg:grow-0"
        icon={TbShoppingBagPlus}
        itemRight={'+ ' + formatCurrency(product.price * quantity)}
        onClick={addItemToCart}
      />
    </div>
  )

  return (
    <React.Fragment>
      <div className="flex flex-col gap-1">
        <label htmlFor="complement" className="text-sm">
          Observação:
        </label>
        <Textarea
          id="complement"
          placeholder="Ex: tirar a cebola, maionese à parte, etc."
          value={complement}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setComplement(event.target.value)
          }
        />
      </div>

      {isSmallScreen ? (
        <ActionBar>
          <div className="container">{buttons}</div>
        </ActionBar>
      ) : (
        buttons
      )}
    </React.Fragment>
  )
}
