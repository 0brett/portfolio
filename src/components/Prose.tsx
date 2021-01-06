import cn from 'classnames'
export default function Prose({ className, children }: React.HTMLProps<HTMLDivElement>) {
  return <article className={cn('prose sm:prose-lg md:prose-xl', className)}>{children}</article>
}
