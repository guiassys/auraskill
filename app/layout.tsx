import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";
import Providers from "@/app/components/Providers";
import I18nProvider from "@/app/components/I18nProvider"; // Import the new I18nProvider

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        <I18nProvider>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex flex-1">
                <Sidebar />
                {children}
              </div>
              <Footer />
            </div>
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
