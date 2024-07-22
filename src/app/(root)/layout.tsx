import type { Metadata } from "next";
import { SFPro } from "@/utils/customFont";
import "../globals.css";

export const metadata: Metadata = {
  title: "Chempion Social App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SFPro.variable}>
      <head />
      <body className={`h-screen ${SFPro.variable}`}>
        {children}
      </body>


    </html>
  );
}
