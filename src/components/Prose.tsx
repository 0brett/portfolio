import extend from 'lib/extend'
export default function Prose({ className, children }: React.HTMLProps<HTMLDivElement>) {
  const classNames = extend('prose sm:prose-lg md:prose-xl', className)
  return <article className={classNames}>{children}</article>
}
