import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient } from "@tanstack/react-query";
import { createThirdwebClient } from "thirdweb";
import { mainnet } from "viem/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
  ssr: false
});

export const queryClient = new QueryClient();

export const thidwebClient = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!
});
