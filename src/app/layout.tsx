import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이레오",
  description: "이레오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:image" content="/images/id1_cover.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
