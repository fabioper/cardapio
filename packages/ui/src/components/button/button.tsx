import React, { useMemo } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { IconType } from 'react-icons'

const button = tv({
  base: 'text-surface-a flex items-center whitespace-nowrap gap-2 disabled:text-surface-d disabled:bg-surface-c rounded hover:-translate-y-0.5 transition-all',
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
  ],
  variants: {
    status: {
      primary: 'bg-primary hover:bg-primary-hover',
      secondary: 'bg-secondary hover:bg-secondary-hover',
      success: 'bg-success hover:bg-success-hover',
      info: 'bg-info hover:bg-info-hover',
      warn: 'bg-warn hover:bg-warn-hover',
      danger: 'bg-danger hover:bg-danger-hover',
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
  },
  defaultVariants: {
    status: 'primary',
    size: 'regular',
  },
})

const textButton = tv({
  base: 'bg-transparent hover:bg-opacity-5 disabled:bg-transparent active:scale-110',
  extend: button,
  variants: {
    status: {
      primary: 'text-primary bg-transparent hover:bg-primary',
      secondary: 'text-foreground bg-transparent hover:bg-foreground',
      success: 'text-success bg-transparent hover:bg-success',
      info: 'text-info bg-transparent hover:bg-info',
      warn: 'text-warn bg-transparent hover:bg-warn',
      danger: 'text-danger bg-transparent hover:bg-danger',
    },
  },
})

const outlinedButton = tv({
  base: 'border',
  extend: button,
  variants: {
    status: {
      primary:
        'bg-transparent border-primary text-primary hover:bg-primary hover:bg-opacity-5',
      secondary:
        'bg-transparent border-secondary text-secondary hover:bg-secondary hover:bg-opacity-5',
      success:
        'bg-transparent border-success text-success hover:bg-success hover:bg-opacity-5',
      info: 'bg-transparent border-info text-info hover:bg-info hover:bg-opacity-5',
      warn: 'bg-transparent border-warn text-warn hover:bg-warn hover:bg-opacity-5',
      danger:
        'bg-transparent border-danger text-danger hover:bg-danger hover:bg-opacity-5',
    },
  },
})

const filledButton = tv({
  base: '',
  extend: button,
  variants: {
    status: {
      primary: 'bg-primary bg-opacity-5 text-primary hover:bg-opacity-10',
      secondary: 'bg-secondary bg-opacity-5 text-secondary hover:bg-opacity-10',
      success: 'bg-success bg-opacity-5 text-success hover:bg-opacity-10',
      info: 'bg-info bg-opacity-5 text-info hover:bg-opacity-10',
      warn: 'bg-warn bg-opacity-5 text-warn hover:bg-opacity-10',
      danger: 'bg-danger bg-opacity-5 text-danger hover:bg-opacity-10',
    },
  },
})

type ButtonProps = Omit<VariantProps<typeof button>, 'iconOnly'> & {
  icon?: IconType
  label?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  itemRight?: React.ReactNode
  variant?: 'regular' | 'text' | 'outlined' | 'filled'
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'children'>

function Button({
  label,
  variant = 'regular',
  size,
  className,
  icon: Icon,
  itemRight,
  status,
  ...props
}: ButtonProps) {
  const iconOnly = !label

  const styles = useMemo(() => {
    if (variant === 'text') return textButton
    if (variant === 'outlined') return outlinedButton
    if (variant === 'filled') return filledButton
    return button
  }, [variant])

  const {
    base,
    icon,
    label: labelStyles,
    rightItem,
  } = styles({ size, status, className, iconOnly })

  return (
    <button {...props} className={base({ className })}>
      {Icon && <Icon className={icon()} />}
      {label && <span className={labelStyles()}>{label}</span>}
      {itemRight && <span className={rightItem()}>{itemRight}</span>}
    </button>
  )
}

export default Button
