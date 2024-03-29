import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Inter } from "next/font/google"
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/Toaster'


export const metadata = {
  title: 'Reference',
  description: '',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode,
  authModal: React.ReactNode
}) {
  return (
    //appending inter classname with cn, to bg classname
    <html lang='en' className={cn('bg-white antialiased light', inter.className)}>
      <body className='min-h-screen pt-12 antialiased'>
        {/* @ts-expect-error server component*/}
        <Navbar />
        <div className='container max-w-7xl mx-auto h-full pt-12'></div>
        {authModal}
        {children}

        <Toaster />
      </body>
    </html>
  )
}
