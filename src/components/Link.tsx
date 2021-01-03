import * as React from 'react'
import NextLink from 'next/link'

export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string
}

export default function Link(props: LinkProps) {
  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <a {...props} />
      </NextLink>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
