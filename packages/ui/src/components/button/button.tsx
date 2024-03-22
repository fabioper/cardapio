import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { IconType } from 'react-icons'

const button = tv({
  base: 'text-surface-a flex items-center whitespace-nowrap gap-2 disabled:text-surface-d disabled:bg-surface-c',
  slots: {
    label: 'font-bold grow',
    icon: '',
    rightItem: 'font-medium',
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: 'regular',
      className: { base: 'p-3' },
    },
    {
      iconOnly: true,
      className: 'rounded-full',
    },
    {
      variant: 'regular',
      status: 'primary',
      className: 'bg-primary hover:bg-primary-hover',
    },
    {
      variant: 'regular',
      status: 'secondary',
      className: 'bg-secondary hover:bg-secondary-hover',
    },
    {
      variant: 'regular',
      status: 'warn',
      className: 'bg-warn hover:bg-warn-hover',
    },
    {
      variant: 'regular',
      status: 'success',
      className: 'bg-success hover:bg-success-hover',
    },
    {
      variant: 'regular',
      status: 'info',
      className: 'bg-info hover:bg-info-hover',
    },
    {
      variant: 'regular',
      status: 'danger',
      className: 'bg-danger hover:bg-danger-hover',
    },
    {
      variant: 'text',
      status: 'primary',
      className: 'text-primary bg-transparent hover:bg-primary',
    },
    {
      variant: 'text',
      status: 'secondary',
      className: 'text-foreground bg-transparent hover:bg-foreground',
    },
    {
      variant: 'text',
      status: 'success',
      className: 'text-success bg-transparent hover:bg-success',
    },
    {
      variant: 'text',
      status: 'info',
      className: 'text-info bg-transparent hover:bg-info',
    },
    {
      variant: 'text',
      status: 'warn',
      className: 'text-warn bg-transparent hover:bg-warn',
    },
    {
      variant: 'text',
      status: 'danger',
      className: 'text-danger bg-transparent hover:bg-danger',
    },
    {
      variant: 'text',
      className: 'hover:bg-opacity-5 disabled:bg-transparent active:scale-110',
    },
    {
      variant: 'outlined',
      status: 'primary',
      className:
        'border-primary text-primary hover:bg-primary hover:bg-opacity-5',
    },
  ],
  variants: {
    variant: {
      regular: '',
      text: '',
      outlined: 'bg-transparent border',
    },
    status: {
      primary: '',
      secondary: '',
      success: '',
      info: '',
      warn: '',
      danger: '',
    },
    size: {
      regular: {
        base: 'px-5 py-3',
        icon: 'text-xl',
      },
      small: {
        base: 'py-1 px-2',
        icon: 'text-base',
        label: 'text-sm',
      },
    },
    iconOnly: {
      true: 'aspect-square rounded-full',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded',
    },
  },
  defaultVariants: {
    variant: 'regular',
    status: 'primary',
    size: 'regular',
  },
})

type ButtonProps = Omit<VariantProps<typeof button>, 'iconOnly'> & {
  icon?: IconType
  label?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  itemRight?: React.ReactNode
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'children'>

function Button({
  label,
  variant,
  size,
  className,
  icon: Icon,
  itemRight,
  rounded,
  status,
  ...props
}: ButtonProps) {
  const iconOnly = !label

  const {
    base,
    icon,
    label: labelStyles,
    rightItem,
  } = button({ size, variant, status, className, iconOnly, rounded })

  return (
    <button {...props} className={base({ className })}>
      {Icon && <Icon className={icon()} />}
      {label && <span className={labelStyles()}>{label}</span>}
      {itemRight && <span className={rightItem()}>{itemRight}</span>}
    </button>
  )
}

export default Button
