import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F4F2C9",
                accent: "#00AA4F",
                neutral: "#D9D9D9",
            },
            screens: {
                xs: "390px",
            },
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
        boxShadow: {
            custom: "0px 0px 8px 0px #00AA4F",
            light: "0px 0px 4px 0px #00000040",
            dark: "0px 0px 4px 0px #00000073",
        },
    },
    plugins: [],
} satisfies Config;
