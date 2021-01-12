import { IconContext, IconBaseProps } from 'react-icons'
import cn from 'clsx'

type MyIconProps = {
  w?: string
  h?: string
} & IconContext &
  IconBaseProps

export default function Icon(props: MyIconProps) {
  const { w = 'w-6', h = 'h-6', className, ...rest } = props
  return (
    <IconContext.Provider
      value={{
        size: '100%',
        className: cn(w, h, className)
      }}
      {...rest}
    />
  )
}
