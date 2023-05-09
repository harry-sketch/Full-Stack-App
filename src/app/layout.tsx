import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full-Stack_App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-6xl mx-auto`}>
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
