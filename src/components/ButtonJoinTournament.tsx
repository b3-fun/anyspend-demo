import { useAccountWallet, useModalStore } from "@b3dotfun/sdk/global-account/react";
import { useEffect, useState } from "react";
import { parseUnits } from "viem";

export const ButtonJoinTournament = () => {
  const { setB3ModalOpen, setB3ModalContentType } = useModalStore();
  const { wallet } = useAccountWallet();
  const [tournamentData, setTournamentData] = useState<any>(null);

  useEffect(() => {
    const fetchTournamentData = async () => {
      const tournamentDataResponse = await fetch(
        `https://basement-feathers-api-production.up.railway.app/tournaments?contractAddress=0x3b2Acc84912c6e43724f3b12eBc5023DbfE2D10C`
      );
      const tournamentData = await tournamentDataResponse.json();
      setTournamentData(tournamentData);
    };

    fetchTournamentData();
  }, []);

  return (
    <button
      className="button"
      onClick={() => {
        if (!wallet.address) {
          alert("Please connect your wallet to join the tournament");
          return;
        }
        setB3ModalOpen(true);
        setB3ModalContentType({
          type: "anySpendJoinTournament",
          joinFor: wallet.address,
          tournamentChainId: tournamentData.data[0].chainId,
          tournamentContractAddress: tournamentData.data[0].contractAddress,
          tournamentMetadata: {
            name: tournamentData.data[0].name,
            description: tournamentData.data[0].description,
            imageUrl: tournamentData.data[0].imageUrl,
            slug: tournamentData.data[0].slug
          },
          tournamentEntryToken: {
            symbol: tournamentData.data[0].entryFee.tokenAmount.symbol,
            chainId: tournamentData.data[0].chainId,
            address: tournamentData.data[0].entryFee.tokenAmount.address,
            name:
              tournamentData.data[0].entryFee.tokenAmount.name || tournamentData.data[0].entryFee.tokenAmount.symbol,
            decimals: tournamentData.data[0].entryFee.tokenAmount.decimal,
            metadata: {
              logoURI: tournamentData.data[0].entryFee.tokenAmount.imageUrl
            }
          },
          tournamentEntryFee: parseUnits(
            tournamentData.data[0].entryFee.tokenAmount.amount,
            tournamentData.data[0].entryFee.tokenAmount.decimal
          ).toString()
        });
      }}
    >
      Join Tournament
    </button>
  );
};
