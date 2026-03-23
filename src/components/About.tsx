import { useReveal } from "@/hooks/useReveal"

const stats = [
  { number: "∞", label: "Cups of Coffee" },
  { number: "1", label: "3D Printer (Ender 3 Pro)" },
  { number: "1", label: "Smart Home (mostly works)" },
  { number: "0", label: "Bugs in Production*" },
]

export default function About() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: textRef, visible: textVisible } = useReveal()
  const { ref: statsRef, visible: statsVisible } = useReveal()

  return (
    <section id="about" className="relative z-[2] py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Section label — left aligned, editorial */}
        <div ref={headerRef} className={`mb-16 reveal ${headerVisible ? "visible" : ""}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.72rem] text-[#7c3aed] uppercase tracking-[4px]">
              01 / About
            </span>
            <span className="flex-1 h-[1px] bg-[#1e1e2e]" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f8fafc] leading-[1.1]">
            The person behind
            <br />
            <span className="text-[#94a3b8] font-normal">the ECU.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Text column */}
          <div ref={textRef} className={`reveal ${textVisible ? "visible" : ""}`}>
            <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8] mb-5">
              <strong className="text-[#f8fafc]">Hello there.</strong> I'm Akshay — an embedded
              engineer in the automotive industry by profession, and a tinkerer of{" "}
              <em>everything else</em> by passion. I write firmware that makes cars smarter by day,
              and hack together smart home automations by night. My house runs on Home Assistant,
              my Ender 3 Pro runs when it feels like it, and my morning coffee... okay, I still
              make that manually. <em>For now.</em>
            </p>
            <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8] mb-5">
              I like to describe myself as a{" "}
              <strong className="text-[#f8fafc]">"Jack of all trades, master of few"</strong> —
              I don't know JavaScript, Java, or web hosting inside out, but when I need it for a
              cool project, I'll get Claude or GPT to explain it at 2 AM, learn just enough to be
              dangerous, and ship it. That's the engineer way.
            </p>
            <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8]">
              When I'm not soldering or coding, you'll find me 3D printing things nobody asked for,
              painting & sketching, doing random DIY projects, or out in nature with my camera —
              which, since marriage, has mostly transitioned from "nature photography" to "wife
              photography." No complaints though.
            </p>

            <p className="text-right text-[0.7rem] text-[#94a3b8]/40 mt-6">
              *Results may vary. In embedded, we call them "unexpected hardware behaviour."
            </p>
          </div>

          {/* Stats column */}
          <div ref={statsRef} className={`grid grid-cols-2 gap-3 reveal ${statsVisible ? "visible" : ""}`}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#7c3aed]/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] group"
              >
                <div className="text-[2.2rem] font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                  {s.number}
                </div>
                <div className="text-[0.75rem] text-[#94a3b8] leading-[1.4]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
