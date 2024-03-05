import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { AiOutlineSearch } from 'react-icons/ai'
import { LiaUserCircle } from 'react-icons/lia'
import { IoMenuOutline } from 'react-icons/io5'

function Header() {
  return (
    <header className="py-5 bg-white border-b border-border">
      <div className="container flex place-content-between">
        <Link href="/" className="font-bold">
          Cardápio
        </Link>

        <div className="flex place-content-center gap-5 text-2xl">
          <AiOutlineSearch />
          <LiaUserCircle />
          <HiOutlineShoppingBag />
          <IoMenuOutline />
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
