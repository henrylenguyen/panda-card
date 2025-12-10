'use client'

import FAQImage from "@/assets/FAQ.svg"
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is this card rental service legal, and is my transaction information kept absolutely secure?',
    answer: 'The service is completely legal, providing cards in compliance with the regulations of financial institutions. We are committed to absolute customer data security. Our system uses bank-standard encryption and allows customers to self-manage, lock/unlock cards as needed, ensuring transparency and safety for all transactions.'
  },
  {
    question: 'How are the service fees for card rental calculated, and are there any other hidden fees?',
    answer: 'Our pricing is transparent with no hidden fees. The rental fee is calculated based on the card type and rental duration. You only pay for what you use, with clear pricing displayed before checkout.'
  },
  {
    question: 'If the card is rejected on a specific platform, how will the support team help me resolve the issue?',
    answer: 'Our 24/7 support team will immediately investigate the rejection reason and provide alternative solutions. We can issue a replacement card or guide you through platform-specific requirements to ensure successful transactions.'
  },
  {
    question: 'What payment methods are available for cards?',
    answer: 'We accept multiple payment methods including bank transfers, credit/debit cards, and popular e-wallets. All payments are processed securely through our encrypted payment gateway.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#E6E6E6] relative overflow-hidden">


      <div className="section-padding relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase">
            FAQ
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image with Question Mark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative -ml-4"
          >
            <div className="relative h-[600px] w-[120%]">
              <Image
                src={FAQImage}
                alt="FAQ Support"
                fill
                className="object-contain object-left"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex items-center justify-between p-6 rounded-xl transition-all duration-300 ${openIndex === index
                      ? 'bg-white shadow-lg transform scale-[1.02]'
                    : 'bg-[#73B0FF] hover:bg-[#8BD8FF] shadow-sm'
                    }`}
                >
                  <span className="font-bold text-lg text-left">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0 " />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white/50 border border-gray-100 rounded-b-xl mt-1 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
