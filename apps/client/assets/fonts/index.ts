import localFont from 'next/font/local'

export const sans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './Barlow/Barlow-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Barlow/Barlow-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Barlow/Barlow-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Barlow/Barlow-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Barlow/Barlow-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})
