const cards = [
  {
    title: "Revamp your home in style",
    items: [
      { label: "Cushion covers, bedsheets & more", img: "/products/cookware.png" },
      { label: "Figurines, vases & more", img: "/products/waterbottle.png" },
      { label: "Home storage", img: "/products/backpack.png" },
      { label: "Lighting solutions", img: "/products/mixer.png" },
    ],
    link: "Explore all",
  },
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { label: "Air conditioners", img: "/products/airfryer.png" },
      { label: "Refrigerators", img: "/products/samsung-tv.png" },
      { label: "Microwaves", img: "/products/mixer.png" },
      { label: "Washing machines", img: "/products/airfryer.png" },
    ],
    link: "See more",
  },
  {
    title: "Starting ₹149 | Headphones",
    items: [
      { label: "boAt", img: "/products/boat-headphones.png" },
      { label: "Noise", img: "/products/smartwatch.png" },
      { label: "Echo Dot", img: "/products/echo-dot.png" },
      { label: "Power banks", img: "/products/powerbank.png" },
    ],
    link: "See all offers",
  },
  {
    title: "Automotive essentials | Up to 60% off",
    items: [
      { label: "Cleaning accessories", img: "/products/perfume.png" },
      { label: "Tyre & rim care", img: "/products/yogamat.png" },
      { label: "Helmets", img: "/products/shoes.png" },
      { label: "Vacuum cleaner", img: "/products/laptop.png" },
    ],
    link: "See more",
  },
]

export default function CategoryCards() {
  return (
    <section className="mx-auto -mt-10 grid w-full max-w-[1500px] grid-cols-1 gap-4 px-2 sm:-mt-24 sm:grid-cols-2 sm:px-4 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="flex flex-col bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-[#0f1111] text-pretty">{card.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {card.items.map((item) => (
              <button key={item.label} className="group text-left">
                <div className="mb-1 flex h-24 items-center justify-center bg-gray-100">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.label}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain p-1"
                  />
                </div>
                <span className="line-clamp-2 text-xs text-[#0f1111] group-hover:text-amz-link">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          <a href="#products" className="mt-3 text-sm text-amz-link hover:text-amz-price hover:underline">
            {card.link}
          </a>
        </div>
      ))}
    </section>
  )
}
