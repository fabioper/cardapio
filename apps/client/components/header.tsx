import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-5 border-b border-b-slate-50 mb-5">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="uppercase font-bold text-base inline tracking-wider">
            Cardápio
          </h1>
        </Link>
      </div>
    </header>
  )
}
