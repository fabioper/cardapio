import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
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
                    DEFAULT: '#ffb438',
                    hover: '#ffa71d',
                },
                secondary: {
                    DEFAULT: '#636363',
                    hover: '#636363'
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
                    a: '#f9f9f8',
                    b: '#e1e1e1',
                    c: '#D9D9D9',
                    d: '#999',
                    e: '#666',
                },
                foreground: '#000000'
            },
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(100px, 1fr))'
            }
        },
    },
    plugins: [],
}
export default config
