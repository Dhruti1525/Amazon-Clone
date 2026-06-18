import { X, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "../context/CartContext.jsx"
import { formatINR } from "../data/products.js"

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, totalItems, setQty, removeFromCart, clearCart } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-bold">
            Your Cart ({totalItems})
          </h2>
          <button onClick={onClose} aria-label="Close cart" className="rounded p-1 hover:bg-gray-100">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-600">
              <p className="text-lg font-medium">Your Amazon Cart is empty</p>
              <p className="mt-1 text-sm">Add items to get started.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b py-3">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-gray-50">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="line-clamp-2 text-sm">{item.title}</p>
                  <span className="text-base font-bold text-[#0f1111]">
                    ₹{formatINR(item.price)}
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center rounded-full border">
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="px-2 py-1 hover:bg-gray-100"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-6 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="px-2 py-1 hover:bg-gray-100"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-xs text-amz-link hover:text-amz-price"
                    >
                      <Trash2 className="h-3 w-3" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-4 py-3">
            <div className="mb-3 flex items-center justify-between text-lg">
              <span>Subtotal:</span>
              <span className="font-bold text-[#0f1111]">₹{formatINR(subtotal)}</span>
            </div>
            <button className="w-full rounded-full bg-amz-yellow py-2 text-sm font-medium text-amz-dark hover:bg-amz-orange">
              Proceed to Buy
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full rounded-full border border-gray-300 py-2 text-sm hover:bg-gray-100"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
