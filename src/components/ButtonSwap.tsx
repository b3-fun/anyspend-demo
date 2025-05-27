import { useModalStore } from "@b3dotfun/react/stores/useModalStore";

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
