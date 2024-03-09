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
} & Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'children'>

type ButtonBaseProps<T extends (...args: any) => any = typeof button> =
  ButtonProps<T> & {
    styles: any
  }

const button = tv({
  base: `
    text-xs sm:text-sm md:text-base
    text-surface-a
    flex
    items-center
    whitespace-nowrap
    gap-2
    rounded
    disabled:text-surface-d disabled:bg-surface-c
  `,
  compoundVariants: [
    {
      iconOnly: true,
      className: 'p-2 sm:p-2 lg:p-2 text-xl sm:text-xl md:text-xl',
    },
    {
      iconOnly: true,
      size: 'small',
      className: 'text-xs sm:text-sm md:text-sm',
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
      regular: 'p-2 p-2 sm:py-3 sm:px-5',
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
  base: 'hover:bg-opacity-5 disabled:bg-transparent',
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

const outlinedButton = tv({
  extend: button,
  variants: {
    variant: {
      primary: 'text-primary bg-transparent border border-primary',
      secondary: 'text-foreground bg-transparent border border-secondary',
      success: 'text-success bg-transparent border border-success',
      info: 'text-info bg-transparent border border-info',
      warn: 'text-warn bg-transparent border border-warn',
      danger: 'text-danger bg-transparent border border-danger',
    },
  },
})

function ButtonBase({
  label,
  variant,
  size,
  className,
  styles,
  icon: ItemLeft,
  ...props
}: ButtonBaseProps) {
  return (
    <button
      {...props}
      className={styles({ size, variant, className, iconOnly: !label })}
    >
      {ItemLeft && <ItemLeft className={label && 'text-2xl'} />}
      {label && <span className="w-full font-bold uppercase">{label}</span>}
    </button>
  )
}

function Button(props: ButtonProps<typeof button>) {
  return <ButtonBase {...props} styles={button} />
}

function ButtonText(props: ButtonProps<typeof textButton>) {
  return <ButtonBase {...props} styles={textButton} />
}

function ButtonOutlined(props: ButtonProps<typeof outlinedButton>) {
  return <ButtonBase {...props} styles={outlinedButton} />
}

Button.Text = ButtonText
Button.Outlined = ButtonOutlined

export default Button
