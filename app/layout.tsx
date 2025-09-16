// app/layout.tsx
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Pant — Portfolio",
  description: "Material 3 Expressive Portfolio - Software Test Engineer",
  keywords: ["Om Pant", "Software Testing", "Java", "Selenium", "API Testing", "Portfolio"],
  authors: [{ name: "Om Pant" }],
  creator: "Om Pant",
  openGraph: {
    title: "Om Pant — Portfolio",
    description: "Software Test Engineer in Training specializing in Java, Selenium, and API Testing",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/photo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem enableColorScheme>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
