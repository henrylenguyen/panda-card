'use client'

import {
  AnimatePresence,
  motion,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      'We were concerned about security when renting a large number of cards, but this service has exceeded all expectations. The system allows us to tightly control every transaction and easily lock/unlock cards instantly via the app. This is an extremely trustworthy financial partner that every e-commerce company should consider.',
    author: 'Anna Le',
    role: 'CEO',
    company: 'StartupHub Co.',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
  },
  {
    quote:
      'In media buying, speed is key. This service ensures the cards are always ready with the necessary limits, and the top-up process only takes a few seconds, with no delays. This helps us launch campaigns on time without missing opportunities. After multiple trials, I found this to be the fastest service on the current market.',
    author: 'Lily Wong',
    role: '',
    company: 'Performance Agency',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    quote:
      "Partnering with this team has been a wonderful experience. They don't just provide cards; they offer a comprehensive payment solution. Whenever we face an issue with a specific transaction, the technical support team is always available to resolve it within minutes. We appreciate the team's dedication and sense of responsibility.",
    author: 'Eric Hoang',
    role: '',
    company: 'Consulting Firm',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
]

const stats = [
  {
    value: 2000,
    suffix: '+',
    label: 'Team and individual customer in the world',
  },
  { value: 99, suffix: '%', label: 'Positive feedback' },
  { value: 30, suffix: 'M+', label: 'Transactions per month' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 })
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

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
  const [startIndex, setStartIndex] = useState(0)

  const goToNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  // Auto play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [goToNext])

  // Get 3 visible testimonials
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length])
    }
    return visible
  }

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
            Customer Feedbacks
          </span>
        </div>

        {/* Testimonial Cards */}
        <div className="mb-20">
          <div className="flex items-end gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div key={index} className="flex flex-col">
                    {/* Quote Box */}
                    <div className="bg-gray-100 rounded-2xl p-6 mb-4 flex-grow relative">
                      {/* Speech bubble tail */}
                      <div className="absolute -bottom-3 left-8 w-6 h-6 bg-gray-100 transform rotate-45" />
                      <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="bg-[#8BD8FF] px-4 py-1 rounded-full font-bold text-sm text-black inline-block">
                          {testimonial.author}
                          {testimonial.role && `, ${testimonial.role}`}
                        </span>
                        <p className="text-gray-500 text-xs mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Next Button - aligned with author info */}
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-sm flex-shrink-0 mb-2"
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
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
              className="bg-[#8BD8FF] rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-12 text-center flex flex-col justify-center items-center h-full min-h-[180px] md:min-h-[250px] relative overflow-hidden"
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
