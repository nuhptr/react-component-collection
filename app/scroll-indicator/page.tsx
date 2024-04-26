"use client"

import { useState, useEffect, useCallback } from "react"

export default function ScrollIndicatorPage() {
   const [data, setData] = useState<Array<any>>([])
   const [loading, setLoading] = useState<boolean>(true)
   const [error, setError] = useState<string>("")
   const [scrollPercentage, setScrollPercentage] = useState<number>(0)

   const fetchData = useCallback(async () => {
      const url = "https://dummyjson.com/products?limit=100"

      try {
         setLoading(true)
         const response = await fetch(url)
         const data = await response.json()
         const products = data.products
         console.log(products)

         if (response.ok) {
            setData(products)
            setError("")
         }
         setLoading(false)
      } catch (error: any) {
         console.log(error)
         setError("Failed to fetch data" + error.message)
         setLoading(false)
      }
   }, [])

   useEffect(() => {
      fetchData()
   }, [fetchData])

   const handleScrollPercentage = useCallback(() => {
      console.log(
         document.body.scrollTop,
         document.documentElement.scrollTop,
         document.documentElement.scrollHeight,
         document.documentElement.clientHeight
      )

      const scrollLocation = document.documentElement.scrollTop || document.body.scrollTop

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

      setScrollPercentage((scrollLocation / height) * 100)
   }, [])

   useEffect(() => {
      window.addEventListener("scroll", handleScrollPercentage)

      return () => {
         window.removeEventListener("scroll", handleScrollPercentage)
      }
   }, [handleScrollPercentage])

   if (error) return <div className="flex items-center justify-center mt-10">Error: {error}</div>

   if (loading) return <div className="flex items-center justify-center mt-10">Loading...</div>

   return (
      <div className="container mx-auto">
         <div className="sticky top-0 z-10 w-full text-center bg-[#075b0a] text-white">
            <h1>Custom Scroll Indicator</h1>
            <div className="w-full h-[10px] bg-[#aaf900]">
               <div
                  className="h-[10px] bg-[#8b02b5] w-0"
                  style={{ width: `${scrollPercentage}%` }}
               />
            </div>
         </div>
         <div className="flex flex-col mt-4 tracking-tight gap-y-3">
            {data && data.length > 0
               ? data.map((item) => (
                    <p key={item.id} className="last:mb-10">
                       {item.title}
                    </p>
                 ))
               : null}
         </div>
      </div>
   )
}
