"use client"

import useSwr from "swr"

const fetcher = async (url: string) => {
   const res = await fetch(url)
   return res.json()
}

export default function UseFetchApiPage() {
   const { data, error, isLoading } = useSwr("https://dummyjson.com/products", fetcher)

   return (
      <div className="container flex flex-col mx-auto mt-10 tracking-tight gap-y-4">
         <h1>Use Fetch Hook</h1>
         {isLoading && <h3>Please wait..</h3>}
         {error && <h3>{error}</h3>}
         {data &&
            data.products &&
            data.products.length &&
            data.products.map((item: any) => (
               <p key={item.key} className="last:mb-10">
                  {item.title}
               </p>
            ))}
      </div>
   )
}
