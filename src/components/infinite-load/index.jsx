import { useCallback, useEffect, useState } from "react"

import { LoadMoreContainer } from "./index.styles"

export function InfiniteLoad() {
   const [loading, setLoading] = useState(false)
   const [products, setProducts] = useState([])
   const [count, setCount] = useState(0)

   const fetchProducts = useCallback(async () => {
      try {
         setLoading(true)

         const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count}`
         )
         const data = await response.json()

         if (data && data.products && data.products.length) {
            setProducts((prev) => [...prev, ...data.products])
            setLoading(false)
         }

         console.info(data)
      } catch (error) {
         setLoading(false)
         console.error(error)
      }
   }, [count])

   useEffect(() => {
      fetchProducts()
   }, [fetchProducts])

   if (loading) return <div>Loading...</div>

   return (
      <LoadMoreContainer>
         <div className="product-container">
            {products && products.length
               ? products.map((item) => (
                    <div className="product" key={item.id}>
                       <img src={item.thumbnail} alt={item.title} />
                       <p>{item.title}</p>
                    </div>
                 ))
               : null}
         </div>
         <div className="button">
            <button>More</button>
         </div>
      </LoadMoreContainer>
   )
}
