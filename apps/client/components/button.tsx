import React, { ReactElement } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'text-base flex items-center whitespace-nowrap gap-2 text-white',
  compoundVariants: [
    {
      size: 'regular',
      className: 'text-base',
    },
    {
      size: 'small',
      className: 'text-sm',
    },
  ],
  variants: {
    variant: {
      primary: 'bg-[#F97B34]',
      secondary: 'bg-[#636363]',
      success: 'bg-[#0EBA5D]',
      info: 'bg-[#0696FE]',
      warn: 'bg-[#DBAB00]',
      danger: 'bg-[#F93434]',
    },
    size: {
      regular: 'py-4 px-5',
      small: 'py-1 px-2',
    },
    fill: {
      true: 'w-full',
      false: 'rounded-md',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'regular',
  },
})

const outlinedButton = tv({
  extend: button,
  base: 'bg-opacity-5 border',
  variants: {
    variant: {
      primary: 'border-[#F97B34] text-[#F97B34] bg-[#F97B34]',
      secondary: 'border-[#E0E0E0] text-black bg-black',
      success: 'border-[#0EBA5D] text-[#0EBA5D] bg-[#0EBA5D]',
      info: 'border-[#0696FE] text-[#0696FE] bg-[#0696FE]',
      warn: 'border-[#DBAB00] text-[#DBAB00] bg-[#DBAB00]',
      danger: 'border-[#F93434] text-[#F93434] bg-[#F93434]',
    },
  },
})

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    leftItem?: ReactElement | string
    rightItem?: ReactElement | string
    outlined?: boolean
  }

export default function Button({
  children,
  variant,
  size,
  fill,
  outlined,
  leftItem: LeftItem,
  rightItem: RightItem,
  ...props
}: ButtonProps) {
  const styles = outlined ? outlinedButton : button

  return (
    <button
      {...props}
      className={styles({ size, variant, fill, className: props.className })}
    >
      {LeftItem}
      <span className="w-full">{children}</span>
      {RightItem}
    </button>
  )
}
