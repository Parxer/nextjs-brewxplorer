"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/queries";
import { SettingsProvider } from "@/app/settingsContext";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-inter)" },
        body: { value: "var(--font-geist)" },
      },
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SettingsProvider>
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <ChakraProvider value={system}>{children}</ChakraProvider>
        </NuqsAdapter>
      </QueryClientProvider>
    </SettingsProvider>
  );
}
