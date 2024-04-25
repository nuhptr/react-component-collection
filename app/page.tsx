import { numberPage } from "@/data/number-page"

export default function Home() {
   return (
      <main className="container flex flex-col mx-auto mt-10 gap-y-10">
         <p className="text-3xl font-medium tracking-tight">React Collection Component</p>
         <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {numberPage.map((item) => (
               <div
                  key={item.id}
                  className="flex flex-col p-5 tracking-tight border border-gray-200 rounded-lg gap-4">
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
      </main>
   )
}
