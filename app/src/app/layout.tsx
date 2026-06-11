import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Virtual Pet",
  description: "AI-powered virtual pet game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}