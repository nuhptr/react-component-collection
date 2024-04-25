"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { data } from "@/app/accordion/data"

export default function AccordionPage() {
   const [selected, setSelected] = useState<number | null>(null)
   const [multipleSelected, setMultipleSelected] = useState<any[]>([])

   const [enableMultipleSelect, setEnableMultipleSelect] = useState<Boolean>(false)

   const handleSingleSelect = (id: number) => {
      const selectedId = selected === id ? null : id

      setSelected(selectedId)
   }

   const handleMultipleSelect = (id: number) => {
      let newMultipleSelected = [...multipleSelected]
      const findCurrentIndex = newMultipleSelected.indexOf(id)

      if (findCurrentIndex === -1) newMultipleSelected.push(id)
      else newMultipleSelected.splice(findCurrentIndex, 1)

      setMultipleSelected(newMultipleSelected)
   }

   return (
      <section className="flex flex-col items-center justify-center w-screen h-screen gap-y-5">
         <button
            className={cn("px-5 py-3 text-xl tracking-tight rounded-lg cursor-pointer", {
               "bg-red-500 hover:bg-red-400 text-white": enableMultipleSelect,
               "bg-green-400 hover:bg-green-500 text-black": !enableMultipleSelect,
            })}
            onClick={() => setEnableMultipleSelect((prev) => !prev)}>
            {enableMultipleSelect ? "Enable Single Select" : "Enable Multiple Select"}
         </button>

         <div className="w-[500px]">
            {data.map((item) => (
               <div
                  key={item.id}
                  className="flex flex-col px-5 py-5 mb-4 text-white bg-green-500 rounded-md gap-y-2">
                  <div
                     className="flex items-center justify-between cursor-pointer"
                     onClick={
                        enableMultipleSelect
                           ? () => handleMultipleSelect(item.id)
                           : () => handleSingleSelect(item.id)
                     }>
                     <h3 className="text-lg tracking-tight">{item.question}</h3>
                     <span className="text-lg">
                        {selected === item.id || multipleSelected.indexOf(item.id) !== -1
                           ? "-"
                           : "+"}
                     </span>
                  </div>

                  {enableMultipleSelect && multipleSelected.indexOf(item.id) !== -1 && (
                     <div className="h-auto">{item.answer}</div>
                  )}

                  {!enableMultipleSelect && selected === item.id && (
                     <div className="h-auto">{item.answer}</div>
                  )}
               </div>
            ))}

            {data.length === 0 && <div>No Data Found.</div>}
         </div>
      </section>
   )
}
