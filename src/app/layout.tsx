import { Header } from '@/components/core/Header'
import type { Metadata } from 'next'
import '../style/global.css'


export const metadata: Metadata = {
  title: 'Canary beaches',
  description: 'Discover Canary Paradise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className="">
        <Header />
        
        
        {children}
      </body>
    </html>
  )
}
