'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: 1,
    title: 'Register Account',
    description: 'Create your account with basic information and verify your identity.'
  },
  {
    step: 2,
    title: 'Choose Your Card',
    description: 'Select from our range of Visa and MasterCard options.'
  },
  {
    step: 3,
    title: 'Make Payment',
    description: 'Complete the rental fee payment through your preferred method.'
  },
  {
    step: 4,
    title: 'Start Using',
    description: 'Receive your card details and start making payments globally.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
            How It Works
          </span>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300" />
              )}
              
              <div className="relative bg-white rounded-xl p-6 shadow-lg text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
