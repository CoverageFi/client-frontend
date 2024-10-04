import "../globals.css";

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
        <div>
          <ClientProviders>
            <div>{children}</div>
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "CoverageFi ",
  description: "Trade stablecoins on CoverageFi",
};
