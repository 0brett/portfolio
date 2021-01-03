import Link from 'components/Link'
import Icon from 'components/Icon'
import sitemap from 'lib/sitemap'

const curYear = new Date().getFullYear()

export default function Footer() {
  const footerLinksStyles = 'flex justify-center'
  const footerLinkStyles = 'nav-link mx-2 my-1'

  return (
    <footer className="screen-container mt-16 md:mt-32 py-16">
      <nav
        className={'flex-wrap md:justify-start md:-ml-5.5 ' + footerLinksStyles}
        aria-label="Footer"
      >
        {sitemap.topLevel.map((url, idx) => (
          <Link key={idx} href={url.href} className={'px-3.5 ' + footerLinkStyles}>
            {url.title}
          </Link>
        ))}
      </nav>
      <div className="mt-4 md:flex md:items-center md:justify-between md:-ml-4.5">
        <div className={'md:order-1 ' + footerLinksStyles}>
          {sitemap.social.map((url, idx) => {
            var IconName: any = url.icon
            return (
              <Link key={idx} href={url.href} className={'px-2.5 ' + footerLinkStyles}>
                <Icon>
                  <span className="sr-only">{url.title}</span>
                  <IconName />
                </Icon>
              </Link>
            )
          })}
        </div>
        <div className="mt-6 md:mt-0 md:order-2">
          <p className="text-base sm:text-lg text-center text-gray-600">
            &copy; 2011-{curYear} Brett Flora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
