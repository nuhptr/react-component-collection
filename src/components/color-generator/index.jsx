import { useState } from "react"

export default function ColorGenerator() {
   const [typeOfColor, setTypeOfColor] = useState("hex")
   const [color, setColor] = useState("#000000")

   return (
      <div
         className="container"
         style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
         <button>Create Hex Color</button>
         <button>Create RGB Color</button>
         <button>Generate Random Color</button>
      </div>
   )
}
