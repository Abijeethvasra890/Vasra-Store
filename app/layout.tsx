
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from '../components/Header'
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  // const [isAuthPage, setIsAuthPage] = useState(false);
  // useEffect(() => {
  //   if(pathname === '/sign-in' || pathname === '/sign-up'){
  //     setIsAuthPage(true);
  //   }
  // }, [pathname])
 
  const isAuthPage = pathname === '/pages/sign-in' || pathname === '/pages/sign-up';
  //console.log(isAuthPage);
  
  return (
      <ClerkProvider>
        <html lang="en">
          <head>
            <title>Vasra Store</title>
            <meta name="description" content={metadata.description ?? "Default Desc"} />
         </head>
          <body className={inter.className}>
            {!isAuthPage && <AnnouncementBar />}
            {!isAuthPage && <Header />}
            {children}
            {!isAuthPage && <Footer />}
            </body>
        </html>
      </ClerkProvider>

  );
}
