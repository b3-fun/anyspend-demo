import { useModalStore } from "@b3dotfun/sdk/global-account/react";
import { base } from "viem/chains";

export const ButtonMintNFT = () => {
  const { setB3ModalOpen, setB3ModalContentType } = useModalStore();

  return (
    <button
      className="button"
      onClick={() => {
        setB3ModalOpen(true);
        setB3ModalContentType({
          type: "anySpendNft",
          nftContract: {
            chainId: base.id,
            contractAddress: "0x9c275ff1634519E9B5449ec79cd939B5F900564d",
            price: "500000000000000000",
            priceFormatted: "0.5",
            currency: {
              chainId: 8453,
              address: "0xb3b32f9f8827d4634fe7d973fa1034ec9fddb3b3",
              decimals: 18,
              name: "B3",
              symbol: "B3",
              metadata: {
                logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/35690.png"
              }
            },
            imageUrl:
              "https://storage.googleapis.com/nftimagebucket/base/tokens/0x80f0e6644723abb03aa8867d21e32bd854b2a2d9/preview/TVRjME1EUTRORFl4T0E9PV8zNjcy.jpg",
            name: "Downhill Ski",
            description: "Downhill Ski",
            tokenId: null
          }
        });
      }}
    >
      Mint NFT
    </button>
  );
};
