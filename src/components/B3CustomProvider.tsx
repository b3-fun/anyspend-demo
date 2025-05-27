import { thidwebClient } from "@/clients";
import { B3DynamicModal, B3Provider } from "@b3dotfun/react";
import { useEffect, useState } from "react";
import { Account, EIP1193 } from "thirdweb/wallets";
import { EIP1193Provider } from "viem";
import { useAccount, useWalletClient } from "wagmi";

export const B3CustomProvider = ({ children }: { children: React.ReactNode }) => {
  const { address, connector } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [accountOverride, setAccountOverride] = useState<Account | undefined>(undefined);

  useEffect(() => {
    const fn = async () => {
      if (!walletClient || !address || !connector) return;

      // The connector's getProvider method should return the EIP-1193 provider.
      const provider = await connector.getProvider();

      if (!provider) return;

      const thirdwebWallet = EIP1193.fromProvider({
        provider: provider as EIP1193Provider
      });
      const connectedAccount = await thirdwebWallet.connect({
        client: thidwebClient
      });
      setAccountOverride(connectedAccount);
    };

    fn();
  }, [address, connector, walletClient]);

  return (
    <B3Provider accountOverride={accountOverride} environment="production" theme="dark">
      {children}
      <B3DynamicModal />
    </B3Provider>
  );
};
