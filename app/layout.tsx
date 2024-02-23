import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Ryori Base",
  description: "Cooking blog platform for people to post their cooking recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}