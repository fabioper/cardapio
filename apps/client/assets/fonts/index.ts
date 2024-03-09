import { Outfit as FontFamily } from 'next/font/google'

export const sans = FontFamily({
  variable: '--font-sans',
  weight: ['400', '500', '700'],
  adjustFontFallback: true,
  subsets: ['latin'],
})
