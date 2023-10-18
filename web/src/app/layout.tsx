import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai  } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJJ = Bai({
  subsets: ['latin'],
  variable: '--font-bai-jamjuree',
  weight: '700'
})

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Cápsula do Tempo',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJJ.variable} font-sans text-gray-100 bg-gray-800`}>{children}</body>
    </html>
  )
}
