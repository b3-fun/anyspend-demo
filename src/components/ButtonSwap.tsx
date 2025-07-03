"use client";

import { useModalStore } from "@b3dotfun/sdk/global-account/react";

export const ButtonSwap = () => {
  const { setB3ModalOpen, setB3ModalContentType } = useModalStore();
  return (
    <button
      className="button"
      onClick={() => {
        setB3ModalOpen(true);
        setB3ModalContentType({
          type: "anySpend"
        });
      }}
    >
      Swap
    </button>
  );
};
