'use client'

import FeedBackLeft from "@/assets/feedback_left.png"
import Quote from "@/assets/quote.svg"
import { AnimatePresence, motion, useInView, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: 'We were concerned about security when renting a large number of cards, but this service has exceeded all expectations. The system allows us to tightly control every transaction and easily lock/unlock cards instantly via the app. This is an extremely trustworthy financial partner that every e-commerce company should consider.',
    author: 'Anna Le',
    role: 'CFO',
    company: 'StartupHub Co.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop'
  },
  {
    quote: 'The card rental service has transformed how we handle international payments. Fast, secure, and incredibly convenient. Highly recommended for any business.',
    author: 'John Smith',
    role: 'Founder',
    company: 'Tech Startup',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    quote: 'Outstanding service and support. The team is always responsive and helpful whenever we need assistance with our cards.',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Creative Agency',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
]

const stats = [
  { value: 2000, suffix: '+', label: 'Team and individual customer in the world', hasBorder: true },
  { value: 99, suffix: '%', label: 'Positive feedback', hasBorder: false },
  { value: 30, suffix: 'M+', label: 'Transactions per month', hasBorder: false }
]

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 })
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString())

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  return (
    <span ref={ref} className="flex items-center justify-center">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)

  // Auto play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-60" />

      <div className="section-padding relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase">
            Custormer Feedbacks
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column: Feedback Image with Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative aspect-[5/4] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={FeedBackLeft}
                alt="Customer Feedback Interaction"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Testimonial Carousel */}
          <div className="relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center h-full"
              >
                {/* Top Section: Image + Quote Icon + Nav Button */}
                <div className="relative w-full flex justify-center mb-6">
                  {/* Person Image */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 z-10">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>

                  {/* Right Side Elements */}
                  <div className="absolute top-0 right-0 md:right-10 flex flex-col gap-8 items-center">
                    {/* Quote Icon */}
                    <Image src={Quote} height={80} width={80} alt="quote"/>
                  

                    {/* Next Button */}
                    <button
                      onClick={goToNext}
                      className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-6 h-6 text-black" />
                    </button>
                  </div>
                </div>

                {/* Name Label - Overlapping */}
                <div className="relative z-20 -mt-6 md:-mt-8 mb-6 md:mb-8">
                  <div className="bg-[#80DEEA] px-4 sm:px-6 md:px-8 py-2 md:py-3 shadow-md">
                    <p className="text-black font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                      {testimonials[currentIndex].company} - {testimonials[currentIndex].author}, {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Box */}
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-6 md:p-8 text-center relative z-0 flex items-center shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {testimonials[currentIndex].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom - Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-12 text-center flex flex-col justify-center items-center h-full min-h-[180px] md:min-h-[250px] relative overflow-hidden shadow-lg hover:bg-gray-50 transition-colors"
            >
            
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-2 md:mb-4 tracking-tight relative z-10">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600 font-medium text-base max-w-[200px] mx-auto leading-tight relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
