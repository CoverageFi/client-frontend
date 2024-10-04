"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { W3sProvider } from "./W3sProvider";

const queryClient = new QueryClient();

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <W3sProvider>{children}</W3sProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};
