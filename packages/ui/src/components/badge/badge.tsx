import React from 'react'
import { IconType } from 'react-icons'
import { tv, VariantProps } from 'tailwind-variants'

const badge = tv({
  base: 'border rounded-xl px-2 h-5 bg-opacity-5 flex items-center justify-between gap-1 text-4xl',
  slots: {
    icon: '',
    label: 'text-xs sm:text-sm lowercase block grow',
  },
  variants: {
    variant: {
      primary: 'bg-primary border-primary text-primary',
      secondary: 'bg-secondary border-secondary text-secondary',
      success: 'bg-success border-success',
      info: 'bg-info border-info text-warn',
      warn: 'bg-warn border-warn text-warn',
      danger: 'bg-danger border-danger text-danger',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type BadgeProps = VariantProps<typeof badge> & {
  label: string
  icon?: IconType
}

export default function Badge({ label, icon: Icon, variant }: BadgeProps) {
  const { base, icon, label: labelStyles } = badge({ variant })

  return (
    <div className={base()}>
      {Icon && <Icon className={icon()} />}
      <span className={labelStyles()}>{label}</span>
    </div>
  )
}
