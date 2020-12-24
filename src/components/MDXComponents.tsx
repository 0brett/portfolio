import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Container from 'components/Container'

function Wrapper({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}

export default function MDXComponents({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={{ wrapper: Wrapper }}>{children}</MDXProvider>
}
