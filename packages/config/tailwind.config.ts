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
            colors: {
                primary: '#EB5703',
                secondary: '#636363',
                success: '#0EBA5D',
                info: '#0696FE',
                warn: '#DBAB00',
                danger: '#F93434',
                border: '#F0F0F0',
                surface: '#D9D9D9'
            }
        },
    },
    plugins: [],
}
export default config
