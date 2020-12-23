import * as React from 'react'

type ProseProps = {
  children: React.ReactNode
}

export default function Prose({ children }: ProseProps) {
  return <main className="prose dark:prose-dark sm:prose-lg">{children}</main>
}
