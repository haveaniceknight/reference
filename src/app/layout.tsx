import Navbar from '@/components/ui/Navbar'
import '@/styles/globals.css'
import { Inter } from "next/font/google"
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Reference',
  description: 'Created by Charlie Dixon and Andrew Hull',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //appending inter classname with cn, to bg classname
    <html lang='en' className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>

        <Navbar />
        <div className='container max-w-7xl mx-auto h-full pt-12'></div>

        {children}

        <Toaster />
      </body>
    </html>
  )
}
