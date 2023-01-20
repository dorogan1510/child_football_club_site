'use client'

import Footer from '@/components/Footer'
import { Roboto } from '@next/font/google'

import Header from '@/components/Header'
import '../styles/globals.scss'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'
import HeroSection from '@/components/HeroSection'

const roboto = Roboto({
    variable: '--font-inter',
    weight: ['300', '400', '700'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider theme={theme}>
            <html lang='en' className={roboto.className}>
                <head />
                <body>
                    <Header />
                    <HeroSection />

                    <div className='page'>{children}</div>
                    <Footer />
                </body>
            </html>
        </ThemeProvider>
    )
}
