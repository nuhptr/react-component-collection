import { useState } from "react"
import { Star } from "lucide-react"

import { Container } from "./index.styles"

export function StarRating({ numberStarts = 5 }) {
   const [rating, setRating] = useState(0)
   const [hover, setHover] = useState(0)

   const handleClick = (currentRating) => {
      setRating(currentRating)
   }

   const handleMouseMove = (currentRating) => {
      setHover(currentRating)
   }

   const handleMouseLeave = () => {
      setHover(rating)
   }

   const handleDoubleClick = () => {
      setRating(0)
      setHover(0)
   }

   return (
      <Container>
         <p className="container-paragraph">Rating Stars</p>

         {[...Array(numberStarts)].map((_, index) => {
            const currentRating = index + 1 // 0 + 1 = 1, 1 + 1 = 2, 2 + 1 = 3, ...

            return (
               <Star
                  key={index}
                  fill={currentRating <= (rating || hover) ? "greenyellow" : "black"}
                  color={currentRating <= (rating || hover) ? "greenyellow" : "none"}
                  style={{ margin: "0 8px", cursor: "pointer" }}
                  onClick={() => handleClick(currentRating)}
                  onMouseMove={() => handleMouseMove(currentRating)}
                  onMouseLeave={() => handleMouseLeave()}
                  onDoubleClick={() => handleDoubleClick()}
                  size={40}
               />
            )
         })}
      </Container>
   )
}
