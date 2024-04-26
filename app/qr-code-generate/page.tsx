"use client"

import { useState } from "react"
import QRCode from "react-qr-code"

export default function QRCodeGeneratePage() {
   const [qrCode, setQrCode] = useState("")
   const [input, setInput] = useState("")

   const handleGenerateQRCode = () => {
      setQrCode(input)
      setInput("")
   }

   return (
      <section className="flex flex-col items-center justify-center h-screen gap-y-10">
         <h1 className="text-3xl font-bold tracking-tight text-green-500">QR Code Generator</h1>
         <div className="flex items-center tracking-tight gap-x-6">
            <input
               type="text"
               name="qr-code"
               className="p-3 border rounded-lg border-gray-300/40 w-fit placeholder:text-gray-300 placeholder:active:border-green-500"
               placeholder="Enter your value.."
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
            <button
               disabled={input && input.trim() !== "" ? false : true}
               onClick={handleGenerateQRCode}
               className="p-3 text-white bg-black rounded-lg hover:bg-gray-800">
               Generate QR Code
            </button>
         </div>

         <div>
            <QRCode id="qr-code-value" value={qrCode} size={350} bgColor="#fff" />
         </div>
      </section>
   )
}
