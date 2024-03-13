import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reference",
  description: "Designed by CharlieDixon, AndrewHull",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
      className={cn('bg-white text-slate-900 antialiased', inter.className)}>


      <body className={inter.className = 'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'}>
        <Providers>{children}</Providers>

      </body>
    </html>
  );
}
