"use client"

import { useWindowResize } from "@/app/use-window-resize/use-window-resize"

export default function UseWindowResizePage() {
   const windowSize = useWindowResize()
   const { width, height } = windowSize

   return (
      <div className="container flex flex-col items-center justify-center mx-auto mt-10 tracking-tight gap-y-2">
         <h1>Use Window Resize</h1>
         <p>Width is {width}</p>
         <p>Height is {height}</p>
      </div>
   )
}
