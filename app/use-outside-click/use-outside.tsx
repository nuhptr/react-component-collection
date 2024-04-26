"use client"

import { useEffect } from "react"

interface IUseOutsideClick {
   ref: any
   handler: (event: MouseEvent | TouchEvent) => void
}

export function useOutsideClick({ ref, handler }: IUseOutsideClick) {
   useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
         if (!ref.current || ref.current.contains(event.target)) return

         handler(event as MouseEvent)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
         document.removeEventListener("mousedown", listener)
         document.removeEventListener("touchstart", listener)
      }
   }, [handler, ref])
}
