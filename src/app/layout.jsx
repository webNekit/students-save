import { Inter } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider/LayoutProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Students save",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-950 text-gray-300"}>
        <div className="__next" id="next">
          <div className="w-full min-h-screen flex">
            <Sidebar />
            <div className="w-full">
              <LayoutProvider>
                <Header />
                {children}
              </LayoutProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
