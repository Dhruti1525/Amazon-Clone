import { createContext, useContext, useMemo, useReducer } from "react"

const CartContext = createContext(null)

const initialState = {
  items: [], // { ...product, qty }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] }
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) }
    case "SET_QTY": {
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i,
        ),
      }
    }
    case "CLEAR":
      return initialState
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const value = useMemo(() => {
    const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
    return {
      items: state.items,
      totalItems,
      subtotal,
      addToCart: (product) => dispatch({ type: "ADD", product }),
      removeFromCart: (id) => dispatch({ type: "REMOVE", id }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }
  }, [state.items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
