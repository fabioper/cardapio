import React, { PropsWithChildren, ReactElement } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'text-base flex items-center whitespace-nowrap gap-2 text-white rounded-md',
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
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      info: 'bg-info',
      warn: 'bg-warn',
      danger: 'bg-danger',
    },
    size: {
      regular: 'py-4 px-5',
      small: 'py-1 px-2',
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

type ButtonProps = VariantProps<typeof button> &
  PropsWithChildren & {
    itemLeft?: ReactElement | string
    itemRight?: ReactElement | string
    outlined?: boolean
    className?: string
  }

export default function Button({
  children,
  variant,
  size,
  outlined,
  className,
  itemLeft: ItemLeft,
  itemRight: ItemRight,
}: ButtonProps) {
  const styles = outlined ? outlinedButton : button

  return (
    <button className={styles({ size, variant, className })}>
      {ItemLeft}
      <span className="w-full font-semibold">{children}</span>
      {ItemRight}
    </button>
  )
}
