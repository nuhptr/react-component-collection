"use client"

import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"

interface ITabCompProps {
   tabs: Array<any>
   onChange: (tab: number) => void
}

export function TabComp({ tabs, onChange }: ITabCompProps) {
   const [currentTabIndex, setCurrentTabIndex] = useState(0)

   const handleOnClick = (currentIndex: number) => {
      setCurrentTabIndex(currentIndex)
      onChange(currentIndex)
   }

   return (
      <div className="container p-2 mx-auto mt-10">
         <div className="flex justify-center mb-3 gap-x-4">
            {tabs.map((tab, index) => (
               <div
                  key={tab.label}
                  onClick={() => handleOnClick(index)}
                  className={cn(
                     "inline-flex rounded-md text-2xl font-bold text-center px-4 py-2 cursor-pointer border-none text-black bg-gray-100 hover:bg-green-500 hover:text-white",
                     currentTabIndex === index ? "border-black bg-green-500 text-white" : ""
                  )}>
                  <span className="tracking-tight">{tab.label}</span>
               </div>
            ))}
         </div>

         <div className="py-6 px-3 h-[300px] overflow-auto bg-white tracking-tight">
            {tabs[currentTabIndex] && tabs[currentTabIndex].content}
         </div>
      </div>
   )
}
