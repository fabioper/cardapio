'use client'

import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import Button from '@/components/button'
import { PiBowlFoodDuotone } from 'react-icons/pi'

function Header() {
  return (
    <header className="py-3 border-b border-border">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold flex items-end gap-1">
          <PiBowlFoodDuotone className="text-3xl" />
        </Link>

        <div className="flex items-center gap-2 text-2xl">
          <Button.Text icon={HiOutlineShoppingBag} variant="secondary" />
        </div>
      </div>
    </header>
  )
}

export default Header
