import { useCallback, useEffect, useState } from "react"

import {
   ButtonStyled,
   Container,
   ContainerButton,
   ContainerContent,
   HeadingStyled,
   ParagraphStyled,
} from "./index.styles"

export function ColorGenerator() {
   const [color, setColor] = useState("#000000")
   const [typeOfColor, setTypeOfColor] = useState("hex")

   const randomColorUtility = (length) => Math.floor(Math.random() * length)

   const handleCreateRandomHexColor = useCallback(() => {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
      let hexColor = "#"

      for (let i = 0; i < 6; i++) {
         hexColor += hex[randomColorUtility(hex.length)]
      }

      setColor(hexColor)
   }, [])

   const handleCreateRandomRgbColor = useCallback(() => {
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)

      setColor(`RGB(${r}, ${g}, ${b})`)
   }, [])

   const generateRandomColor = useCallback(() => {
      if (typeOfColor === "hex") handleCreateRandomHexColor()
      else handleCreateRandomRgbColor()
   }, [handleCreateRandomHexColor, handleCreateRandomRgbColor, typeOfColor])

   useEffect(() => {
      if (typeOfColor === "hex") handleCreateRandomHexColor()
      else handleCreateRandomRgbColor()
   }, [handleCreateRandomHexColor, handleCreateRandomRgbColor, typeOfColor])

   return (
      <Container>
         <ContainerButton>
            <ButtonStyled onClick={() => setTypeOfColor("hex")}>Create Hex Color</ButtonStyled>
            <ButtonStyled onClick={() => setTypeOfColor("rgb")}>Create RGB Color</ButtonStyled>
            <ButtonStyled onClick={generateRandomColor}>Generate Random Color</ButtonStyled>
         </ContainerButton>

         <ContainerContent>
            <ParagraphStyled>{typeOfColor === "hex" ? "Hex Color" : "RGB Color"}</ParagraphStyled>
            <HeadingStyled color={color}>{color}</HeadingStyled>
         </ContainerContent>
      </Container>
   )
}
