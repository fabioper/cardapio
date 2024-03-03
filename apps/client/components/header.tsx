import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="py-3 bg-white border-b border-[#F0F0F0]">
      <div className="container flex place-content-center">
        <Link href="/" className="text-lg">
          Cardápio
        </Link>
      </div>
    </header>
  )
}

export default React.memo(Header)
