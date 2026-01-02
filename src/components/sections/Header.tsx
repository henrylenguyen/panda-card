'use client'

import Logo from "@/assets/logo.png"
import { motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Homepage', href: '#hero' },
  { label: 'Service', href: '#services' },
  { label: 'Process', href: '#benefits' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="section-padding h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Panda Logo"
              width={100}
              height={120}
            className="object-contain scale-150"
            />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-14">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-black font-bold hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg border-[#8BD8FF] text-gray-500 hover:border-gray-400 transition-colors">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t bg-white"
        >
          <div className="section-padding py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-black font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}
