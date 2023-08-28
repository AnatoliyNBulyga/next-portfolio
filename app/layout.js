import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Personal Portfolio Website',
  description: 'You mast take a look this amazing website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
