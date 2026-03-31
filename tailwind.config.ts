// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // DAFTARKAN WARNA DI SINI
      colors: {
        primary: "#1E3A8A",    // Biru Navy
        secondary: "#FACC15",  // Kuning Cerah
      },
    },
  },
  plugins: [],
};
export default config;