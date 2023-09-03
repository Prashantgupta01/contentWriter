import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prathamesh.Writes',
  description: 'Looking for a skilled content writer? Look no further! Our professional writer delivers high-quality content that engages and informs your audience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
