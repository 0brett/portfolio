import * as React from 'react'

type ProseProps = {
  className?: string
  children: React.ReactNode
}

export default function Prose({ className, children }: ProseProps) {
  return <main className={`prose dark:prose-dark sm:prose-lg ${className}`}>{children}</main>
}
