import { Home, Heart, Globe, Layers, Tv, Rocket } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline"

const projectsData: TimelineItem[] = [
  {
    id: 1,
    title: "Smart Home",
    date: "2024",
    content: "Home Assistant connected to Google Assistant via HomeGraph API. Automated lights, climate, and more. The real reason this website exists — Google needed a public URL.",
    category: "IoT",
    icon: Home,
    relatedIds: [5, 4],
    status: "in-progress",
    energy: 95,
    link: "https://ha.akshaydhenge.uk",
  },
  {
    id: 2,
    title: "Valentine's Page",
    date: "2024",
    content: "A special page built for my wife — HTML/CSS/JS for romance. An embedded C engineer asked GPT for help. It worked. ROI: immeasurable.",
    category: "Web",
    icon: Heart,
    relatedIds: [3],
    status: "completed",
    energy: 100,
    link: "https://spam.akshaydhenge.uk/",
  },
  {
    id: 3,
    title: "This Website",
    date: "2025",
    content: "Built by an embedded engineer who barely knows HTML, with a lot of help from Claude. Proof you don't need to master a skill — just know the right AI to ask.",
    category: "Web",
    icon: Globe,
    relatedIds: [2],
    status: "in-progress",
    energy: 80,
    link: "https://akshaydhenge.uk",
  },
  {
    id: 4,
    title: "3D Printing",
    date: "2023",
    content: "Ender 3 Pro owner. Printing enclosures for electronics, random household fixes, and occasionally things that actually look good. Bed leveling is a spiritual practice.",
    category: "Maker",
    icon: Layers,
    relatedIds: [1],
    status: "in-progress",
    energy: 70,
  },
  {
    id: 5,
    title: "JellyFlix",
    date: "2024",
    content: "Self-hosted Jellyfin media server running 24/7. VIP accounts for select friends. They get a streaming service. I get to be their IT support at midnight.",
    category: "Self-hosted",
    icon: Tv,
    relatedIds: [1],
    status: "completed",
    energy: 90,
    link: "https://jellyfin.akshaydhenge.uk",
  },
  {
    id: 6,
    title: "Next Project",
    date: "TBD",
    content: "Always tinkering with something new. If it can be built, automated, or 3D printed — it's on my weekend list. Follow GitHub to see what's next.",
    category: "TBD",
    icon: Rocket,
    relatedIds: [1, 4, 5],
    status: "pending",
    energy: 15,
    link: "https://github.com/akdhenge",
  },
]

export default function Projects() {
  const { ref: headerRef, visible: headerVisible } = useReveal()

  return (
    <section id="projects" className="relative z-[2] py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className={`mb-12 reveal ${headerVisible ? "visible" : ""}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.72rem] text-[#7c3aed] uppercase tracking-[4px]">
              04 / Projects
            </span>
            <span className="flex-1 h-[1px] bg-[#1e1e2e]" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f8fafc] leading-[1.1]">
            Things I've built
            <br />
            <span className="text-[#94a3b8] font-normal">that actually work.</span>
          </h2>
        </div>

        <RadialOrbitalTimeline timelineData={projectsData} />
      </div>
    </section>
  )
}
