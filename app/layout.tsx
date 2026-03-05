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
      <body>{children}</body>
    </html>
  );
}
