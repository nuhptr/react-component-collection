import { Accordion } from "./components/accordion"
import { ColorGenerator } from "./components/color-generator"
import { StarRating } from "./components/star-rating"

export default function App() {
   return (
      <main>
         {/* Accordion */}
         <Accordion />
         {/* Color Generator */}
         <ColorGenerator />
         {/* Star Rating */}
         <StarRating numberStarts={5} />
      </main>
   )
}
