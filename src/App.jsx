import { Accordion, ColorGenerator, ImageSlider, InfiniteLoad, StarRating } from "./components"

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
         <ImageSlider page="1" limit="10" url="https://picsum.photos/v2/list" />
         <InfiniteLoad />
      </main>
   )
}
