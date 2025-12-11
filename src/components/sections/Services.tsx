'use client'

import Mastercard from "@/assets/masster_card.png"
import MastercardLogo from "@/assets/master_card_logo.png"
import Visa from "@/assets/visa.png"
import VisaLogo from "@/assets/visa_logo.png"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="section-padding relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase">
            Professional Service
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* VISA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.15 }
            }}
            viewport={{ once: true }}
            className="group bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border-[3px] border-t-[8px] md:border-t-[12px] border-[#80DEEA] shadow-sm hover:shadow-[0_20px_50px_rgba(128,222,234,0.3)] transition-all duration-150 cursor-pointer"
          >
            {/* Top Logo */}
            <div className="flex justify-center">
             <Image  src={VisaLogo} alt="Visa Logo" className="w-22 h-20" />
          
            </div>

            {/* Middle Content */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-gray-900 uppercase">VISA CARD</h3>
              <div className="relative w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36">
                <Image
                  src={Visa}
                  alt="Visa Card"
                  fill
                  className="object-cover transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-150"
                />
              </div>
            </div>

            {/* Bottom Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              International payment solutions with a global network. Visa cards allow you to spend in more than 200 countries with low fees and high security.
            </p>
          </motion.div>

          {/* MasterCard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.15 }
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border-[3px] border-t-[8px] md:border-t-[12px] border-[#EF5350] shadow-sm hover:shadow-[0_20px_50px_rgba(239,83,80,0.3)] transition-all duration-150 cursor-pointer"
          >
            {/* Top Logo */}
            <div className="flex justify-center items-center gap-1">
              <Image src={MastercardLogo} alt="MasterCard Logo" className="w-22 h-20" />
            </div>

            {/* Middle Content */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-gray-900 uppercase">MASTER CARD</h3>
              <div className="relative w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36">
                <Image
                  src={Mastercard}
                  alt="MasterCard"
                  fill
                  className="object-cover transform scale-125 rotate-3 group-hover:rotate-0 group-hover:scale-150 transition-transform duration-150"
                />
              </div>
            </div>

            {/* Bottom Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Access the world's largest payment network. MasterCard lets you make purchases anywhere with unmatched reliability and convenience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
