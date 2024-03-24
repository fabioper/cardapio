import React, { useMemo } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { IconType } from 'react-icons'

const button = tv({
  base: 'relative text-surface-a flex items-center whitespace-nowrap gap-2 disabled:text-surface-d disabled:bg-surface-c hover:-translate-y-0.5 transition-all',
  slots: {
    label: 'font-bold grow',
    icon: '',
    rightItem: 'font-medium',
    badge:
      'absolute -top-1 -right-1 font-bold text-xs px-1 flex items-center justify-center h-4 leading-none aspect-square rounded-full',
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: 'regular',
      className: { base: 'p-3', badge: '-top-0.5 -right-0.5' },
    },
    {
      iconOnly: true,
      className: 'rounded-full',
    },
  ],
  variants: {
    status: {
      primary: {
        base: 'bg-primary hover:bg-primary-hover',
        badge: 'bg-foreground text-surface-a border-primary',
      },
      secondary: {
        base: 'bg-secondary hover:bg-secondary-hover',
        badge: 'bg-foreground text-surface-a border-primary',
      },
      success: {
        base: 'bg-success hover:bg-success-hover',
        badge: 'bg-foreground text-success border-primary',
      },
      info: {
        base: 'bg-info hover:bg-info-hover',
        badge: 'bg-foreground text-info border-primary',
      },
      warn: {
        base: 'bg-warn hover:bg-warn-hover',
        badge: 'bg-foreground text-warn border-primary',
      },
      danger: {
        base: 'bg-danger hover:bg-danger-hover',
        badge: 'bg-foreground text-danger border-primary',
      },
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
    status: 'primary',
    size: 'regular',
    rounded: false,
  },
})

const textButton = tv({
  base: 'bg-transparent hover:bg-opacity-5 disabled:bg-transparent active:scale-110',
  extend: button,
  variants: {
    status: {
      primary: {
        base: 'text-primary bg-transparent hover:bg-primary',
        badge: 'bg-primary',
      },
      secondary: {
        base: 'text-foreground bg-transparent hover:bg-foreground',
        badge: 'bg-secondary',
      },
      success: {
        base: 'text-success bg-transparent hover:bg-success',
        badge: 'bg-success text-surface-a',
      },
      info: {
        base: 'text-info bg-transparent hover:bg-info',
        badge: 'bg-info text-surface-a',
      },
      warn: {
        base: 'text-warn bg-transparent hover:bg-warn',
        badge: 'bg-warn text-surface-a',
      },
      danger: {
        base: 'text-danger bg-transparent hover:bg-danger',
        badge: 'bg-danger text-surface-a',
      },
    },
    size: {
      regular: {
        badge: '!top-1 !right-0.5 border-2 border-surface-a',
      },
      small: {
        badge: '!-top-0 !-right-0.5 border-2 border-surface-a',
      },
    },
  },
})

const outlinedButton = tv({
  base: 'border',
  extend: button,
  variants: {
    status: {
      primary: {
        base: 'bg-transparent border-primary text-primary hover:bg-primary hover:bg-opacity-5',
        badge: 'bg-primary text-surface-a',
      },
      secondary: {
        base: 'bg-transparent border-secondary text-secondary hover:bg-secondary hover:bg-opacity-5',
        badge: 'bg-secondary text-surface-a',
      },
      success: {
        base: 'bg-transparent border-success text-success hover:bg-success hover:bg-opacity-5',
        badge: 'bg-success text-surface-a',
      },
      info: {
        base: 'bg-transparent border-info text-info hover:bg-info hover:bg-opacity-5',
        badge: 'bg-info text-surface-a',
      },
      warn: {
        base: 'bg-transparent border-warn text-warn hover:bg-warn hover:bg-opacity-5',
        badge: 'bg-warn text-surface-a',
      },
      danger: {
        base: 'bg-transparent border-danger text-danger hover:bg-danger hover:bg-opacity-5',
        badge: 'bg-danger text-surface-a',
      },
    },
  },
})

const filledButton = tv({
  base: '',
  extend: button,
  variants: {
    status: {
      primary: {
        base: 'bg-primary bg-opacity-5 text-primary hover:bg-opacity-10',
        badge: 'bg-primary text-surface-a',
      },
      secondary: {
        base: 'bg-secondary bg-opacity-5 text-secondary hover:bg-opacity-10',
        badge: 'bg-secondary text-surface-a',
      },
      success: {
        base: 'bg-success bg-opacity-5 text-success hover:bg-opacity-10',
        badge: 'bg-success text-surface-a',
      },
      info: {
        base: 'bg-info bg-opacity-5 text-info hover:bg-opacity-10',
        badge: 'bg-info text-surface-a',
      },
      warn: {
        base: 'bg-warn bg-opacity-5 text-warn hover:bg-opacity-10',
        badge: 'bg-warn text-surface-a',
      },
      danger: {
        base: 'bg-danger bg-opacity-5 text-danger hover:bg-opacity-10',
        badge: 'bg-danger text-surface-a',
      },
    },
  },
})

type ButtonProps = Omit<VariantProps<typeof button>, 'iconOnly'> & {
  icon?: IconType
  label?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  itemRight?: React.ReactNode
  variant?: 'regular' | 'text' | 'outlined' | 'filled'
  badge?: string | number
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'children'>

function Button({
  label,
  size,
  className,
  icon: Icon,
  itemRight,
  status,
  variant = 'regular',
  rounded = false,
  badge,
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
    badge: badgeStyles,
  } = styles({ size, status, className, rounded, iconOnly })

  return (
    <button {...props} className={base({ className })}>
      {Icon && <Icon className={icon()} />}
      {label && <span className={labelStyles()}>{label}</span>}
      {itemRight && <span className={rightItem()}>{itemRight}</span>}
      {badge && <span className={badgeStyles()}>{badge}</span>}
    </button>
  )
}

export default Button
