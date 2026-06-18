import { useCallback, useEffect, useRef } from "react"

// Keeps a stable function identity while always calling the latest callback.
export function useCallbackRef(callback) {
  const ref = useRef(callback)

  useEffect(() => {
    ref.current = callback
  })

  return useCallback((...args) => ref.current?.(...args), [])
}
