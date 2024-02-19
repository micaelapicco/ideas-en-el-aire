import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas en el Aire',
  description: 'Escuchá Ideas en el Aire en vivo por radio Quilpo',
  keywords: [
    'Radio',
    'San Marcos Sierras',
    'Radio en vivo',
    'Radio Quilpo',
    'San Marcos',
    'Córdoba',
    'Argentina',
    'Radio argentina'
  ],
  icons: {
    icon: '/favicon.ico'
  }
}

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
      <body className={`${jakarta.className} overflow-x-hidden`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
