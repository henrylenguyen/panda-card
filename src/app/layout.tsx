import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Panda Card - Visa & MasterCard Rental Service | Fast & Secure Payment Solutions',
    template: '%s | Panda Card'
  },
  description: 'Panda Card provides reputable Visa and MasterCard rental services with fast payment solutions. Reasonable fees, quick process, high security, and 24/7 support. Trusted by 2000+ customers worldwide.',
  keywords: [
    'card rental service',
    'visa card rental',
    'mastercard rental',
    'virtual card',
    'payment solutions',
    'international payments',
    'secure card rental',
    'business card rental',
    'online payment card',
    'panda card'
  ],
  authors: [{ name: 'Panda Card' }],
  creator: 'Panda Card',
  publisher: 'Panda Card',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pandacard.com',
    siteName: 'Panda Card',
    title: 'Panda Card - Visa & MasterCard Rental Service | Fast & Secure Payment Solutions',
    description: 'Reputable Visa and MasterCard rental services with fast payment solutions. Reasonable fees, quick process, high security, and 24/7 support.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Panda Card - Card Rental Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panda Card - Visa & MasterCard Rental Service',
    description: 'Reputable Visa and MasterCard rental services with fast payment solutions. Trusted by 2000+ customers worldwide.',
    images: ['/og-image.png'],
    creator: '@pandacard',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://pandacard.com',
  },
  category: 'finance',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0A193D" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
