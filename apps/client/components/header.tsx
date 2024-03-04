import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="py-5 bg-white border-b border-border">
      <div className="container flex place-content-center">
        <Link href="/" className="text-lg font-medium">
          Cardápio
        </Link>
      </div>
    </header>
  )
}

export default React.memo(Header)
