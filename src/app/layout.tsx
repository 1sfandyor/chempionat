import type { Metadata } from "next";
import { SFPro } from "@/utils/customFont";
import "./globals.css";
import { ThemeProvider } from "@/Provider/themeProvider";

export const metadata: Metadata = {
  title: "Chempion Social App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SFPro.variable} suppressHydrationWarning>
      <head />
      <body className={`h-screen ${SFPro.variable}`} suppressHydrationWarning>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
