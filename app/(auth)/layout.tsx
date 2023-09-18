import React from "react";
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import '../globals.css'


export const metadata = {
    title: 'Threads',
    description: 'Threads Application'
}


const inter = Inter({ subsets : ['latin']})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (<ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                <div className="flex w-full justify-center items-center min-h-center">

            {children}
            </div>

            </body>
        </html>
    </ClerkProvider>)
}