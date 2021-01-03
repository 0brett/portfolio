export default function extend(base: string, target: string | undefined): string {
  const targetCheck = typeof target === 'string' ? ' ' + target : ''
  return base + targetCheck
}
