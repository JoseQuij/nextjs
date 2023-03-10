import '../styles/globals.css'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
