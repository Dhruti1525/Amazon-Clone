import ProductCard from "./ProductCard.jsx"

export default function ProductGrid({ title, products }) {
  return (
    <section className="mx-auto w-full max-w-[1500px] px-2 py-4 sm:px-4">
      <div className="rounded-md bg-white p-4">
        <h2 className="mb-4 text-xl font-bold text-[#0f1111] sm:text-2xl">{title}</h2>
        {products.length === 0 ? (
          <p className="py-10 text-center text-gray-600">
            No products found. Try a different search.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
