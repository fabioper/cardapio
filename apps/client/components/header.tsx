'use client'

import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi2'
import Button from '@/components/button'
import { CgMenuHotdog } from 'react-icons/cg'

function Header() {
  return (
    <header className="py-3 border-b border-surface-b">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold flex items-end gap-1">
          <CgMenuHotdog className="text-4xl" />
        </Link>

        <div className="flex items-center gap-2 text-2xl">
          <Button.Text icon={HiOutlineUserCircle} variant="secondary" />
          <Button.Text icon={HiOutlineShoppingBag} variant="secondary" />
        </div>
      </div>
    </header>
  )
}

export default Header
