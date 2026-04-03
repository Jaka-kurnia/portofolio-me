// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Wajib untuk toggle manual
  content: [
    // Jika lo pakai folder src:
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Cadangan jika folder lo ada di root (tanpa src):
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",    // Biru Navy
        secondary: "#FACC15",  // Kuning Cerah
        // Tambahin warna khusus Dark Mode lo di sini biar manggilnya gampang
        dark: {
          bg: "#0B1120",       // Navy Deep untuk Background
          card: "#1E293B",     // Slate untuk Card
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
    },
  },
  plugins: [],
};
export default config;