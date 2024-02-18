'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextUIProvider } from '@nextui-org/react'

export const ContextWrapper = ({ children }) => {
  return (
    <NextUIProvider>
      <Navbar />
      {children}
      <Footer />
    </NextUIProvider>
  )
}
