import Banner from '@/components/Banner'
import Header from '@/components/Header'
import '../../styles/globals.css'

export const metadata = {
  title: 'Mals Mod Prob',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {/* Banner */}
        {children}
      </body>
    </html>
  )
}