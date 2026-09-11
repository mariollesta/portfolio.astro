// tailwind.config.mjs
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#171717",
                "on-primary": "#ffffff",
                ink: "#171717",
                body: "#525252",
                mute: "#737373",
                canvas: {
                    DEFAULT: "#ffffff",
                    soft: "#fafafa",
                },
                hairline: "#eaeaea",
                accent: {
                    DEFAULT: "#16a34a",
                    deep: "#15803d",
                    soft: "#dcfce7",
                },
                error: "#dc2626",
                warning: "#d97706",
            },
            borderRadius: {
                sm: "6px",
                md: "8px",
                lg: "12px",
                pill: "9999px",
            },
        },
    },
    plugins: [],
};
