import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { IconType } from 'react-icons'

type ButtonProps<T extends (...args: any) => any> = Omit<
  VariantProps<T>,
  'iconOnly'
> & {
  icon?: IconType
  label?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  itemRight?: React.ReactNode
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'children'>

type ButtonBaseProps<T extends (...args: any) => any = typeof button> =
  ButtonProps<T> & {
    styles: typeof button | typeof textButton
  }

const button = tv({
  base: `
    text-surface-a
    flex
    items-center
    whitespace-nowrap
    gap-2
    rounded
    disabled:text-surface-d disabled:bg-surface-c
  `,
  slots: {
    label: 'font-bold',
    icon: '',
    rightItem: 'font-medium',
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: 'regular',
      className: {
        base: 'p-3',
      },
    },
  ],
  variants: {
    variant: {
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
      },
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
  base: 'hover:bg-opacity-5 disabled:bg-transparent active:scale-110',
  variants: {
    variant: {
      primary: 'text-primary bg-transparent hover:bg-primary',
      secondary: 'text-foreground bg-transparent hover:bg-secondary',
      success: 'text-success bg-transparent hover:bg-success',
      info: 'text-info bg-transparent hover:bg-info',
      warn: 'text-warn bg-transparent hover:bg-warn',
      danger: 'text-danger bg-transparent hover:bg-danger',
    },
  },
})

function ButtonBase({
  label,
  variant,
  size,
  className,
  styles,
  icon: Icon,
  itemRight,
  ...props
}: ButtonBaseProps) {
  const iconOnly = !label

  const {
    base,
    icon,
    label: labelStyles,
    rightItem,
  } = styles({ size, variant, className, iconOnly })

  return (
    <button {...props} className={base()}>
      {Icon && <Icon className={icon()} />}
      {label && <span className={labelStyles()}>{label}</span>}
      {itemRight && <span className={rightItem()}>{itemRight}</span>}
    </button>
  )
}

function Button(props: ButtonProps<typeof button>) {
  return <ButtonBase {...props} styles={button} />
}

function ButtonText(props: ButtonProps<typeof textButton>) {
  return <ButtonBase {...props} styles={textButton} />
}

Button.Text = ButtonText

export default Button
