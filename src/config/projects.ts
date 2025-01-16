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
    name: 'Customer-relationship Management System',
    description:
      'I developed a web platform that is a wrapper over the Microsoft Dynamics CRM system written using ASP.NET MVC, jQuery, Entity Framework, MS SQL, Windows Service, Quartz.NET.',
    link: {
      href: '/',
      label: 'Customer-relationship Management System',
    },
    logo: '/images/icon/opal.png',
    category: ['Website'],
    tags: ['Customer-relationship'],
  },
  {
    name: 'Mining Work Management Project',
    description:
      'I built a management project aimed at arranging employees work schedules. I developed it with ASP.NET Web API on the back end and Next JS and React on the front end. I used RavenDB to store data and DevExpress to generate multiple reports. ',
    link: {
      href: 'redbubble.com',
      label: 'Redbubble',
    },
    logo: '/images/icon/red.png',
    category: ['Website'],
    techStack: ['React.js', 'PWA', 'WebPack'],
    tags: ['Management'],
  },
  {
    name: 'Healthcare Project',
    description:
      'I built a healthcare project aimed at arranging remote treatments. The system contained web service and mobile apps for both Android and iOS. The technology stack used included: ASP.NET MVC, ASP.NET Web API, HTML, CSS, JavaScript, jQuery, and Azure Queue that was used to unload the system.',
    link: { href: 'downeastcapital.com', label: 'Downeast Capital' },
    logo: '/images/icon/downeast.svg',
    category: ['Website'],
    techStack: ['Vue.js', 'ASW3', 'WebPack'],
    tags: ['Healthcare'],
  },
]
