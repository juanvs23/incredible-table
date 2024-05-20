import { ModalContent, ModalStore } from "@/app/types";
import { createWithEqualityFn } from "zustand/traditional";

export const modalStore = createWithEqualityFn<ModalStore>((set) => ({
  isOpen: false,
  modal: {
    title: "",
    content: null,
    footer: null,
    size: "md",
  },
  setIsOpen: (newIsOpen: boolean) => set(() => ({ isOpen: newIsOpen })),
  setModal: (newModaldata: ModalContent) =>
    set(() => ({
      modal: newModaldata.modal,
    })),
}));
