"use client"

import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"

export default function ColorGeneratePage() {
   const [typeColor, setTypeColor] = useState<string>("hex")
   const [color, setColor] = useState<string>("#000000")

   const randomColorUtility = (length: number) => {
      return Math.floor(Math.random() * length)
   }

   const handleCreateHexColor = useCallback(() => {
      // Hexadecimal Structure
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
      let hexColor = "#"

      for (let index = 0; index < 6; index++) {
         hexColor += hex[randomColorUtility(hex.length)]
      }

      setColor(hexColor)
   }, [])

   const handleCreateRGBColor = useCallback(() => {
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)

      setColor(`rgb(${r}, ${g}, ${b})`)
   }, [])

   useEffect(() => {
      if (typeColor === "hex") handleCreateHexColor()
      else handleCreateRGBColor()
   }, [handleCreateHexColor, handleCreateRGBColor, typeColor])

   return (
      <section className="flex flex-col items-center justify-center w-screen h-screen">
         <div className="flex tracking-tight text-white gap-x-6">
            <button
               className="px-6 py-4 bg-green-500 rounded-md hover:bg-green-600"
               onClick={() => setTypeColor("hex")}>
               HEX Color
            </button>
            <button
               className="px-6 py-4 bg-green-500 rounded-md hover:bg-green-600"
               onClick={() => setTypeColor("rgb")}>
               RGB Color
            </button>
            <button
               className="px-6 py-4 bg-green-500 rounded-md hover:bg-green-600"
               onClick={typeColor === "hex" ? handleCreateHexColor : handleCreateRGBColor}>
               Generate Color
            </button>
         </div>

         <div className="flex justify-center items-center text-[60px] mt-12 flex-col gap-5">
            <h3 className="text-5xl">{typeColor === "hex" ? "HEX" : "RGB"}</h3>
            <h1 className="tracking-tight text-8xl" style={{ color: color }}>
               {color}
            </h1>
         </div>
      </section>
   )
}
