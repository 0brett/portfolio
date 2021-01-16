import { IconType } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'

type Url = {
  href: string
  title?: string
  desc?: string
  icon?: IconType
  children?: React.ReactNode
}

type Urls = {
  [key: string]: Url[]
}

const sitemap: Urls = {
  topLevel: [
    {
      href: '/',
      title: 'Home'
    }
    // {
    //   href: '/projects',
    //   title: 'Projects'
    // },
    // {
    //   href: '/writing',
    //   title: 'Writing'
    // },
    // {
    //   href: '/days-of-code',
    //   title: '#100DaysOfCode'
    // },
    // {
    //   href: '/dsgn',
    //   title: 'DSGN'
    // }
  ],
  social: [
    {
      title: 'Twitter',
      href: 'https://twitter.com/1brett_/',
      icon: FaTwitter
    },
    {
      title: 'GitHub',
      href: 'https://github.com/01brett/',
      icon: FaGithubAlt
    },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/1brett/',
      icon: FaLinkedinIn
    }
  ]
}

export default sitemap
