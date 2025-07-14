import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'InterVariable',
                    ...fontFamily.sans
                ],
                ubuntu: [
                    'Ubuntu',
                    'sans-serif'
                ]
            },
            colors: {
                'vermelho': '#ff3333',
                'vermelho-escuro': '#c60000',
                'branco': '#f8fffb',
                'preto': '#0a0a0a',
                'cinza': '#232323',
                'cinza-claro': '#E2E2E2',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'scroll-up-slow': {
                    '0%': { transform: 'translateY(0px)' },
                    '100%': { transform: 'translateY(-20px)' }
                },
                'scroll-up-slower': {
                    '0%': { transform: 'translateY(0px)' },
                    '100%': { transform: 'translateY(-20px)' }
                }
            },
            animation: {
                'scroll-up-slow': 'scroll-up-slow 4s ease-in-out infinite alternate',
                'scroll-up-slower': 'scroll-up-slower 6s ease-in-out infinite alternate'
            }
        }
    },
    plugins: [
        function ({ addBase }: PluginAPI) {
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-Regular.ttf") format("truetype")',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-Italic.ttf") format("truetype")',
                    fontWeight: '400',
                    fontStyle: 'italic',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-Light.ttf") format("truetype")',
                    fontWeight: '300',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-LightItalic.ttf") format("truetype")',
                    fontWeight: '300',
                    fontStyle: 'italic',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-Medium.ttf") format("truetype")',
                    fontWeight: '500',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-MediumItalic.ttf") format("truetype")',
                    fontWeight: '500',
                    fontStyle: 'italic',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-Bold.ttf") format("truetype")',
                    fontWeight: '700',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                },
            });
            addBase({
                '@font-face': {
                    fontFamily: 'Ubuntu',
                    src: 'url("/assets/fonts/Ubuntu-BoldItalic.ttf") format("truetype")',
                    fontWeight: '700',
                    fontStyle: 'italic',
                    fontDisplay: 'swap',
                },
            });
        },
        require("tailwindcss-animate")
    ],
} satisfies Config;
