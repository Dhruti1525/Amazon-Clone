import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "../context/CartContext.jsx"
import { formatINR, discountPct } from "../data/products.js"

export default function DealsRow({ title, products }) {
  const scroller = useRef(null)

  const scroll = (dir) => {
    if (!scroller.current) return
    scroller.current.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  const { addToCart } = useCart()

  return (
    <section className="mx-auto w-full max-w-[1500px] px-2 py-4 sm:px-4">
      <div className="relative rounded-md bg-white p-4">
        <h2 className="mb-3 text-xl font-bold text-[#0f1111] sm:text-2xl">{title}</h2>

        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 z-10 hidden h-16 -translate-y-1/2 items-center rounded border border-gray-300 bg-white px-1 shadow hover:bg-gray-50 sm:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scroller}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
        >
          {products.map((p) => {
            const off = discountPct(p.price, p.mrp)
            return (
              <div key={p.id} className="flex w-40 shrink-0 flex-col sm:w-48">
                <div className="flex h-40 items-center justify-center sm:h-44">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {off > 0 && (
                  <span className="mt-1 w-fit rounded bg-amz-price px-2 py-0.5 text-xs font-bold text-white">
                    {off}% off
                  </span>
                )}
                <p className="mt-1 line-clamp-2 text-sm text-[#0f1111]">{p.title}</p>
                <span className="text-sm font-bold text-[#0f1111]">₹{formatINR(p.price)}</span>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-1 rounded-full bg-amz-yellow py-1 text-xs font-medium text-amz-dark hover:bg-amz-orange"
                >
                  Add to Cart
                </button>
              </div>
            )
          })}
        </div>

        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 z-10 hidden h-16 -translate-y-1/2 items-center rounded border border-gray-300 bg-white px-1 shadow hover:bg-gray-50 sm:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
