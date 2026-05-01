'use client'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm" style={{ color: 'var(--muted)' }}>
          <span style={{ fontFamily: 'Syne, sans-serif' }}>nikita<span className="cyan-text">.</span>dev</span>
          {' '}— Built with Next.js & ❤️
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <FiGithub size={18} />, href: 'https://github.com/dabhi-NB', label: 'GitHub' },
            { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/dabhi-nikita', label: 'LinkedIn' },
            { icon: <FiMail size={18} />, href: 'mailto:dabhinikitab@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Dabhi Nikita. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
