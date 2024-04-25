"use client"

import { useCallback, useEffect, useState } from "react"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"

interface ISliderPageProps {
   params: { limit: number; page: number }
}

export default function SliderPage({ params }: ISliderPageProps) {
   const [images, setImages] = useState<any[]>([])
   const [currentSlide, setCurrentSlide] = useState(0)
   const [errorMessage, setErrorMessage] = useState(null)
   const [loading, setLoading] = useState(false)

   const url = "https://picsum.photos/v2/list"

   const fetchImages = useCallback(
      async (url: string) => {
         try {
            setLoading(true)

            const response = await fetch(
               `${url}?page=${params.page ?? 5}&limit=${params.limit ?? 10}`
            )
            const data = await response.json()

            if (data) setImages(data)

            setLoading(false)
         } catch (error: any) {
            setErrorMessage(error.message)
         }
      },
      [params.limit, params.page]
   )

   const handlePrev = () => {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
   }

   const handleNext = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
   }

   useEffect(() => {
      if (url) fetchImages(url)
   }, [fetchImages])

   console.log(images)

   if (loading) return <div>Loading data! Please wait</div>

   if (errorMessage !== null) return <div>Error occured! {errorMessage}</div>

   return (
      <section className="relative flex items-center justify-center w-screen h-screen">
         <ArrowLeftCircle
            onClick={handlePrev}
            className="absolute lg:left-80 w-[2rem] h-[2rem] drop-shadow-md cursor-pointer"
         />
         {images && images.length
            ? images.map((image, index) => (
                 <img
                    key={image.id}
                    src={image.download_url}
                    alt={image.download_url}
                    className={
                       currentSlide === index
                          ? "rounded-2xl w-[600px] h-[450px] drop-shadow-md"
                          : "hidden rounded-2xl drop-shadow-md w-[600px] h-[450px]"
                    }
                 />
              ))
            : null}
         <ArrowRightCircle
            onClick={handleNext}
            className="absolute lg:right-80 w-[2rem] h-[2rem] drop-shadow-md cursor-pointer"
         />

         <span className="absolute flex gap-x-2 bottom-56">
            {images && images.length
               ? images.map((_, index) => (
                    <button
                       key={index}
                       onClick={() => setCurrentSlide(index)}
                       className={
                          currentSlide === index
                             ? "bg-green-500 backdrop-blur-md h-[15px] w-[15px] rounded-full border-none outline-none mx-[0.2rem] cursor-pointer"
                             : "bg-white opacity-60 backdrop-blur-md h-[15px] w-[15px] rounded-full border-none outline-none mx-[0.2rem] cursor-pointer"
                       }
                    />
                 ))
               : null}
         </span>
      </section>
   )
}
