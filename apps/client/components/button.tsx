import React, { ReactElement } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'text-base flex items-center whitespace-nowrap gap-2 text-white rounded-md',
  compoundVariants: [
    {
      iconOnly: false,
      size: 'regular',
      className: 'text-base',
    },
    {
      iconOnly: false,
      size: 'small',
      className: 'text-sm',
    },
    {
      iconOnly: true,
      className: 'p-2',
    },
    {
      iconOnly: true,
      size: 'regular',
      className: 'text-xl',
    },
    {
      iconOnly: true,
      size: 'small',
      className: 'text-base',
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
    iconOnly: {
      true: 'aspect-square rounded-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'regular',
  },
})

const textButton = tv({
  extend: button,
  base: 'hover:bg-opacity-5',
  variants: {
    variant: {
      primary: 'text-primary bg-transparent hover:bg-primary',
      secondary: 'text-black bg-transparent hover:bg-secondary',
      success: 'text-success bg-transparent hover:bg-success',
      info: 'text-info bg-transparent hover:bg-info',
      warn: 'text-warn bg-transparent hover:bg-warn',
      danger: 'text-danger bg-transparent hover:bg-danger',
    },
  },
})

const outlinedButton = tv({
  extend: button,
  variants: {
    variant: {
      primary: 'text-primary bg-transparent border border-primary',
      secondary: 'text-black bg-transparent border border-secondary',
      success: 'text-success bg-transparent border border-success',
      info: 'text-info bg-transparent border border-info',
      warn: 'text-warn bg-transparent border border-warn',
      danger: 'text-danger bg-transparent border border-danger',
    },
  },
})

type ButtonProps = Omit<VariantProps<typeof button>, 'iconOnly'> & {
  icon?: ReactElement | string
  text?: boolean
  className?: string
  label?: string
  outlined?: boolean
}

export default function Button({
  label,
  variant,
  size,
  text,
  outlined,
  className,
  icon: ItemLeft,
}: ButtonProps) {
  const styles = text ? textButton : outlined ? outlinedButton : button

  return (
    <button className={styles({ size, variant, className, iconOnly: !label })}>
      {ItemLeft}
      {label && <span className="w-full font-semibold">{label}</span>}
    </button>
  )
}
