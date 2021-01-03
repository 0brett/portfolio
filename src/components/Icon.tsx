import { IconContext, IconBaseProps } from 'react-icons'
import extend from 'lib/extend'

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
        className: extend(`${w} ${h}`, className)
      }}
      {...rest}
    />
  )
}
