import { Header } from '@/view/ui/Header'
import type { Metadata } from 'next'
import '../style/global.css'
import FontImport from '@/view/head/Head'

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
      <FontImport />
      <body  className="">
        <Header />
        {children}
      </body>
    </html>
  )
}
