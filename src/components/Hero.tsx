import { SparklesCore } from "@/components/ui/sparkles"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-end pb-24 px-8 md:px-16 overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Bottom fade */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(10,10,15,0.20) 0%,
            rgba(10,10,15,0.05) 30%,
            rgba(10,10,15,0.40) 65%,
            rgba(10,10,15,0.92) 100%
          )`,
        }}
      />
      {/* Left-side darkening for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,15,0.65) 0%, rgba(10,10,15,0.20) 45%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1100px] w-full mx-auto">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <span className="w-8 h-[1px] bg-[#7c3aed]" />
          <span className="font-mono text-[0.75rem] text-[#7c3aed] uppercase tracking-[4px]">
            Embedded Engineer · Automotive · Tinkerer
          </span>
        </div>

        {/* Heading + sparkles */}
        <div
          className="mb-5"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.0] tracking-tight">
            <span className="text-[#f8fafc]">Akshay</span>
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(248,250,252,0.4)" }}
            >
              Dhenge
            </span>
          </h1>

          {/* Sparkles line beneath the name */}
          <div className="w-full max-w-[500px] h-16 relative mt-1">
            {/* Accent lines */}
            <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent h-px w-3/4" />
            <div className="absolute inset-x-24 top-0 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent h-[4px] w-1/3 blur-sm" />
            <div className="absolute inset-x-24 top-0 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent h-px w-1/3" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#a78bfa"
              speed={1.5}
            />

            {/* Fade edges so sparkles don't spill hard */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(400px_60px_at_top,transparent_30%,white)]" />
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-[1.1rem] md:text-[1.25rem] text-[#94a3b8] max-w-[520px] leading-[1.6] mb-10"
          style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}
        >
          Firmware by day.{" "}
          <span className="text-[#e2e8f0]">Everything else by night.</span>
          <br className="hidden sm:block" />
          Jack of all trades — master of{" "}
          <span className="text-[#7c3aed] font-medium">some</span>.
        </p>

        {/* Terminal snippet — hidden on very small screens */}
        <div
          className="hidden sm:block backdrop-blur-md bg-[rgba(10,10,15,0.65)] border border-white/10 rounded-xl px-5 py-4 font-mono text-[0.8rem] mb-10 max-w-[480px]"
          style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}
        >
          <span className="text-[#10b981]">~$</span>
          <span className="text-[#e2e8f0]"> whoami</span>
          <br />
          <span className="text-[#06b6d4] ml-4">C · C++ · Python · AUTOSAR · CAN</span>
          <br />
          <span className="text-[#94a3b8] ml-4"># and whatever Claude teaches me at 2 AM</span>
          <br />
          <span className="text-[#10b981]">~$</span>
          <span
            className="inline-block w-[7px] h-[14px] bg-[#7c3aed] ml-1 align-bottom"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </div>

        {/* CTAs */}
        <div
          className="flex gap-3 flex-wrap items-center"
          style={{ animation: "fadeInUp 0.7s ease-out 0.4s both" }}
        >
          <button
            className="group relative px-6 py-3 bg-[#7c3aed] text-white font-semibold text-[0.9rem] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] active:scale-95"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-[1] flex items-center gap-2">
              View My Work <span>↓</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            className="px-6 py-3 bg-white/5 backdrop-blur-md text-[#e2e8f0] font-semibold text-[0.9rem] rounded-xl border border-white/15 hover:border-[#7c3aed]/60 hover:bg-white/10 transition-all duration-300 active:scale-95"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-12 flex items-center gap-2 text-white/30 text-[0.7rem] font-mono uppercase tracking-[3px]"
          style={{ animation: "fadeInUp 0.7s ease-out 0.6s both" }}
        >
          <span
            className="w-[1px] h-8 bg-white/20"
            style={{ animation: "scrollLine 2s ease-in-out infinite" }}
          />
          Scroll
        </div>
      </div>
    </section>
  )
}
