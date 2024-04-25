"use client"

import { useState } from "react"

import { ModalComp } from "@/app/modal-popup/modal-comp"
import { cn } from "@/lib/utils"

export default function ModalPage() {
   const [showModal, setShowModal] = useState(false)

   const handleToogleModalPopup = () => {
      setShowModal((prev) => !prev)
   }

   const handelOnClose = () => {
      setShowModal(false)
   }

   return (
      <div className="flex justify-center items-center h-screen">
         <button
            className={cn("p-4 rounded-md bg-black text-white", showModal && "hidden")}
            onClick={handleToogleModalPopup}>
            Open Modal
         </button>
         {showModal && (
            <ModalComp
               id="custom"
               header={<h1>Header Custom</h1>}
               footer={<h1>Footer Custom</h1>}
               onClose={handelOnClose}
               body={<div>Customized Body</div>}
            />
         )}
      </div>
   )
}
