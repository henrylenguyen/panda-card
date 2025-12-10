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
    icon: (
      <div className="relative size-[200px] flex items-center justify-center">
        <Image src={Fee} alt="fee" width={300} height={300} className="group-hover:scale-110 transition-transform duration-150" />
      </div>
    ),
    description: 'The most competitive rental price in the market with flexible service packages suitable for businesses and individuals'
  },
  {
    title: 'QUICK PROCESS',
    icon: (
      <div className="relative size-[200px] flex items-center justify-center">
        <Image src={Progress} alt="progress" width={300} height={300} className="group-hover:scale-110 transition-transform duration-150" />
      </div>
    ),
    description: 'Register in minutes, quick information support'
  },
  {
    title: 'HIGH SECURITY',
    icon: (
      <div className="relative size-[200px] flex items-center justify-center">
        <Image src={Security} alt='security' width={300} height={300} className="group-hover:scale-110 transition-transform duration-150" />
      </div>
    ),
    description: 'All customer information is always kept confidential and secure to ensure customer information safety'
  },
  {
    title: '24/7 SUPPORT',
    icon: (
      <div className="relative size-[200px] flex items-center justify-center">
        <Image src={Support} alt='support' width={300} height={300} className="group-hover:scale-110 transition-transform duration-150" />
      </div>
    ),
    description: 'Customer support team is always ready to help you anytime, anywhere with dedicated consultants'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 relative">
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
        <div className="text-center mb-16">
          <span className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase">
            Why choosing us
          </span>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                {benefit.icon}
              </div>

              

              <p className=" text-md leading-relaxed px-2">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
