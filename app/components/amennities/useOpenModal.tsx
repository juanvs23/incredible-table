import { store } from "@/app/libs";
import { Ammenities } from "@/app/types";
import AmmenityList from "./ammenityList";

export default function useOpenModal() {
  const { setIsOpen, isOpen, setModal } = store.modalStore();

  const handlerOpenModal = (
    open: boolean,
    ammenities: Ammenities[],
    name: string,
  ) => {
    setIsOpen(open);
    setModal({
      modal: {
        title: name,
        content: <AmmenityList ammenities={ammenities} />,
        footer: <></>,
        size: "lg",
      },
    });
  };

  return { handlerOpenModal, isOpen };
}
