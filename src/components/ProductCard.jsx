import { Star } from "lucide-react"
import { useCart } from "../context/CartContext.jsx"
import { formatINR, discountPct } from "../data/products.js"

function Rating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={`h-4 w-4 ${
              n <= Math.round(rating)
                ? "fill-amz-orange text-amz-orange"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-amz-link">{reviews.toLocaleString("en-IN")}</span>
    </div>
  )
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const off = discountPct(product.price, product.mrp)

  return (
    <article className="flex h-full flex-col rounded-md border border-transparent bg-white p-3 transition-shadow hover:shadow-lg">
      <div className="relative mb-3 flex h-44 items-center justify-center sm:h-48">
        {product.badge && (
          <span className="absolute left-0 top-0 rounded-sm bg-amz-price px-2 py-0.5 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="mb-1 line-clamp-2 text-sm text-[#0f1111] hover:text-amz-link">
        {product.title}
      </h3>

      <Rating rating={product.rating} reviews={product.reviews} />

      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-lg font-medium text-[#0f1111]">
          <span className="align-top text-xs">₹</span>
          {formatINR(product.price)}
        </span>
        {off > 0 && (
          <span className="text-xs text-gray-500 line-through">
            ₹{formatINR(product.mrp)}
          </span>
        )}
      </div>
      {off > 0 && (
        <span className="text-xs text-amz-price">Save {off}% off</span>
      )}

      {product.prime && (
        <p className="mt-1 text-xs text-gray-600">
          <span className="font-bold text-amz-link">prime</span> FREE Delivery
        </p>
      )}

      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full rounded-full bg-amz-yellow py-1.5 text-sm font-medium text-amz-dark transition-colors hover:bg-amz-orange"
      >
        Add to Cart
      </button>
    </article>
  )
}
