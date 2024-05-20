import { store } from "@/app/libs";
import { Plans } from "@/app/types";
import TablePlans from "./tablePlans";

export default function useOpenModal() {
  const { setIsOpen, isOpen, setModal } = store.modalStore();

  const handlerOpenModal = (open: boolean, plans: Plans[], name: string) => {
    setIsOpen(open);
    setModal({
      modal: {
        title: name,
        content: <TablePlans plans={plans} />,
        footer: <></>,
        size: "2xl",
      },
    });
  };

  return { handlerOpenModal, isOpen };
}
