import React from 'react'
import Link from 'next/link'
import { TbSearch, TbShoppingBag } from 'react-icons/tb'
import { HiMiniBars3 } from 'react-icons/hi2'
import { MdOutlineAccountCircle } from 'react-icons/md'

function Header() {
  return (
    <header className="py-5 bg-white border-b border-border">
      <div className="container flex place-content-between">
        <Link href="/" className="font-bold">
          Cardápio
        </Link>

        <div className="flex place-content-center gap-5 text-2xl">
          <TbSearch />
          <MdOutlineAccountCircle />
          <TbShoppingBag />
          <HiMiniBars3 />
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
