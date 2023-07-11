/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                '16': 'repeat(16, minmax(0, 1fr))',
                '18': 'repeat(18, minmax(0, 1fr))',
            },
            gridRow: {
                'span-12': 'span 12 / span 12',
                'span-14': 'span 14 / span 14',
                'span-16': 'span 16 / span 16',
                'span-20': 'span 20 / span 20',
            }
        },
    },
    plugins: [],
}

