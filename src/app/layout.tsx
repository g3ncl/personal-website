import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

// Font files can be colocated inside of `app`
const font = localFont({
  src: "./fonts/Iosevka-Regular.woff2",
  display: "swap",
});

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
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
