"use client";

import { queryClient, wagmiConfig } from "@/clients";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import dynamic from "next/dynamic";

// Dynamically import all B3 SDK components with SSR disabled
const B3CustomProvider = dynamic(
  () => import("@/components/B3CustomProvider").then(mod => ({ default: mod.B3CustomProvider })),
  { ssr: false }
);

const ButtonSwap = dynamic(() => import("@/components/ButtonSwap").then(mod => ({ default: mod.ButtonSwap })), {
  ssr: false
});

const ButtonMintNFT = dynamic(
  () => import("@/components/ButtonMintNFT").then(mod => ({ default: mod.ButtonMintNFT })),
  { ssr: false }
);

const ButtonJoinTournament = dynamic(
  () => import("@/components/ButtonJoinTournament").then(mod => ({ default: mod.ButtonJoinTournament })),
  { ssr: false }
);

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default function Home() {
  return (
    <Providers>
      <div className="flex flex-col items-center justify-center h-dvh w-full gap-6">
        <ConnectButton />
        <B3CustomProvider>
          <ButtonSwap />
          <ButtonMintNFT />
          <ButtonJoinTournament />
        </B3CustomProvider>
      </div>
    </Providers>
  );
}
