import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thread Theory",
  description: "Modern and minimalist, suggesting both clothing and connecting different styles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
