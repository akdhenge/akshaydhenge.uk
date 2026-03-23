import { useReveal } from "@/hooks/useReveal"

const socials = [
  {
    name: "GitHub",
    handle: "@akdhenge",
    href: "https://github.com/akdhenge",
    icon: "🐙",
    bg: "bg-[rgba(255,255,255,0.1)]",
  },
  {
    name: "LinkedIn",
    handle: "Akshay Dhenge",
    href: "https://www.linkedin.com/in/akshay-dhenge-2473477b/",
    icon: "💼",
    bg: "bg-[rgba(10,102,194,0.2)]",
  },
  {
    name: "Instagram",
    handle: "@akshaydhenge",
    href: "https://www.instagram.com/akshaydhenge/",
    icon: "📷",
    bg: "bg-[rgba(225,48,108,0.2)]",
  },
  {
    name: "Email",
    handle: "akshay.dhenge@gmail.com",
    href: "mailto:akshay.dhenge@gmail.com",
    icon: "✉️",
    bg: "bg-[rgba(124,58,237,0.2)]",
  },
]

export default function Contact() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: gridRef, visible: gridVisible } = useReveal()

  return (
    <section id="contact" className="relative z-[2] py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className={`mb-16 reveal ${headerVisible ? "visible" : ""}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.72rem] text-[#7c3aed] uppercase tracking-[4px]">
              05 / Contact
            </span>
            <span className="flex-1 h-[1px] bg-[#1e1e2e]" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f8fafc] leading-[1.1]">
            Let's build
            <br />
            <span className="text-[#94a3b8] font-normal">something cool.</span>
          </h2>
          <p className="text-[#94a3b8] mt-4 max-w-[400px]">
            Or just say hi. I don't bite. My microcontrollers might though.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 max-w-[800px] mx-auto reveal ${gridVisible ? "visible" : ""}`}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#12121a] border border-[#1e1e2e] rounded-xl no-underline text-[#e2e8f0] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#7c3aed] hover:bg-[#1a1a2e]"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-[1.3rem] flex-shrink-0 ${s.bg}`}>
                {s.icon}
              </div>
              <div>
                <div className="font-semibold text-[0.95rem]">{s.name}</div>
                <div className="text-[0.8rem] text-[#94a3b8]">{s.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
