import { ChevronUp } from "lucide-react"

const columns = [
  {
    title: "Get to Know Us",
    links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"],
  },
  {
    title: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Amazon Global Selling",
      "Advertise Your Products",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help",
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-6 font-sans text-white">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex w-full items-center justify-center gap-1 bg-amz-light py-3 text-sm hover:bg-[#485769]"
      >
        <ChevronUp className="h-4 w-4" />
        Back to top
      </button>

      {/* Links */}
      <div className="bg-amz-blue px-4 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 text-base font-bold">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-300 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Logo divider */}
      <div className="flex items-center justify-center gap-3 border-t border-gray-700 bg-amz-blue py-6">
        <span className="text-2xl font-bold">
          amazon<span className="text-amz-yellow">.in</span>
        </span>
      </div>

      {/* Bottom bar */}
      <div className="bg-amz-dark px-4 py-8 text-center">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-300">
          <a href="#" className="hover:underline">Conditions of Use &amp; Sale</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Interest-Based Ads</a>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          © 1996-{new Date().getFullYear()}, Amazon.com Clone — Built with React, Vite &amp; Tailwind CSS.
          This is a demo project for educational purposes and is not affiliated with Amazon.
        </p>
      </div>
    </footer>
  )
}
