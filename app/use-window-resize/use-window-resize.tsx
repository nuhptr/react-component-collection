"use client"

import { useLayoutEffect, useState } from "react"

export function useWindowResize() {
   const [windowSize, setWindowSize] = useState({
      width: typeof window === "undefined" ? 0 : window.innerWidth,
      height: typeof window === "undefined" ? 0 : window.innerHeight,
   })

   const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
   }

   useLayoutEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
   }, [])

   return windowSize
}
