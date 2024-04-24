import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "React Component Collection",
   description:
      "Website showcasing a collection of React components for deep learning and experimentation how to use functionality.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={inter.className} suppressHydrationWarning={true}>
            {children}
         </body>
      </html>
   )
}
