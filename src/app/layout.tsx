import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import DarkModeProvider from "@/app/provider/DarkModeProvider";
import QueryProvider from "@/app/provider/QueryProvider";
import Header from "@/components/layouts/header/Header";
import Spacer from "@/components/common/Spacer";
import Footer from "@/components/layouts/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LoL Dex",
  description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
  icons: {
    icon: "https://brand.riotgames.com/static/a91000434ed683358004b85c95d43ce0/8a20a/lol-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          <Header />
          <QueryProvider>
            <main className="bg-gray-200 dark:bg-gray-900">
              <Spacer size="lg"></Spacer>
              {children}
            </main>
          </QueryProvider>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
