import type { Config } from 'tailwindcss'
import * as path from 'path'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    path.join(
      path.dirname(require.resolve('@cardapio/ui/components')),
      '**/*.{js,ts,jsx,tsx,mdx}',
    ),
  ],
  theme: {},
  presets: [require('@cardapio/tailwind-preset')],
}

export default config
