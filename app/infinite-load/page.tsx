"use client"

import { useCallback, useEffect, useState } from "react"

export default function InfiniteLoad() {
   const [loading, setLoading] = useState(false)
   const [product, setProduct] = useState<any[]>([])
   const [count, setCount] = useState(0)
   const [disableButton, setDisableButton] = useState(false)

   const fetchProducts = useCallback(async () => {
      try {
         setLoading(true)

         const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
         )
         const result = await response.json()

         if (result && result.products && result.products.length) {
            setProduct((prev) => [...prev, ...result.products])
            setLoading(false)
         }

         console.log(result)
      } catch (error: any) {
         console.error(error.message)
         setLoading(false)
      }
   }, [count])

   useEffect(() => {
      fetchProducts()
   }, [fetchProducts])

   useEffect(() => {
      if (product && product.length === 100) setDisableButton(true)
   }, [product])

   if (loading) return <div className="mt-10 text-center">Loading data! Please wait..</div>

   return (
      <div className="container flex flex-col items-center justify-center mx-auto my-10 gap-5">
         <div className="grid grid-cols-4 gap-3">
            {product.length > 0 &&
               product.map((item) => (
                  <div className="flex flex-col p-5 border gap-3" key={item.id}>
                     <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-[200px] h-[200px] object-cover"
                     />
                     <p className="tracking-tight">{item.title}</p>
                  </div>
               ))}
         </div>

         <div className="mb-10 gap-y-5">
            <button
               className="p-4 text-white bg-black rounded-md w-fit"
               disabled={disableButton}
               onClick={() => setCount(count + 1)}>
               Load More Products
            </button>
            {disableButton ? <p>You have reached to 100 products</p> : null}
         </div>
      </div>
   )
}
