import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-slate-300 h-20 ${inter.className}`}>{children}</div>
  );
}
