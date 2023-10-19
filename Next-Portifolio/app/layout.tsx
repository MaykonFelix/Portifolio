import { Open_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import type { Metadata } from 'next'
import { Footer, Header, WhatsApp, MenuItems } from '@/shared/components/index'

import './styles/globals.css'

const OpenSans = Open_Sans({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Home | Maykon',
  description: 'Portifolio Maykon',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true} className={OpenSans.className}>
        <NextTopLoader color="#FE0078" height={4} showSpinner />

        <Header />
       

        <main className="h-screen pt-20 max-w-7xl ml-auto mr-auto pl-7 pr-7 ">
          {children}
        </main>
        <MenuItems />
        <WhatsApp />
        <Footer />
      </body>
    </html>
  )
}
