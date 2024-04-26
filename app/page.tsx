"use client"

import { CircleArrowUp } from "lucide-react"

import { numberPage } from "@/data/number-page"

export default function Home() {
   const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
   }

   return (
      <main className="container relative flex flex-col h-screen mx-auto mt-10 max-sm:px-5 gap-y-10">
         <p className="text-3xl font-medium tracking-tight">React Collection Component</p>
         <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {numberPage.map((item) => (
               <div
                  key={item.id}
                  className="flex flex-col p-5 tracking-tight border border-gray-200 rounded-lg gap-4 last:mb-10">
                  <div className="flex flex-col gap-1">
                     <h2 className="text-xl font-semibold">{item.name}</h2>
                     <p className="text-gray-500 ">{item.description}</p>
                  </div>
                  <a href={item.url} className="text-blue-500 underline ">
                     Link
                  </a>
               </div>
            ))}
         </div>

         <div
            className="fixed z-10 p-2 rounded-full right-16 bottom-10 w-fit bg-green-300/20"
            onClick={handleScrollTop}>
            <CircleArrowUp className="text-green-500" />
         </div>
      </main>
   )
}
