import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SubSync",
  description: "Privacy-first subscription dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}
