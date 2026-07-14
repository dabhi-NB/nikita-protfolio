'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Lembits Technolab Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'August 2025 – Present',
    type: 'Full Time',
    color: '#38bdf8',
    points: [
      'Developing scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Building admin panels and user panels with complex role-based functionalities.',
      'Working on live production projects with Next.js and PostgreSQL integration.',
      'Designing and managing RESTful APIs and backend server architecture.',
      'Implementing authentication, authorization, and database optimization.',
      'Collaborating with team using Git/GitHub following clean coding practices.',
    ],
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'ExcelPTP',
    location: 'Ahmedabad',
    period: 'April 2025 – July 2025',
    type: '4 Month Internship',
    color: '#f472b6',
    points: [
      'Built responsive user interfaces using React.js, HTML, CSS, and Bootstrap.',
      'Developed backend APIs and integrated them with the frontend.',
      'Performed CRUD operations and database schema design in MongoDB.',
      'Worked on authentication modules and form validations.',
      'Used Git/GitHub for version control and team collaboration.',
    ],
  },
]

const certifications = [
  { name: 'MERN Stack Development', org: 'Lembits Technology', duration: '3 Months' },
  { name: 'MERN Stack Development', org: 'ExcelPTP', duration: '6 Months' },
  { name: 'Security Fundamentals', org: 'Vault-Tec Security', duration: '1 Month' },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="cyan-text text-sm font-semibold tracking-widest uppercase  block">Career</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--cyan), #a78bfa, #f472b6, transparent)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    background: exp.color,
                    borderColor: 'var(--bg)',
                    boxShadow: `0 0 12px ${exp.color}88`,
                  }}
                />

                <div
                  className="glass rounded-2xl p-6"
                  style={{ border: `1px solid ${exp.color}22` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-sm" style={{ color: exp.color }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: `${exp.color}18`, color: exp.color }}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            <FiBriefcase className="cyan-text" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="glass rounded-xl p-4"
                style={{ border: '1px solid var(--border)' }}
              >
                <p className="font-semibold text-sm text-white mb-1">{cert.name}</p>
                <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{cert.org}</p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--cyan-dim)', color: 'var(--cyan)' }}
                >
                  {cert.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
