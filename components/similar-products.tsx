import type { Product } from "@/lib/data"
import ProductCard from "@/components/product-card"

interface SimilarProductsProps {
  products: Product[]
}

export function SimilarProducts({ products }: SimilarProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  )
}
