import { useCallbackRef } from "../hooks/useCallbackRef.js"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png",
  "/banners/banner4.png",
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  const next = useCallbackRef(() => setIndex((i) => (i + 1) % slides.length))
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade-to-page-bg gradient like amazon.in */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-amz-bg to-transparent sm:h-40" />

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <img
            key={src}
            src={src || "/placeholder.svg"}
            alt={`Featured offers banner ${i + 1}`}
            className="aspect-[3/1] w-full shrink-0 object-cover"
          />
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-0 top-0 z-20 flex h-full items-center px-1 text-white/80 hover:bg-black/10 hover:text-white sm:px-2"
      >
        <ChevronLeft className="h-8 w-8 sm:h-12 sm:w-12" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-0 top-0 z-20 flex h-full items-center px-1 text-white/80 hover:bg-black/10 hover:text-white sm:px-2"
      >
        <ChevronRight className="h-8 w-8 sm:h-12 sm:w-12" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-amz-dark" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
