import { B3 } from "@b3dotfun/react/constants/anyspend.constants";
import { useModalStore } from "@b3dotfun/react/stores/useModalStore";
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
            currency: B3,
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
