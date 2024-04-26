"use client"

import { useRef } from "react"
import useSWR from "swr"

const fetcher = async (url: string) => {
   const res = await fetch(url)
   return res.json()
}

export default function ScrollToTopBottom() {
   const { data, error, isLoading } = useSWR("https://dummyjson.com/products?limit=100", fetcher)

   const bottomRef = useRef<HTMLDivElement>(null)

   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
   }

   const handleScrollToBottom = () => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
   }

   if (error) return <div className="flex items-center justify-center mt-10">{error}</div>

   if (isLoading) return <div className="flex items-center justify-center mt-10">Loading...</div>

   return (
      <div className="container flex flex-col mx-auto mt-10 tracking-tight gap-y-4">
         <h1>Scroll to top and bottom</h1>
         <h3>This is the top of the page. Scroll down to see the bottom of the page.</h3>
         <button onClick={handleScrollToBottom}>Scroll to bottom</button>
         <ul className="flex flex-col gap-y-4">
            {data &&
               data.products &&
               data.products.length &&
               data.products.map((item: any) => <li key={item.id}>{item.title}</li>)}
         </ul>
         <button onClick={handleScrollToTop}>Scroll To Top</button>
         <div ref={bottomRef}></div>
         <h3>This is the bottom of the page</h3>
      </div>
   )
}
