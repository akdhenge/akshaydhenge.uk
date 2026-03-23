import { useState, useEffect } from "react"

const links = ["About", "Skills", "Experience", "Projects", "Contact"]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-5 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#1e1e2e] py-4"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <div className="font-mono font-bold text-[1.05rem]">
        <span className="text-[#7c3aed]">akshay</span>
        <span className="text-white/40">.</span>
        <span className="text-white/60">dhenge</span>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-white/50 text-[0.85rem] font-medium no-underline transition-colors duration-300 relative group hover:text-white"
            >
              {l}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#7c3aed] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-[0.85rem] font-semibold text-white bg-[#7c3aed]/80 hover:bg-[#7c3aed] border border-[#7c3aed]/50 rounded-lg transition-all duration-300 no-underline hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Burger */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-none border-none p-1"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-white/70 transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white/70 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white/70 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 right-0 bg-[#0a0a0f]/97 backdrop-blur-xl border-b border-[#1e1e2e] flex flex-col gap-4 px-8 py-6 list-none md:hidden">
          {[...links, "Hire Me"].map((l) => (
            <li key={l}>
              <a
                href={`#${l === "Hire Me" ? "contact" : l.toLowerCase()}`}
                className="text-white/60 text-sm font-medium no-underline hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
