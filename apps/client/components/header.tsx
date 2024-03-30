import React from 'react'
import Link from 'next/link'
import { PiHamburgerDuotone } from 'react-icons/pi'
import CartButton from '@/components/cart-button'

function Header() {
  return (
    <header className="py-2 border-b border-surface-b">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <PiHamburgerDuotone className="text-2xl text-primary" />
          <span className="text-base font-bold">Cardápio</span>
        </Link>

        <div className="flex items-center gap-3 text-2xl">
          <CartButton />
        </div>
      </div>
    </header>
  )
}

export default Header
