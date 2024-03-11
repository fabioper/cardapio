'use client'

import Textarea from '@/components/textarea/textarea'
import Counter from '@/components/counter'
import Button from '@/components/button'
import { TbShoppingBagEdit, TbShoppingBagPlus } from 'react-icons/tb'
import React, { ChangeEvent, useCallback, useState } from 'react'
import ActionBar from '@/components/action-bar'
import { useMediaQuery } from 'usehooks-ts'
import { formatCurrency } from '@/utils/formatter'
import { Product } from '@/services/products.service'
import useCart, { Item } from '@/stores/cart'
import { useRouter } from 'next/navigation'
import { v4 as uuid } from 'uuid'

interface ProductFormProps {
  product: Product
  cartItem?: Omit<Item, 'product'>
}

export default function ProductForm({ product, cartItem }: ProductFormProps) {
  const { addItem, updateItem } = useCart()
  const router = useRouter()
  const isSmallScreen = useMediaQuery('(max-width: 500px)')

  const [quantity, setQuantity] = useState<number>(cartItem?.quantity ?? 1)
  const [complement, setComplement] = useState<string>(
    cartItem?.complement ?? '',
  )

  const addItemToCart = useCallback(() => {
    if (cartItem) {
      updateItem({
        ...cartItem,
        quantity,
        complement,
        product,
      })
    } else {
      addItem({
        id: uuid(),
        quantity,
        complement,
        product,
      })
    }
    router.push('/pedido')
  }, [addItem, cartItem, complement, product, quantity, router, updateItem])

  const buttons = (
    <div className="flex items-center justify-between gap-2 sm:gap-5">
      <Counter
        value={quantity}
        onChange={value => setQuantity(value || 1)}
        min={1}
      />

      {!cartItem ? (
        <Button
          label="Adicionar"
          className="grow lg:grow-0"
          icon={TbShoppingBagPlus}
          itemRight={'+ ' + formatCurrency(product.price * quantity)}
          onClick={addItemToCart}
        />
      ) : (
        <Button
          label="Atualizar"
          className="grow lg:grow-0"
          icon={TbShoppingBagEdit}
          itemRight={'+ ' + formatCurrency(product.price * quantity)}
          onClick={addItemToCart}
          variant="success"
        />
      )}
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
