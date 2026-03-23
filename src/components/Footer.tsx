export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-[#1e1e2e] py-12 px-8 text-center">
      <p className="font-mono text-[0.8rem] text-[#94a3b8]">
        Crafted with ♥, caffeine, and Claude by{" "}
        <a href="#" className="text-[#7c3aed] no-underline hover:underline">
          Akshay Dhenge
        </a>{" "}
        © {new Date().getFullYear()}
      </p>
      <p className="text-[0.75rem] text-[#94a3b8] opacity-60 mt-2">
        Built by an embedded engineer who had to ask an AI what "flexbox" means. No registers were
        harmed.
      </p>
      <p className="text-[0.8rem] text-[#94a3b8] mt-4">
        Powered by ☕, curiosity, and a mass amount of "let me just try one more thing"
      </p>
    </footer>
  )
}
