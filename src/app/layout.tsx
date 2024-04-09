import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NW.RC",
  description: "For ur rounders needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full py-5 align-middle justify-around flex flex-row bg-amber-300 text-black">
          <Link href="/"><p className="text-black">Home</p></Link>
          <Link href="/fines"><p className="text-black">Fines</p></Link>
        </div>
        {children}
      </body>
    </html>
  );
}
