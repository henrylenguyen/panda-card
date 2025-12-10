import Benefits from '@/components/sections/Benefits'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Panda Card',
  description: 'Reputable Visa and MasterCard rental services with fast payment solutions',
  url: 'https://pandacard.com',
  logo: 'https://pandacard.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-890',
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: 'Worldwide'
  },
  sameAs: [
    'https://facebook.com/pandacard',
    'https://twitter.com/pandacard',
    'https://instagram.com/pandacard'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2000',
    bestRating: '5'
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    offerCount: '2',
    offers: [
      {
        '@type': 'Offer',
        name: 'Visa Card Rental',
        description: 'International payment solutions with a global network'
      },
      {
        '@type': 'Offer',
        name: 'MasterCard Rental',
        description: 'Access the world\'s largest payment network'
      }
    ]
  }
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this card rental service legal, and is my transaction information kept absolutely secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The service is completely legal, providing cards in compliance with the regulations of financial institutions. We are committed to absolute customer data security. Our system uses bank-standard encryption and allows customers to self-manage, lock/unlock cards as needed, ensuring transparency and safety for all transactions.'
      }
    },
    {
      '@type': 'Question',
      name: 'How are the service fees for card rental calculated, and are there any other hidden fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pricing is transparent with no hidden fees. The rental fee is calculated based on the card type and rental duration. You only pay for what you use, with clear pricing displayed before checkout.'
      }
    },
    {
      '@type': 'Question',
      name: 'If the card is rejected on a specific platform, how will the support team help me resolve the issue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our 24/7 support team will immediately investigate the rejection reason and provide alternative solutions. We can issue a replacement card or guide you through platform-specific requirements to ensure successful transactions.'
      }
    },
    {
      '@type': 'Question',
      name: 'What payment methods are available for cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept multiple payment methods including bank transfers, credit/debit cards, and popular e-wallets. All payments are processed securely through our encrypted payment gateway.'
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
