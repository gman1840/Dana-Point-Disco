import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dana Point Disco — Silent Disco Rentals in OC & North SD',
  description: 'Three music channels. Zero noise complaints. 100% fun.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
