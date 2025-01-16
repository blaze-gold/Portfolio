// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: 'Self-Employed',
    title: 'Full Stack Engineer',
    logo: 'instagram',
    start: '2024.1',
    end: 'Present',
  },
  {
    company: 'Online Freelance Agency',
    title: 'Lead Full Stack Developer',
    logo: 'bsky',
    start: '2020.8',
    end: '2023.12',
  },
  {
    company: 'DataArt',
    title: 'Full Stack Developer',
    logo: 'wechat',
    start: '2018.1',
    end: '2020.7',
  },
  {
    company: 'RMDY Health',
    title: 'Full Stack Developer',
    logo: 'discord',
    start: '2016.11',
    end: '2018.1',
  },
]
