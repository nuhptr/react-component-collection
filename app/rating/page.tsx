"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function RatingPage() {
   const [rating, setRating] = useState<number>(0)
   const [hoverRating, setHoverRating] = useState<number>(0)

   const handleClick = (index: number) => {
      setRating(index)
   }

   const handleHover = (index: number) => {
      setHoverRating(index)
   }

   const handleMouseLeave = () => {
      setHoverRating(rating)
   }

   const handleDoubleClick = () => {
      setRating(0)
   }

   return (
      <section className="flex items-center justify-center w-screen h-screen">
         <h1 className="mr-8 text-2xl tracking-tight">Rating Component</h1>
         {[...Array(5)].map((_, index) => {
            index += 1

            return (
               <Star
                  key={index}
                  className={cn(
                     "cursor-pointer",
                     index !== -1 ? "mr-3" : "",
                     index <= (hoverRating | rating) ? "text-green-500" : "text-gray-300"
                  )}
                  fill={index <= (hoverRating | rating) ? "currentColor" : "none"}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleHover(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  onDoubleClick={() => handleDoubleClick()}
                  size={30}
               />
            )
         })}
      </section>
   )
}
