import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  presets: [require('@cardapio/tailwind-preset')],
}

export default config
