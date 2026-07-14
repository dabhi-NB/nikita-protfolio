'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div {...fadeUp(0.1)}>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{
                  background: 'var(--cyan-dim)',
                  color: 'var(--cyan)',
                  border: '1px solid rgba(56,189,248,0.2)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Nikita
              </span>
            </motion.h1>

            <motion.h2
              {...fadeUp(0.3)}
              className="text-xl md:text-2xl font-medium mb-6"
              style={{ color: 'var(--muted)' }}
            >
              Full Stack Developer &{' '}
              <span className="cyan-text font-semibold">MERN Stack Specialist</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.4)}
              className="text-base leading-relaxed mb-10 max-w-xl"
              style={{ color: 'var(--muted)' }}
            >
              I build scalable, high-performance web applications using MongoDB, Express.js,
              React.js, Node.js and Next.js. Passionate about clean code, intuitive UIs, and
              turning ideas into production-ready products.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
                  color: '#080c14',
                }}
              >
                Let's Connect
              </a>
              <a
                href="/Dabhi-Nikita.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'
                  e.currentTarget.style.color = 'var(--cyan)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text)'
                }}
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex items-center gap-5">
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com/dabhi-NB', label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/dabhi-nikita', label: 'LinkedIn' },
                { icon: <FiMail size={20} />, href: 'mailto:dabhinikitab@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    color: 'var(--muted)',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--cyan)'
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex-shrink-0"
          >
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(56,189,248,0.2), 0 0 0 1px rgba(56,189,248,0.1)',
              }}
            >
              {/* Replace /nikita.jpg with your actual image path */}
              <Image
                src="/nikita.jpg"
                alt="Nikita Dabhi"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(8,12,20,0.4) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute mt-[-40px] ml-[-20px] glass px-3 py-2 rounded-xl text-xs font-medium"
              style={{ color: 'var(--cyan)', border: '1px solid rgba(56,189,248,0.2)' }}
            >
              🚀 MERN Stack Dev
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '1+', label: 'Year Experience' },
            { value: '3+', label: 'Projects Built' },
            { value: '5+', label: 'Technologies' },
            { value: '8.44', label: 'CGPA' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-4 text-center"
              style={{ border: '1px solid var(--border)' }}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: 'linear-gradient(135deg, #38bdf8, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
