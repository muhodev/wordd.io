import { useContext } from "react";
import { ModalContext } from "contexts";

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal hook must be used in <ModalProvider> component.");
  }

  const { state, keys, isOpenModal, toggleModal } = context;

  return { state, keys, isOpenModal, toggleModal };
}
