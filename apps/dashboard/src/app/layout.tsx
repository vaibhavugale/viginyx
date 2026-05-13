import type { Metadata } from "next";
import "@viginyx/theme/src/globals.css";

export const metadata: Metadata = {
  title: "VIGINYX Dashboard",
  description: "VIGINYX Intelligence Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
