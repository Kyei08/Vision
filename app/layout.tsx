import type { Metadata } from "next";
import { Geist, Geist_Mono,  Oswald  } from "next/font/google";
import "./globals.css";  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision",
  description: "Modern Developers Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable}`}>
        <div className=" bg-background text-foreground">
          <main className="">
            {children}
          </main>
        </div>   
      </body>
    </html>
  );
}
