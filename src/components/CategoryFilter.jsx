import { categories } from "../data/products.js"

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-2 sm:px-4">
      <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === c
                ? "border-amz-dark bg-amz-dark text-white"
                : "border-gray-300 bg-white text-[#0f1111] hover:bg-gray-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
