import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import maventamaLogo from '@/images/maventama-logo.png'

export const metadata = {
  title: {
    template: '%s - MavenTama',
    default: 'MavenTama - We have great products & services, want to try?',
  },
  description:
    'We have great products & services, want to try? With us, you can transcend technological limits and enter a new world full of opportunities.',
  verification: {
    google: '0Z_gW7Rn6_bpc1y1Z9ef4tCJp5NkCo5COg9aUrABpbY',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
