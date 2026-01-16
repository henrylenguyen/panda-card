'use client'

import Fee from "@/assets/fee.png"
import Progress from '@/assets/process.png'
import Security from '@/assets/security.png'
import Support from '@/assets/support.png'
import BenefitBG from "@/assets/why_choose_us_bg.png"
import { motion } from 'framer-motion'
import Image from 'next/image'

const benefits = [
  {
    title: 'REASONABLE RENTAL FEE',
    icon: Fee,
    description: 'The most competitive rental price in the market with flexible service packages suitable for businesses and individuals'
  },
  {
    title: 'QUICK PROCESS',
    icon: Progress,
    description: 'Register in minutes, quick information support'
  },
  {
    title: 'HIGH SECURITY',
    icon: Security,
    description: 'All customer information is always kept confidential and secure to ensure customer information safety'
  },
  {
    title: '24/7 SUPPORT',
    icon: Support,
    description: 'Customer support team is always ready to help you anytime, anywhere with dedicated consultants'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-12 md:py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BenefitBG}
          alt="Office Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase">
            Why choosing us
          </span>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.15 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[30px] p-4 text-center shadow-2xl hover:shadow-[0_25px_50px_rgba(66,165,245,0.25)] transition-all duration-150 h-full flex flex-col items-center cursor-pointer"
            >
              <h3 className="text-sm font-bold text-gray-900 mt-6 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <div className="mb-8 mt-4">
                <div className="relative w-56 h-56 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-150"
                  />
                </div>
              </div>

              <p className="text-sm md:text-md leading-relaxed px-2">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
