import './globals.css'
import { Inter } from 'next/font/google'; 
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Trabersy Media',
  description: 'Web development',
  keywords : 'web development, react, javascritp, html,css, python'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
