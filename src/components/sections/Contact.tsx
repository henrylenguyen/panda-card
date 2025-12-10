'use client'

import ContactImage from '@/assets/contact.png'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    note: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
    

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">
          {/* Left - Image */}
          <div className="relative min-h-[400px] overflow-hidden">
            <Image
              src={ContactImage}
              alt="Contact Us"
              fill
              className="object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">CONTACT</h2>
                <h2 className="text-5xl font-bold text-white/80 tracking-tight">WITH US</h2>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-12 relative">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">SEND MESSAGE</h3>
              <p className="text-gray-500 text-sm">
                Our customer care team will respond within 24 hours. Please feel free to contact us if you have any questions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Phone / Mobile support"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <textarea
                placeholder="Note"
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
