"use client"

import { useState, useRef } from "react"
import { useOutsideClick } from "./use-outside"

export default function UseOnClickOutsidePage() {
   const [showContent, setShowContent] = useState(false)
   const ref = useRef(null)
   useOutsideClick({ ref, handler: () => setShowContent(false) })

   return (
      <div className="container mx-auto mt-10">
         {showContent && (
            <div ref={ref} className="mb-4 leading-relaxed tracking-tight">
               <h1 className="text-xl font-medium">This is a random content</h1>
               <p>
                  Please click outside of this to close this. It won&apos;t close if you click
                  inside of this content
               </p>
            </div>
         )}

         <button
            className="p-4 text-white bg-black rounded-lg hover:bg-gray-800"
            onClick={() => setShowContent(true)}>
            {showContent ? "Hide Content" : "Show Content"}
         </button>
      </div>
   )
}
