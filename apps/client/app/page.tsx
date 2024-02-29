import ProductsListing from '@/app/products-listing'

export default function Home() {
  return (
    <main className="my-5">
      <div className="container">
        <h2 className="text-3xl font-bold mb-5">Produtos</h2>
        <ProductsListing />
      </div>
    </main>
  )
}
