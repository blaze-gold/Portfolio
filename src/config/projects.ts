// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro =
  "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: 'Opal HealthCare',
    description:
      "E nhance its internal management portal for care staff, administrators, and residents' families.",
    link: {
      href: 'opalhealthcare.com.au',
      label: 'Opal HealthCare',
    },
    logo: '/images/icon/opal.png',
    category: ['Website'],
    techStack: ['PHP', 'Bootstrap', 'Shadcn/UI'],
    tags: ['Health Insurance'],
  },
  {
    name: 'Redbubble',
    description:
      'Redbubble uses React.js for its fast product loading and smooth interactions, making the shopping process seamless.',
    link: {
      href: 'redbubble.com',
      label: 'Redbubble',
    },
    logo: '/images/icon/red.png',
    category: ['Website'],
    techStack: ['React.js', 'PWA', 'WebPack'],
    tags: ['eCommerce'],
  },
  {
    name: 'Downeast Capital',
    description:
      'Downeast Capital is to streamline investment management, improve client interactions, and provide better reporting tools for business transitions and growth.',
    link: { href: 'downeastcapital.com', label: 'Downeast Capital' },
    logo: '/images/icon/downeast.svg',
    category: ['Website'],
    techStack: ['Vue.js', 'ASW3', 'WebPack'],
    tags: ['Mortgage'],
  },
  {
    name: 'Turn2Me',
    description:
      'Turn2Me.ie wanted to improve communication between clients and therapists by implementing a secure, real-time messaging system.',
    link: { href: 'turn2me.ie', label: 'Turn2Me' },
    logo: '/images/icon/turn2me.png',
    category: ['Website'],
    techStack: ['PHP', 'WordPress', 'MySQL'],
    tags: ['Real-time messaing system'],
  },
  {
    name: 'Eatry ',
    description:
      'Eatry is an online food vendor marketplace and eCommerce solution.',
    link: { href: 'www.eatry.au', label: 'Eatry ' },
    logo: '/images/icon/logo512.png',
    category: ['Website'],
    techStack: ['React', 'TailwindCSS', 'PWA'],
    tags: ['Marketplace'],
  },
]
