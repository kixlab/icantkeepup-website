import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Can't Keep Up - CHI 2026",
  description: "Accessibility Barriers in Video-Based Learning for Individuals with Borderline Intellectual Functioning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
