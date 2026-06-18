import { useState } from "react"
import { Search, MapPin, ShoppingCart, Menu, ChevronDown } from "lucide-react"
import { useCart } from "../context/CartContext.jsx"
import { categories } from "../data/products.js"

export default function Header({ onSearch, onCartClick, onMenuClick }) {
  const { totalItems } = useCart()
  const [query, setQuery] = useState("")
  const [dept, setDept] = useState("All")

  const submit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top bar */}
      <div className="flex items-center gap-1 bg-amz-dark px-2 py-2 text-white sm:gap-3 sm:px-4">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-end rounded-sm border border-transparent px-1 py-1 hover:border-white"
        >
          <span className="text-2xl font-bold leading-none tracking-tight">amazon</span>
          <span className="ml-0.5 text-sm font-semibold text-amz-yellow">.in</span>
        </a>

        {/* Deliver to */}
        <button className="hidden shrink-0 items-center gap-1 rounded-sm border border-transparent px-1 py-1 text-left hover:border-white lg:flex">
          <MapPin className="h-4 w-4" />
          <span className="leading-tight">
            <span className="block text-xs text-gray-300">Delivering to Mumbai 400001</span>
            <span className="block text-sm font-bold">Update location</span>
          </span>
        </button>

        {/* Search */}
        <form
          onSubmit={submit}
          className="flex h-10 flex-1 overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-amz-orange"
        >
          <div className="relative hidden sm:block">
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="h-full cursor-pointer appearance-none rounded-l-md bg-gray-100 px-2 pr-7 text-xs text-gray-700 hover:bg-gray-200"
              aria-label="Search category"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-600" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Amazon.in"
            aria-label="Search Amazon.in"
            className="min-w-0 flex-1 px-3 text-sm text-black outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex items-center justify-center bg-amz-yellow px-3 text-amz-dark hover:bg-amz-orange"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>

        {/* Account */}
        <button className="hidden shrink-0 rounded-sm border border-transparent px-1 py-1 text-left text-xs hover:border-white md:block">
          <span className="block">Hello, sign in</span>
          <span className="block text-sm font-bold">Account &amp; Lists</span>
        </button>

        {/* Orders */}
        <button className="hidden shrink-0 rounded-sm border border-transparent px-1 py-1 text-left text-xs hover:border-white lg:block">
          <span className="block">Returns</span>
          <span className="block text-sm font-bold">&amp; Orders</span>
        </button>

        {/* Cart */}
        <button
          onClick={onCartClick}
          className="relative flex shrink-0 items-end gap-1 rounded-sm border border-transparent px-1 py-1 hover:border-white"
          aria-label={`Cart with ${totalItems} items`}
        >
          <span className="relative">
            <ShoppingCart className="h-7 w-7" />
            <span className="absolute -top-1 left-3 min-w-4 rounded-full bg-amz-orange px-1 text-center text-xs font-bold text-amz-dark">
              {totalItems}
            </span>
          </span>
          <span className="hidden text-sm font-bold md:block">Cart</span>
        </button>
      </div>

      {/* Sub nav */}
      <div className="flex items-center gap-3 overflow-x-auto bg-amz-blue px-2 py-1.5 text-sm text-white no-scrollbar sm:px-4">
        <button
          onClick={onMenuClick}
          className="flex shrink-0 items-center gap-1 rounded-sm border border-transparent px-1 py-0.5 font-bold hover:border-white"
        >
          <Menu className="h-5 w-5" />
          All
        </button>
        {[
          "Fresh",
          "MX Player",
          "Sell",
          "Best Sellers",
          "Today's Deals",
          "Mobiles",
          "Electronics",
          "Prime",
          "Fashion",
          "Customer Service",
          "Home & Kitchen",
        ].map((item) => (
          <button
            key={item}
            className="shrink-0 whitespace-nowrap rounded-sm border border-transparent px-1 py-0.5 hover:border-white"
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  )
}
