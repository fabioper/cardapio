import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="py-4 bg-white border-b border-b-slate-200 shadow shadow-stone-50">
      <div className="container flex place-content-center">
        <Link href="/">Cardápio</Link>
      </div>
    </header>
  )
}

export default React.memo(Header)
