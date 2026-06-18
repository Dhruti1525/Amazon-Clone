import { X, ChevronRight, UserCircle } from "lucide-react"
import { categories } from "../data/products.js"

const sections = [
  {
    heading: "Trending",
    items: ["Bestsellers", "New Releases", "Today's Deals"],
  },
  {
    heading: "Help & Settings",
    items: ["Your Account", "Customer Service", "Sign in"],
  },
]

export default function SideMenu({ open, onClose, onSelectCategory }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      />
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-label="Browse menu"
        aria-modal="true"
      >
        <div className="flex items-center gap-2 bg-amz-blue px-4 py-3 text-white">
          <UserCircle className="h-6 w-6" />
          <span className="font-bold">Hello, sign in</span>
          <button onClick={onClose} aria-label="Close menu" className="ml-auto">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-b py-2">
            <p className="px-4 py-2 text-lg font-bold">Shop by Category</p>
            {categories
              .filter((c) => c !== "All")
              .map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    onSelectCategory(c)
                    onClose()
                  }}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-100"
                >
                  {c}
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              ))}
          </div>

          {sections.map((s) => (
            <div key={s.heading} className="border-b py-2">
              <p className="px-4 py-2 text-lg font-bold">{s.heading}</p>
              {s.items.map((item) => (
                <button
                  key={item}
                  className="block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
