import { Inter } from "next/font/google";
import "../globals.css";
import { usePathname } from "next/navigation";
import { metadata } from "../metadata";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
        <html lang="en">
          <body className={inter.className}>
            {children}
            </body>
        </html>
      

  );
}
