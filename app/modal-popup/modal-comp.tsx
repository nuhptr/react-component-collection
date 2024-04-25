"use client"

import { ReactNode } from "react"

interface IModalCompProps {
   id: string
   header: ReactNode
   footer: ReactNode
   onClose(): void
   body: ReactNode
}

export function ModalComp(props: IModalCompProps) {
   return (
      <div
         className="fixed z-10 pt-36 left-0 top-0 w-full h-full overflow-auto drop-shadow-md"
         id={props.id || "Modal"}>
         <div className="relative bg-[#fefefe] m-auto p-0  w-4/5 animate-modal">
            <div className="px-4 py-3 flex flex-row-reverse items-center justify-between bg-[#5cb85c] text-white">
               <span onClick={props.onClose} className="text-3xl font-bold cursor-pointer">
                  &times;
               </span>
               <h2>{props.header ? props.header : "Modal Header"}</h2>
            </div>

            <div className="py-4 px-4 h-[200px]">{props.body ? props.body : "Modal Body"}</div>

            <div className="py-4 px-4 bg-[#5cb85c] text-white">
               {props.footer ? props.footer : "Modal Footer"}
            </div>
         </div>
      </div>
   )
}
