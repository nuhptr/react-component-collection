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
               className="p-4 border-none bg-none checked:bg-red-50"
               checked={
                  theme === localStorage.getItem("theme") ? theme === "dark" : theme === "light"
               }
               onChange={() => {
                  if (theme === "light") {
                     localStorage.setItem("theme", "dark")
                     return setTheme("dark")
                  }

                  localStorage.setItem("theme", "light")
                  return setTheme("light")
               }}
            />
         </div>
      </div>
   )
}
