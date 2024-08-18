import ProductList from '@/components/organisms/product-list'
import { data } from '@/data/sample'

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={data.products} />
    </div>
  )
}
