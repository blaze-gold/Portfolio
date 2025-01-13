export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'

// personal info
export const name = 'David Chen'
export const headline =
  'Software engineer, Senior Full-Stack web developer (Focused on Frontend).'
export const introduction =
  'Skilled Full Stack developer with over 8 years of experience building dynamic web applications and scalable architectures. Proficient in transforming complex requirements into intuitive designs, collaborating with teams to deliver high-quality products. Passionate about combining creativity and technical expertise to build exceptional digital experiences.'
export const email = 'chenstar125@gmail.com'
export const githubUsername = '5shine1'

// about page
export const aboutMeHeadline =
  "I'm David Chen, a senior Full-Stack web developer based in Brooklyn, NY."
export const aboutParagraphs = [
  'I’m a web developer with over 10 years of experience specializing in building scalable, high-performance web applications.',
  'Over the years, I’ve worked across various industries, including eCommerce, health insurance, commodity management and so on.',
  'I’m passionate about building intuitive, user-focused applications and continuously improving workflows. I enjoy collaborating with teams to solve challenging problems.',
  'Technically, I have a strong command of front-end frameworks like React, Next.js, and TypeScript, combined with a solid understanding of back-end tools like Express.js and MySQL. I’ve consistently used these skills to build scalable applications, optimize workflows, and enhance user experiences.',
  'Beyond my technical abilities, I am passionate about continuous learning and problem-solving. I’m always looking to stay updated with the latest web technologies and trends.',
  "I'm working as a senior Full-Stack web developer based in Brooklyn, NY now",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about my life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/5shine1/Portfolio',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'git',
  'github',
  'androidstudio',
  'wechat',
  'tailwindcss',
  'vuedotjs',
  'mongodb',
  'css',
]
