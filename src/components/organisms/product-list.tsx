import { Product } from '@/types'
import ProductCard from '../molecules/product-card'

type Props = {
  data: Product[]
}

const ProductList = ({ data }: Props) => {
  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product: any) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  )
}
export default ProductList
