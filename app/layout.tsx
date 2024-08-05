
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header"
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';

  return (
      <ClerkProvider>
        <html lang="en">
          <head>
            <title>Vasra Store</title>
            <meta name="description" content={metadata.description ?? "Default Desc"} />
         </head>
          <body className={inter.className}>
          {!isAuthPage && <Header />}
            {children}
            </body>
        </html>
      </ClerkProvider>

  );
}
