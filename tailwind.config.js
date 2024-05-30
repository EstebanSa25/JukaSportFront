/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            colors: {
                Primary: '#007AFF',
                Secondary: '#34AAFF',
                White: '#FFFFFF',
                Black: '#11181C',
                DarkPrimary: '#00254D',
                LightPrimary: '#F8FAFD',
            },
            fontFamily: {
                ApplicationFont: "'Montserrat', sans-serif",
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    layout: {},
                    colors: {
                        foreground: '#00254D',
                        background: '#F8FAFD',
                        primary: {
                            DEFAULT: '#0303B5',
                            foreground: '#FFFF',
                        },
                        secondary: {
                            DEFAULT: '#0404e2',
                            foreground: '#FFFF',
                        },
                    },
                },
                dark: {
                    layout: {},
                    colors: {
                        primary: {
                            DEFAULT: '#F8FAFD',
                            foreground: '#11181C',
                        },
                        secondary: {
                            DEFAULT: '#F8FAFD',
                            foreground: '#11181C',
                        },
                    },
                },
            },
        }),
    ],
};
