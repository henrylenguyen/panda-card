'use client'

import HeroImage from "@/assets/hero_image.svg"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden hero-bg ">
      <div className="section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left - Panda Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 0.6,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }
            }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden lg:-mr-12"
          >
            <Image
              src={HeroImage}
              alt="Panda eating bamboo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right - Content */}
          <div className="text-right lg:-ml-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-bold text-black mb-2"
            >
              Global access, flexible payments
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6"
            >
              Card rental service reputable
              <br />& fast payment
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-black mb-8 max-w-lg ml-auto leading-relaxed"
            >
              We provide reputable Visa and Master Card rental services, providing you with payment solutions at reasonable costs and high quality
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#contact"
                className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden">
        <svg
          className="wave-svg absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="wave-path-1"
          />
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="0.3"
            className="wave-path-2"
          />
          <path
            d="M0,70 Q300,40 600,70 T1200,70 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="0.2"
            className="wave-path-3"
          />
        </svg>
      </div>
    </section>
  )
}
