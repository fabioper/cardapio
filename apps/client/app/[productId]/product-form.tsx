'use client'

import Textarea from '@/components/textarea/textarea'
import Counter from '@/components/counter'
import Button from '@/components/button'
import { TbShoppingBagPlus } from 'react-icons/tb'
import React, { useState } from 'react'
import ActionBar from '@/components/action-bar'
import { useMediaQuery } from 'usehooks-ts'

export default function ProductForm() {
  const [quantity, setQuantity] = useState<number | undefined>(1)
  const isSmallScreen = useMediaQuery('(max-width: 500px)')

  const buttons = (
    <div className="flex items-center justify-between gap-2 sm:gap-5 lg:justify-end">
      <Counter
        value={quantity}
        onChange={value => setQuantity(value)}
        min={1}
      />
      <Button
        label="Adicionar"
        className="grow lg:grow-0"
        icon={TbShoppingBagPlus}
      />
    </div>
  )

  return (
    <React.Fragment>
      <div className="flex flex-col gap-1">
        <label htmlFor="complement" className="text-sm">
          Observação:
        </label>
        <Textarea id="complement" />
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
