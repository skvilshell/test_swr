import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SWRProvider } from "./(providers)/swr"
import { Header } from "@/widgets"
import { FilterAndPaginationProvider } from "./(providers)/store"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <SWRProvider>
               <Header />
               {children}
            </SWRProvider>
         </body>
      </html>
   )
}
