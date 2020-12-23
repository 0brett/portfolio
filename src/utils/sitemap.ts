type Url = {
  href: string
  title: string
}

type Urls = {
  [key: string]: Url[]
}

const sitemap: Urls = {
  topLevel: [
    {
      href: '/',
      title: 'Homepage'
    },
    {
      href: '/projects',
      title: '/projects'
    },
    {
      href: '/writing',
      title: '/writing'
    },
    {
      href: '/days-of-code',
      title: '#100DaysOfCode'
    },
    {
      href: '/dsgn',
      title: '/dsgn'
    }
  ]
}

export default sitemap
