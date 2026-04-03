import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaka Kurnia | Junior Software Engineer", // Ganti biar makin pro!
  description: "Portfolio of Jaka Kurnia, a Full-stack Web and Mobile Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Tambahkan suppressHydrationWarning di sini
    <html lang="en" suppressHydrationWarning> 
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Akan ikutin settingan HP/Laptop lo pas awal buka
          enableSystem={true}
          disableTransitionOnChange // Tambahkan ini biar gak ada "flicker" putih pas refresh
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
