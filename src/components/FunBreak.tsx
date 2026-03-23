import { useReveal } from "@/hooks/useReveal"

export default function FunBreak() {
  const { ref, visible } = useReveal()

  return (
    <section className="relative z-[2] py-20 px-8 bg-[#12121a] border-y border-[#1e1e2e]">
      <div className="max-w-[700px] mx-auto text-center">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="text-[1.3rem] italic text-[#94a3b8] mb-2">
            "Any sufficiently advanced home automation is{" "}
            <strong className="text-[#f8fafc]">indistinguishable from a haunted house.</strong>"
          </p>
          <p className="font-mono text-[0.8rem] text-[#7c3aed]">
            — Akshay's wife, definitely, at 3 AM when the Ender 3 started a print
          </p>
          <p className="font-mono text-[0.7rem] text-[#94a3b8] opacity-50 mt-6">
            Psst... try the Konami code ↑↑↓↓←→←→BA
          </p>
        </div>
      </div>
    </section>
  )
}
