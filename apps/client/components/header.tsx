import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMenuOutline } from 'react-icons/io5'
import Button from '@/components/button'
import { MdOutlineFastfood } from 'react-icons/md'

function Header() {
  return (
    <header className="py-3 bg-white border-b border-border">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-sm flex items-end gap-1">
          <MdOutlineFastfood className="text-xl" /> Cardápio
        </Link>

        <div className="flex items-center gap-2 text-2xl">
          <Button icon={<AiOutlineSearch />} text variant="secondary" />
          <Button icon={<HiOutlineShoppingBag />} text variant="secondary" />
          <Button icon={<IoMenuOutline />} text variant="secondary" />
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
