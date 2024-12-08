import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#F4F2C9",
            accent: "#00AA4F",
            neutral: "#D9D9D9",
        },
        fontSize: {
            xxs: "16px",
            xs: "18px",
            sm: "20px",
            base: "22px",
            lg: "26px",
            xl: "32px",
            "2xl": "46px",
            "3xl": "70px",
            "4xl": "110px",
        },
    },
    plugins: [],
} satisfies Config;
