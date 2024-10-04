import "../globals.css";

import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { ClientProviders } from "@/app/components";

const inter = Inter({
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="__next">
          <ClientProviders>
            <div className="gradient-background">
              <div className="mx-auto max-w-7xl background-gradient h-screen flex flex-col lg:flex-row lg:gap-x-8 items-center justify-center lg:px-8 lg:py-12">
                {/* Larger Screen Logo */}
                <AppContainer>{children}</AppContainer>
                {/* Larger Screen Source Code/Docs */}
              </div>
            </div>
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}

// Adds top banner/borders for
const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full lg:max-h-[660px] lg:max-w-lg lg:border lg:border-solid border-gray-200 lg:rounded-lg lg:shadow-lg flex flex-col relative overflow-hidden lg:mb-0 mb-20 bg-white">
    <span className="lg:flex hidden bg-secondary text-white p-3 items-center gap-x-2.5 font-bold">CoverageFi</span>
    {children}
  </div>
);

export const metadata: Metadata = {
  title: "CoverageFi ",
  description: "Trade stablecoins on CoverageFi",
};
