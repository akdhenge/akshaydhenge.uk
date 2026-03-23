import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

export default function LampSection() {
  return (
    <LampContainer>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
        className="font-mono text-[0.75rem] text-[#7c3aed] uppercase tracking-[4px] mb-4 text-center"
      >
        Embedded Engineer · Tinkerer · Human
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-center text-[#f8fafc] leading-[1.2]"
      >
        Firmware by day.
        <br />
        <span className="text-[#94a3b8] font-normal">Everything else by night.</span>
      </motion.h2>
    </LampContainer>
  )
}
