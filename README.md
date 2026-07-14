# Nikita Dabhi — Portfolio (Next.js)

## Project Structure
```
my-portfolio/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── public/
│   └── nikita.jpg        ← APNI IMAGE YAHAN RAKHNA
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Setup Steps

### 1. Create Next.js Project
```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
```
Options choose karna:
- TypeScript → No
- ESLint → Yes
- Tailwind CSS → Yes
- src/ directory → No
- App Router → Yes
- Customize import alias → No

### 2. Install Dependencies
```bash
npm install framer-motion react-icons
```

### 3. Files Replace/Create
Neeche diye gaye SAARE files ko apne project mein copy karo (exact paths follow karo).

### 4. Image Add Karo
Apni photo ko `public/nikita.jpg` naam se save karo.

### 5. Run Karo
```bash
npm run dev
```
Browser mein kholo: http://localhost:3000

### 6. Vercel pe Deploy Karo
```bash
npm install -g vercel
vercel
```
Ya GitHub pe push karo aur vercel.com pe import karo.

## Resume
`public/` folder mein `Dabhi-Nikita.pdf` rakhna — download button usi ko link karega.