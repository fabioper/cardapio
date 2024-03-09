'use client'

import Textarea from '@/components/textarea/textarea'
import Counter from '@/components/counter'
import Button from '@/components/button'
import { TbShoppingBagPlus } from 'react-icons/tb'
import React, { useState } from 'react'

export default function ProductForm() {
  const [quantity, setQuantity] = useState<number | undefined>(1)

  return (
    <React.Fragment>
      <div className="flex flex-col gap-1">
        <label htmlFor="complement" className="text-sm">
          Observação:
        </label>
        <Textarea id="complement" />
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-5">
        <Counter value={quantity} onChange={value => setQuantity(value)} />
        <Button
          label="Adicionar ao pedido"
          className="w-full"
          icon={TbShoppingBagPlus}
        />
      </div>
    </React.Fragment>
  )
}
