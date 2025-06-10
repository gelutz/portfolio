import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["InterVariable", ...fontFamily.sans],
            },
            colors: {
                "vermelho": "#ff3333",
                "vermelho-escuro": "#c60000",
                "branco": "#f8fffb",
                "preto": "#0a0a0a",
                "cinza": "#232323",
                "cinza-claro": "#E2E2E2"
            }
        },
    },
    plugins: [],
} satisfies Config;
