'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="cyan-text text-sm font-semibold tracking-widest uppercase mb-2 block">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              I'm a <span className="text-white font-semibold">Full Stack Developer</span> from Ahmedabad, Gujarat, specializing
              in the <span className="cyan-text font-semibold">MERN stack</span>. I graduated with a BCA from M.M. Ghodasara College
              with a CGPA of 8.44, and I've been building real-world web applications ever since.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              Currently working at <span className="text-white font-semibold">Lembits Technolab</span> where I develop full-stack
              applications, admin & user panels, and RESTful APIs. I've also worked with <span className="cyan-text">Next.js</span> and{' '}
              <span className="cyan-text">PostgreSQL</span> on live production projects.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              When I'm not coding, I'm exploring new technologies, traveling, or learning what's next in the world of web dev.
              I believe in writing <span className="text-white font-semibold">clean, maintainable code</span> and collaborating
              effectively with teams using Git workflows.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: <FiMapPin size={15} />, text: 'Ahmedabad, Gujarat — 380009', href: null },
                { icon: <FiMail size={15} />, text: 'dabhinikitab@gmail.com', href: 'mailto:dabhinikitab@gmail.com' },
                { icon: <FiPhone size={15} />, text: '+97271 62852', href: 'tel:+9727162852' },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="cyan-text">{icon}</span>
                  {href ? (
                    <a href={href} className="text-sm hover:text-[var(--cyan)] transition-colors" style={{ color: 'var(--muted)' }}>
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--muted)' }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
              Education
            </h3>
            {[
              {
                degree: 'BCA — Computer Science',
                college: 'M.M. Ghodasara College (Bhakt Kavi Narshi Mehta University)',
                year: '2022 – 2025',
                detail: 'CGPA: 8.44 | Final Sem SGPA: 8.83 | Percentage: 84.40%',
                highlight: true,
              },
              {
                degree: 'Higher Secondary (12th)',
                college: 'Gujarat Board',
                year: '2022',
                detail: 'Percentage: 71.71%',
              },
              {
                degree: 'Secondary (10th)',
                college: 'Gujarat Board',
                year: '2020',
                detail: 'Percentage: 65.33%',
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-5"
                style={{
                  border: edu.highlight ? '1px solid rgba(56,189,248,0.3)' : '1px solid var(--border)',
                }}
              >
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="font-bold text-sm text-white">{edu.degree}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'var(--cyan-dim)', color: 'var(--cyan)' }}>
                    {edu.year}
                  </span>
                </div>
                <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{edu.college}</p>
                <p className="text-xs font-medium cyan-text">{edu.detail}</p>
              </motion.div>
            ))}

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass rounded-2xl p-4" style={{ border: '1px solid var(--border)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted)' }}>Languages</p>
                {['English', 'Gujarati', 'Hindi'].map(l => (
                  <span key={l} className="inline-block text-xs px-2 py-0.5 rounded-md mr-1 mb-1" style={{ background: 'var(--surface)', color: 'var(--text)' }}>{l}</span>
                ))}
              </div>
              <div className="glass rounded-2xl p-4" style={{ border: '1px solid var(--border)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted)' }}>Interests</p>
                {['New Tech', 'Traveling', 'Coding'].map(l => (
                  <span key={l} className="inline-block text-xs px-2 py-0.5 rounded-md mr-1 mb-1" style={{ background: 'var(--surface)', color: 'var(--text)' }}>{l}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
