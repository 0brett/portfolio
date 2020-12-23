import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Container from 'comps/Container'

export type MDXProps = {
  children: React.ReactNode
}

function Wrapper({ children }: MDXProps) {
  return <Container>{children}</Container>
}

export default function MDXComps({ children }: MDXProps) {
  return <MDXProvider components={{ wrapper: Wrapper }}>{children}</MDXProvider>
}
