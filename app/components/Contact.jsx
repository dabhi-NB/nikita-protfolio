'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs.send(
      'service_2l4m7ip',
      'template_raawmht',
      {
        name: formData.name,
        email: formData.email,
        time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
        message: formData.message,
      },
      '_q4VXwGCVVmhINRD7'
    )
      .then(() => {
        setSent(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 3000)
      })
      .catch((error) => {
        console.error('Email send failed:', error)
        alert('Something went wrong. Please try again or email me directly.')
      })
      .finally(() => setSending(false))
  }

  return (
    <section id="contact" className="py-10 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(56,189,248,0.05) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="cyan-text text-sm font-semibold tracking-widest uppercase mb-2 block">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>Contact Info</h3>

            {[
              {
                icon: <FiMail size={20} />,
                label: 'Email',
                value: 'dabhinikitab@gmail.com',
                href: 'mailto:dabhinikitab@gmail.com',
                color: '#38bdf8',
              },
              {
                icon: <FiPhone size={20} />,
                label: 'Phone',
                value: '+97271 62852',
                href: 'tel:+9727162852',
                color: '#f472b6',
              },
              {
                icon: <FiLinkedin size={20} />,
                label: 'LinkedIn',
                value: 'dabhi nikita',
                href: 'https://linkedin.com/in/dabhi-nikita',
                color: '#a78bfa',
              },
              {
                icon: <FiGithub size={20} />,
                label: 'GitHub',
                value: 'dabhi-NB',
                href: 'https://github.com/dabhi-NB',
                color: '#34d399',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-4 group transition-all duration-200 hover:scale-[1.02]"
                style={{ border: '1px solid var(--border)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${item.color}44`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--muted)' }}>{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4" style={{ border: '1px solid var(--border)' }}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Send a Message</h3>

              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Nikita Dabhi' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-xs mb-1.5 font-medium" style={{ color: 'var(--muted)' }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'var(--bg2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(56,189,248,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs mb-1.5 font-medium" style={{ color: 'var(--muted)' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(56,189,248,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: sent ? 'rgba(52,211,153,0.2)' : 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
                  color: sent ? '#34d399' : '#080c14',
                }}
              >
                {sent ? '✓ Message Sent!' : (<><FiSend size={16} /> Send Message</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
