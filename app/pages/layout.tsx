
"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { metadata } from "../metadata";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  const isAuthPage = pathname === '/pages/sign-in' || pathname === '/pages/sign-up';
  
  return (
     
        <html lang="en">
          <head>
            <title>Vasra Store</title>
            <meta name="description" content={metadata.description ?? "Default Desc"} />
         </head>
          <body className={inter.className}>
            {!isAuthPage && <AnnouncementBar />}
            {!isAuthPage && <Header />}
            {children}
            </body>
        </html>
      

  );
}
