// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";
import Providers from "@/app/components/Providers"; // Import the new Providers component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuraSkill",
  description: "Plataforma de gestão de competências e habilidades",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
      <Providers> {/* Wrap the entire application with Providers */}
          <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex flex-1">
                  <Sidebar />
                  {children}
              </div>
              <Footer />
          </div>
      </Providers>
      </body>
      </html>
  );
}
