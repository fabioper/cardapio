import localFont from 'next/font/local'

export const sans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './Urbanist/Urbanist-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Urbanist/Urbanist-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Urbanist/Urbanist-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Urbanist/Urbanist-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Urbanist/Urbanist-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Urbanist/Urbanist-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Urbanist/Urbanist-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})
