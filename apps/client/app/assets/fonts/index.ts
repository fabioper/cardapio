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
      path: './Barlow/Barlow-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Barlow/Barlow-BoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './Barlow/Barlow-Black.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Barlow/Barlow-BlackItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})
