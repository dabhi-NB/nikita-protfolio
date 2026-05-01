'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    color: '#38bdf8',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    category: 'Backend',
    color: '#f472b6',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'PHP', level: 65 },
      { name: 'Authentication', level: 78 },
    ],
  },
  {
    category: 'Database',
    color: '#a78bfa',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 72 },
      { name: 'PostgreSQL', level: 68 },
    ],
  },
  {
    category: 'Tools',
    color: '#34d399',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Version Control', level: 85 },
      { name: 'Deployment', level: 70 },
    ],
  },
]

const techBadges = [
  'React.js', 'Next.js', 'Node.js', 'Express.js',
  'MongoDB', 'MySQL', 'PostgreSQL', 'JavaScript',
  'HTML5', 'CSS3', 'Bootstrap', 'PHP', 'Git', 'GitHub',
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-10 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="cyan-text text-sm font-semibold tracking-widest uppercase mb-2 block">Technical Skills</span>
          <h2 className="section-title">My Toolbox</h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid var(--border)' }}
            >
              <h3
                className="font-bold text-sm uppercase tracking-widest mb-5"
                style={{ color: group.color, fontFamily: 'Syne, sans-serif' }}
              >
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-white">{skill.name}</span>
                      <span className="text-xs" style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.08, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${group.color}88, ${group.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>Technologies I work with</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                className="px-3 rounded-lg text-xs font-medium cursor-default transition-all duration-200"
                style={{
                  background: 'var(--surface)',
                  color: 'var(--muted)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--cyan)'
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'
                  e.currentTarget.style.background = 'var(--cyan-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
