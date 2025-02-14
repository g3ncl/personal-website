import type { Metadata } from "next";
import "./globals.scss";
import ParticlesBackground from "@/components/ParticlesBackground/ParticlesBackground";

export const metadata: Metadata = {
  title: "g3n.cl",
  description: "Welcome to my personal website",
};

// eslint-disable-next-line func-style, prefer-arrow/prefer-arrow-functions
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        <main>{children}</main>
      </body>
    </html>
  );
}
