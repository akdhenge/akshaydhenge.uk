import { useReveal } from "@/hooks/useReveal"

const skills = [
  { icon: "⚙️", label: "C / Embedded C" },
  { icon: "⚗️", label: "C++" },
  { icon: "🐍", label: "Python" },
  { icon: "🚗", label: "AUTOSAR" },
  { icon: "🔌", label: "CAN Bus" },
  { icon: "🔄", label: "SPI / I2C" },
  { icon: "🔧", label: "Test Automation" },
  { icon: "🏠", label: "Home Assistant" },
  { icon: "🤖", label: "GPT / Claude (co-pilot)" },
  { icon: "🖨️", label: "3D Printing" },
  { icon: "🎨", label: "Painting / Sketching" },
  { icon: "📷", label: "Photography" },
]

export default function Skills() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: gridRef, visible: gridVisible } = useReveal()

  return (
    <section id="skills" className="relative z-[2] py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className={`mb-16 reveal ${headerVisible ? "visible" : ""}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.72rem] text-[#7c3aed] uppercase tracking-[4px]">
              02 / Skills
            </span>
            <span className="flex-1 h-[1px] bg-[#1e1e2e]" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f8fafc] leading-[1.1]">
            Things I break
            <br />
            <span className="text-[#94a3b8] font-normal">& then fix.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 reveal ${gridVisible ? "visible" : ""}`}
        >
          {skills.map((s) => (
            <div
              key={s.label}
              className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-5 py-4 flex items-center gap-3 font-medium text-[0.9rem] transition-all duration-300 hover:border-[#7c3aed] hover:-translate-y-[2px] hover:bg-[#1a1a2e]"
            >
              <span className="text-[1.3rem] w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(124,58,237,0.1)]">
                {s.icon}
              </span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
