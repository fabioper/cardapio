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
                primary: '#ffb438',
                secondary: '#636363',
                success: '#0EBA5D',
                info: '#0696FE',
                warn: '#DBAB00',
                danger: '#F93434',
                'surface-a': '#f9f9f8',
                'surface-b': '#e1e1e1',
                'surface-c': '#D9D9D9',
                'surface-d': '#999',
                'surface-e': '#666',
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
