import { Accordion, ColorGenerator, ImageSlider, StarRating } from "./components"

export default function App() {
   return (
      <main>
         {/* Accordion */}
         <Accordion />
         {/* Color Generator */}
         <ColorGenerator />
         {/* Star Rating */}
         <StarRating numberStarts={5} />
         {/* Slider */}
         <ImageSlider />
      </main>
   )
}
