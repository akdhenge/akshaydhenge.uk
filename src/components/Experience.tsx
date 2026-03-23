import { useReveal } from "@/hooks/useReveal"

const timeline = [
  {
    date: "20XX — Present",
    title: "Embedded Software Engineer",
    company: "Automotive Company — UPDATE THIS",
    desc: "Writing firmware that goes into actual cars on actual roads. Wrangling AUTOSAR, debugging CAN traces, and convincing microcontrollers to cooperate. No segfaults in production. (That you can prove.)",
  },
  {
    date: "20XX — 20XX",
    title: "Previous Role — UPDATE THIS",
    company: "Previous Company — UPDATE THIS",
    desc: 'Learned that "it works on my bench" is not a deployment strategy. Discovered the joy of reading 800-page datasheets and the pain of off-by-one errors in register configurations.',
  },
  {
    date: "20XX — 20XX",
    title: "Your Degree — UPDATE THIS",
    company: "Your University — UPDATE THIS",
    desc: "Where it all began. Survived microprocessors class. Learned that blinking an LED is easy, but blinking it exactly at 1Hz with zero drift is an entire semester.",
  },
]

export default function Experience() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: timelineRef, visible: timelineVisible } = useReveal()
  const { ref: btnRef, visible: btnVisible } = useReveal()

  return (
    <section id="experience" className="relative z-[2] py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className={`mb-16 reveal ${headerVisible ? "visible" : ""}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.72rem] text-[#7c3aed] uppercase tracking-[4px]">
              03 / Experience
            </span>
            <span className="flex-1 h-[1px] bg-[#1e1e2e]" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f8fafc] leading-[1.1]">
            Where I've committed
            <br />
            <span className="text-[#94a3b8] font-normal">code & firmware.</span>
          </h2>
        </div>

        <div
          ref={timelineRef}
          className={`relative pl-8 reveal ${timelineVisible ? "visible" : ""}`}
          style={{
            borderLeft: "2px solid transparent",
            borderImage: "linear-gradient(to bottom, #7c3aed, #06b6d4, transparent) 1",
          }}
        >
          {timeline.map((item, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              {/* dot */}
              <span
                className="absolute top-[6px] w-3 h-3 rounded-full bg-[#7c3aed] border-[3px] border-[#0a0a0f]"
                style={{ left: "-calc(0.75rem + 1px)", transform: "translateX(-50%) translateX(-1px)" }}
              />
              <div className="font-mono text-[0.75rem] text-[#7c3aed] mb-1">{item.date}</div>
              <div className="text-[1.1rem] font-semibold text-[#f8fafc]">{item.title}</div>
              <div className="text-[0.9rem] text-[#06b6d4] mb-2">{item.company}</div>
              <div className="text-[#94a3b8] text-[0.9rem]">{item.desc}</div>
            </div>
          ))}
        </div>

        <div ref={btnRef} className={`text-center mt-8 reveal ${btnVisible ? "visible" : ""}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[#e2e8f0] border border-[#1e1e2e] font-semibold text-[0.95rem] no-underline transition-all duration-300 hover:border-[#7c3aed] hover:bg-[rgba(124,58,237,0.05)] hover:-translate-y-[2px]"
          >
            📄 Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}
