"use client";

import { queryClient, wagmiConfig } from "@/clients";
import { B3CustomProvider } from "@/components/B3CustomProvider";
import { ButtonJoinTournament } from "@/components/ButtonJoinTournament";
import { ButtonMintNFT } from "@/components/ButtonMintNFT";
import { ButtonSwap } from "@/components/ButtonSwap";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <B3CustomProvider>{children}</B3CustomProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default function Home() {
  return (
    <Providers>
      <div className="flex flex-col items-center justify-center h-dvh w-full gap-6">
        <ConnectButton />
        <ButtonSwap />
        <ButtonMintNFT />
        <ButtonJoinTournament />
      </div>
    </Providers>
  );
}
