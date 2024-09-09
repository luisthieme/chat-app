import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgba(224,102,101,255)',
                secondary: 'rgba(80,80,90,255)',
                'secondary-highlighted': 'rgba(100,100,120,255)',
                background: 'rgba(51,51,61,255)',
                container: 'rgba(61,61,72,255)',
            },
        },
    },
    plugins: [],
};
export default config;
