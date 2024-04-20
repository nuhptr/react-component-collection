import { useCallback, useEffect, useState } from "react"
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"

import { Container } from "./index.styles"

export function ImageSlider({ url, limit, page }) {
   const [images, setImages] = useState([])
   const [currentImageIndex, setCurrentImageIndex] = useState(0)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   const fetchImages = useCallback(
      async (url) => {
         try {
            setLoading(true)
            const response = await fetch(`${url}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) setImages(data)
            setLoading(false)
         } catch (error) {
            setLoading(false)
            console.error(error)
            setError(error)
         }
      },
      [limit, page]
   )

   const handleNext = () => {
      // last index = back to 0 / currentImageIndex = 4 + 1 = 5
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
   }

   const handlePrevious = () => {
      // index = 0 (last image) / currentImageIndex = 5 - 1 = 4
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
   }

   useEffect(() => {
      if (url !== "") fetchImages(url)
   }, [fetchImages, url])

   console.log(images)

   if (loading) return <div>Loading...</div>

   if (error !== null) return <div>Error: {error.message}</div>

   return (
      <Container>
         <CircleArrowLeft className="arrow arrow-left" onClick={handlePrevious} />
         {images && images.length
            ? images.map((item, index) => (
                 <img
                    key={item.id}
                    alt={item.download_url}
                    src={item.download_url}
                    className={
                       currentImageIndex === index
                          ? "current-image"
                          : "current-image hide-current-image"
                    }
                 />
              ))
            : null}
         <CircleArrowRight className="arrow arrow-right" onClick={handleNext} />
         <span className="circle-indicators">
            {images && images.length
               ? images.map((_, index) => (
                    <button
                       key={index}
                       className={
                          currentImageIndex === index
                             ? "current-indicator"
                             : "current-indicator inactive-indicator"
                       }
                       onClick={() => setCurrentImageIndex(index)}
                    />
                 ))
               : null}
         </span>
      </Container>
   )
}
