'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// ─── ADD MORE PROJECTS HERE EASILY ───────────────────────────
const projects = [
  {
    title: 'Demo E-commerce Platform',
    description:
      'A full-stack e-commerce demo with separate admin and user panels — Next.js storefront with cart, wishlist, and orders; React/Vite admin dashboard for managing products, orders, and users; Node.js REST APIs with authentication, Redis caching, and file uploads.',
    tags: ['TypeScript', 'Next.js', 'Node.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/dabhi-NB/Demo-ecommerce',
    live: null,
    featured: true,
    badge: 'Full Stack Project',
    badgeColor: '#34d399',
  },
  {
    title: 'RV Mobile Solution',
    description:
      'A large-scale full-stack MERN application built at Lembits. Includes admin panel, user panel, and multiple complex functionalities. Worked on live production environment with RESTful APIs, authentication, and database management.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js'],
    github: 'https://github.com/dabhi-NB',
    live: null,
    featured: true,
    badge: 'My Project',
    badgeColor: '#38bdf8',
  },
  {
    title: 'Real Pizza',
    description:
      'A dynamic food-ordering platform built with PHP & MySQL. Features menu browsing, cart management, and order placement with full database integration. Developed collaboratively in a team.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/dabhi-NB/Real-Pizza',
    live: null,
    featured: false,
    badge: 'Team Project',
    badgeColor: '#f472b6',
  },
  {
    title: 'Live Thoughts',
    description:
      'A thoughts-sharing social platform built with PHP. Users can post, browse, and interact with thoughts. Clean UI with backend support and user authentication.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/dabhi-NB/Lives_Thoughts',
    live: null,
    featured: false,
    badge: 'Solo Project',
    badgeColor: '#a78bfa',
  },
]
// ─────────────────────────────────────────────────────────────

// Reusable ProjectCard component
function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`glass rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:scale-[1.02] ${project.featured ? 'md:col-span-2' : ''
        }`}
      style={{
        border: project.featured
          ? '1px solid rgba(56,189,248,0.25)'
          : '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(56,189,248,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          {project.badge && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium mb-2 inline-block"
              style={{ background: `${project.badgeColor}18`, color: project.badgeColor }}
            >
              {project.badge}
            </span>
          )}
          <h3
            className="font-bold text-lg text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {project.title}
          </h3>
        </div>
        <div className="flex gap-2 ml-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              aria-label="GitHub Repository"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              aria-label="Live Demo"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--muted)' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md"
            style={{ background: 'rgba(56,189,248,0.08)', color: 'var(--cyan)', border: '1px solid rgba(56,189,248,0.15)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" className="py-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <span className="cyan-text text-sm font-semibold tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="section-title">My Work</h2>
          </div>
          <a
            href="https://github.com/dabhi-NB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <FiGithub size={16} />
            View all on GitHub →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
