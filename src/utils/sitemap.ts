import { Url } from 'my-types'

type Urls = {
  [key: string]: Url[]
}

const sitemap: Urls = {
  topLevel: [
    {
      href: '/',
      title: 'Home'
    },
    {
      href: '/projects',
      title: 'Projects'
    },
    {
      href: '/writing',
      title: 'Writing'
    },
    {
      href: '/days-of-code',
      title: '#100DaysOfCode'
    },
    {
      href: '/dsgn',
      title: 'DSGN'
    }
  ]
}

export default sitemap
