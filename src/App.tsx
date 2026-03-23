import { useEffect, useRef, useState, useCallback } from "react"
import { Volume2, VolumeX } from "lucide-react"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import FunBreak from "@/components/FunBreak"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import LampSection from "@/components/LampSection"
import { useKonami } from "@/hooks/useKonami"

const STATUSES = [
  "All systems operational",
  "CAN bus: 0 errors | 0 warnings",
  "Home Assistant: 42 automations running",
  "Coffee levels: critical - refill needed",
  "Ender 3 Pro: bed level looks good... for now",
  "AUTOSAR: still reading the spec (page 4,287 of 12,000)",
  "Nature photography mode: OFF | Wife photography mode: ON",
  "Debugging: have you tried toggling the GPIO?",
  "Currently asking Claude how CSS works",
  "3D printer: 73% done, please don't fail now",
  "Embedded engineer writing HTML. What a time to be alive.",
  "Segfault count today: 0 (personal best)",
]

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const confettiRef = useRef<HTMLDivElement>(null)

  const [scrollY, setScrollY] = useState(0)
  const [scrollPct, setScrollPct] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [muted, setMuted] = useState(true)
  const [statusIdx, setStatusIdx] = useState(0)
  const [statusFade, setStatusFade] = useState(true)
  const [konami, setKonami] = useState(false)

  // Autoplay (needed for some browsers)
  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  // Cursor glow
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"
      }
    }
    document.addEventListener("mousemove", handler)
    return () => document.removeEventListener("mousemove", handler)
  }, [])

  // Scroll
  useEffect(() => {
    const handler = () => {
      const sy = window.scrollY
      const pct = (sy / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setScrollY(sy)
      setScrollPct(pct)
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Status bar rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusFade(false)
      setTimeout(() => {
        setStatusIdx((i) => (i + 1) % STATUSES.length)
        setStatusFade(true)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Konami
  const activateKonami = useCallback(() => {
    setKonami(true)
    const container = confettiRef.current
    if (!container) return
    const colors = ["#7c3aed", "#06b6d4", "#f59e0b", "#f43f5e", "#10b981"]
    for (let i = 0; i < 150; i++) {
      const el = document.createElement("div")
      el.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -20px;
        border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
        animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        opacity: ${Math.random() * 0.7 + 0.3};
        pointer-events: none;
        z-index: 999;
      `
      container.appendChild(el)
    }
    setTimeout(() => {
      setKonami(false)
      if (container) container.innerHTML = ""
    }, 5000)
  }, [])

  useKonami(activateKonami)

  useEffect(() => {
    console.log("%c Welcome to my corner of the internet! ", "background: #7c3aed; color: white; font-size: 16px; padding: 8px; border-radius: 4px;")
    console.log("%c An embedded engineer built this website with AI help. ", "color: #94a3b8; font-size: 12px;")
    console.log("%c If you're reading this, you probably know what a segfault is. Respect. ", "color: #94a3b8; font-size: 12px;")
    console.log("%c Try the Konami code on the page ;) ", "color: #06b6d4; font-size: 12px;")
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const inHero = scrollY < window.innerHeight

  const statusList = [...STATUSES, "Achievement unlocked: Konami Master!"]

  return (
    <div className={konami ? "konami-active" : ""}>

      {/* ═══ FIXED VIDEO BACKGROUND ═══ */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0f]">
        <div className="video-zoom-wrapper absolute inset-0">
        <video
          ref={videoRef}
          className="hero-video w-full h-full object-cover"
          style={{
            objectPosition: "center",
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src="/desk.mp4" type="video/mp4" />
        </video>
        </div>
      </div>

      {/* Subtle grid — fades in as you scroll past hero */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: Math.min(1, scrollY / (window.innerHeight * 1.2)),
        }}
      />

      {/* Ambient glows — appear below hero */}
      <div
        className="fixed w-[700px] h-[700px] rounded-full pointer-events-none z-[1] blur-[160px]"
        style={{
          top: "60vh", left: "-200px",
          background: "#7c3aed",
          opacity: Math.min(0.1, Math.max(0, (scrollY - window.innerHeight) / 600) * 0.1),
          animation: "float1 20s ease-in-out infinite",
        }}
      />
      <div
        className="fixed w-[700px] h-[700px] rounded-full pointer-events-none z-[1] blur-[160px]"
        style={{
          bottom: "-200px", right: "-200px",
          background: "#06b6d4",
          opacity: Math.min(0.1, Math.max(0, (scrollY - window.innerHeight) / 600) * 0.1),
          animation: "float2 25s ease-in-out infinite",
        }}
      />

      {/* Cursor glow (only below hero) */}
      <div
        ref={cursorRef}
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-[2] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)",
          opacity: inHero ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[200] transition-[width] duration-100"
        style={{ width: scrollPct + "%", background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
      />

      {/* Mute toggle — only visible in hero zone */}
      <button
        onClick={toggleMute}
        className="fixed top-24 right-8 z-[50] w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/30 backdrop-blur-md text-white/70 hover:text-white hover:border-white/50 transition-all duration-300"
        style={{ opacity: inHero ? 1 : 0, pointerEvents: inHero ? "auto" : "none", transition: "opacity 0.4s ease" }}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      <Nav />

      {/* ═══ HERO — sticky zone (100dvh = correct height on mobile too) ═══ */}
      <div style={{ height: "100dvh" }}>
        <div className="sticky top-0 overflow-hidden" style={{ height: "100dvh" }}>
          <Hero />
        </div>
      </div>

      {/* ═══ CONTENT SECTIONS — semi-transparent so video shows through ═══ */}
      <div
        className="relative z-[10]"
        style={{ background: "rgba(10,10,15,0.88)" }}
      >
        <LampSection />
        <About />
        <Skills />
        <Experience />
        <FunBreak />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Status bar */}
      <div className="hidden md:flex fixed bottom-4 right-4 z-[100] bg-[#12121a]/80 backdrop-blur-md border border-[#1e1e2e] rounded-xl px-4 py-[0.6rem] font-mono text-[0.7rem] text-[#94a3b8] items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="w-[6px] h-[6px] rounded-full bg-[#10b981]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
        <span style={{ opacity: statusFade ? 1 : 0, transition: "opacity 0.3s" }}>
          {konami ? "Achievement unlocked: Konami Master!" : statusList[statusIdx]}
        </span>
      </div>

      {/* Confetti */}
      <div ref={confettiRef} className="fixed inset-0 pointer-events-none z-[999]" />
    </div>
  )
}
