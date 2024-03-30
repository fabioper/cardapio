import type {Config} from 'tailwindcss'
import * as path from "path";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        path.join(path.dirname(require.resolve('@cardapio/ui/components')), '**/*.{js,ts,jsx,tsx,mdx}'),
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)']
            },
            dropShadow: {
              'top': '0 0px 6px #e5e7eb'
            },
            colors: {
                primary: {
                    DEFAULT: '#FCBA28',
                    hover: '#ffa71d',
                },
                secondary: {
                    DEFAULT: '#00efab',
                    hover: '#00efab'
                },
                success: {
                    DEFAULT: '#0EBA5D',
                    hover: '#0EBA5D',
                },
                info: {
                    DEFAULT: '#0696FE',
                    hover: '#0696FE'
                },
                warn: {
                    DEFAULT: '#DBAB00',
                    hover: '#DBAB00'
                },
                danger: {
                    DEFAULT: '#F93434',
                    hover: '#F93434'
                },
                surface: {
                    a: '#0F0D0E',
                    b: '#1e1a1c',
                    c: '#231F20',
                    d: '#524e49',
                    e: '#6b6560',
                },
                foreground: '#F9F4DA'
            },
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(100px, 1fr))'
            }
        },
    },
    plugins: [plugin(function({addBase}) {
        addBase({
            'body': {
                '@apply font-sans bg-surface-a text-foreground': {},
            },
            /*'input,textarea': {
                '@apply bg-surface-c rounded p-2 focus:outline-1 focus:outline focus:outline-primary placeholder-surface-e hover:border hover:border-primary': {}
            },*/
            'button, input, optgroup, select, textarea': {
                '@apply text-base': {}
            }
        })
    })],
}
export default config
