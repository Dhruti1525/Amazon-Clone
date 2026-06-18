import { useMemo, useState } from "react"
import Header from "./components/Header.jsx"
import HeroCarousel from "./components/HeroCarousel.jsx"
import CategoryCards from "./components/CategoryCards.jsx"
import CategoryFilter from "./components/CategoryFilter.jsx"
import DealsRow from "./components/DealsRow.jsx"
import ProductGrid from "./components/ProductGrid.jsx"
import CartDrawer from "./components/CartDrawer.jsx"
import SideMenu from "./components/SideMenu.jsx"
import Footer from "./components/Footer.jsx"
import { products } from "./data/products.js"

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category
      const matchSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, category])

  const dealProducts = useMemo(
    () => products.filter((p) => p.mrp - p.price > 0).slice(0, 12),
    [],
  )

  const isFiltering = search.trim() !== "" || category !== "All"

  return (
    <div className="min-h-screen bg-amz-bg">
      <Header
        onSearch={setSearch}
        onCartClick={() => setCartOpen(true)}
        onMenuClick={() => setMenuOpen(true)}
      />

      <main>
        {!isFiltering && (
          <>
            <HeroCarousel />
            <CategoryCards />
            <DealsRow title="Today's Deals" products={dealProducts} />
          </>
        )}

        <div id="products" className="scroll-mt-28 pt-2">
          <CategoryFilter active={category} onChange={setCategory} />
          <ProductGrid
            title={
              search.trim() !== ""
                ? `Results for "${search}"`
                : category === "All"
                  ? "Products related to your search"
                  : category
            }
            products={filtered}
          />
        </div>
      </main>

      <Footer />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectCategory={setCategory}
      />
    </div>
  )
}
