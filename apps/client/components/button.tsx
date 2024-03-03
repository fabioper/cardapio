import React, { ReactElement } from 'react'
import clsx from 'clsx'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warn' | 'danger'
  leftItem?: ReactElement | string
  rightItem?: ReactElement | string
  fill?: boolean
  size?: 'regular' | 'small'
  outlined?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'regular',
  fill,
  outlined,
  leftItem: LeftItem,
  rightItem: RightItem,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'text-sm flex items-center whitespace-nowrap gap-2',
        props.className,
        {
          'bg-[#F97B34] text-white': !outlined && variant === 'primary',
          'bg-[#0696FE] text-white': !outlined && variant === 'info',
          'bg-[#636363] text-white': !outlined && variant === 'secondary',
          'bg-[#0EBA5D] text-white': !outlined && variant === 'success',
          'bg-[#DBAB00] text-white': !outlined && variant === 'warn',
          'bg-[#F93434] text-white': !outlined && variant === 'danger',
          'bg-opacity-5 border': outlined,
          'border-[#F97B34] text-[#F97B34] bg-[#F97B34]':
            outlined && variant === 'primary',
          'border-[#0696FE] text-[#0696FE] bg-[#0696FE]':
            outlined && variant === 'info',
          'border-[#E0E0E0] text-black bg-black':
            outlined && variant === 'secondary',
          'border-[#0EBA5D] text-[#0EBA5D] bg-[#0EBA5D]':
            outlined && variant === 'success',
          'border-[#DBAB00] text-[#DBAB00] bg-[#DBAB00]':
            outlined && variant === 'warn',
          'border-[#F93434] text-[#F93434] bg-[#F93434]':
            outlined && variant === 'danger',
          'w-full': fill,
          'rounded-md': !fill,
          'py-3 px-5': size === 'regular',
          'py-1 px-2': size === 'small',
        },
      )}
    >
      {LeftItem}
      <span className="w-full">{children}</span>
      {RightItem}
    </button>
  )
}
