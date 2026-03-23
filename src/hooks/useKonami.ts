import { useEffect, useCallback } from "react"

const SEQUENCE = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]

export function useKonami(onActivate: () => void) {
  let index = 0

  const handler = useCallback((e: KeyboardEvent) => {
    if (e.key === SEQUENCE[index]) {
      index++
      if (index === SEQUENCE.length) {
        onActivate()
        index = 0
      }
    } else {
      index = 0
    }
  }, [onActivate])

  useEffect(() => {
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [handler])
}
