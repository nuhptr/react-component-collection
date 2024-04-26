"use client"

import { useTheme } from "next-themes"

export default function DarkModePage() {
   const { theme, setTheme } = useTheme()

   return (
      <div className="flex flex-col justify-center h-screen text-xl bg-white dark:bg-black transition-all duration-[0.5s]">
         <div className="flex flex-col items-center justify-center gap-8">
            <p className="m-0 text-3xl text-black dark:text-white">Hello World</p>
            <input
               type="checkbox"
               className="w-6 h-6 cursor-pointer appearance-none border-[1px] border-green-500 rounded-md bg-white shrink-0 checked:bg-green-700 checked:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-white"
               checked={theme === "dark" ? true : false}
               onChange={() => {
                  if (theme === "light") return setTheme("dark")
                  return setTheme("light")
               }}
            />
         </div>
      </div>
   )
}
