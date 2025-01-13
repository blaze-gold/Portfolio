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
    company: 'BCG Digital Ventures.',
    title: 'Senior Software Engineer',
    logo: 'instagram',
    start: '2022.3',
    end: 'Present',
  },
  {
    company: 'CommodityAI, Inc.',
    title: 'Senior Front-end React Developer',
    logo: 'bsky',
    start: '2020.8',
    end: '2022.2',
  },
  {
    company: 'Indigo Multimedia Ltd.',
    title: 'Front-end Developer',
    logo: 'wechat',
    start: '2017.1',
    end: '2020.7',
  },
  {
    company: 'Freelance',
    title: 'Web Developer',
    logo: 'discord',
    start: '2012.4',
    end: '2016.11',
  },
]
