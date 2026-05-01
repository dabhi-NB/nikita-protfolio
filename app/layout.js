import './globals.css'

export const metadata = {
  title: 'Dabhi Nikita — Full Stack Developer',
  description: 'MERN Stack Developer specializing in React.js, Node.js, Next.js and modern web solutions.',
  keywords: ['MERN Stack', 'React', 'Next.js', 'Full Stack Developer', 'Nikita Dabhi'],
  openGraph: {
    title: 'Dabhi Nikita — Full Stack Developer',
    description: 'MERN Stack Developer building scalable, modern web applications.',
    url: 'https://your-portfolio.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}