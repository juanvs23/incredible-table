import { store } from "@/app/libs";
import { ImagesRoom } from "@/app/types";
import ImageCaousel from "./imageCaousel";

export default function useOpenModal() {
  const { setIsOpen, isOpen, setModal } = store.modalStore();

  const handlerOpenModal = (
    open: boolean,
    images: ImagesRoom[],
    name: string,
    descriptions: string,
  ) => {
    setIsOpen(open);
    setModal({
      modal: {
        title: name,
        content: <ImageCaousel images={images} description={descriptions} />,
        footer: <></>,
        size: "xl",
      },
    });
  };

  return { handlerOpenModal, isOpen };
}
