import type { Config } from "tailwindcss";
import { mantine_tw_preset } from "./tailwind.mantine.preset";

const config: Config = {
  darkMode: ["class", '[data-mantine-color-scheme="dark"]'],
  presets: [mantine_tw_preset],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
export default config;
