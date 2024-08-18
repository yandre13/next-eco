import ProductList from '@/components/organisms/product-list'
import { getLatestProducts } from '@/lib/actions/products'
import { notFound } from 'next/navigation'

export default async function Home() {
  const latestProducts = await getLatestProducts()

  if (!latestProducts) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={latestProducts} />
    </div>
  )
}
