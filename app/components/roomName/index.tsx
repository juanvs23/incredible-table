import { ImagesRoom } from "@/app/types";
import ImageThumbnail from "./imageThumbnail";
import { SquareArrowOutUpRight } from "lucide-react";
import useOpenModal from "./useOpenModal";

export default function RoomNameComponent({
  name,
  images,
  descriptions,
}: {
  name: string;
  images: ImagesRoom[];
  descriptions: string;
}) {
  const { handlerOpenModal } = useOpenModal();
  return (
    <button
      className="flex items-center gap-3 text-primary-600 underline underline-offset-2"
      onClick={() => handlerOpenModal(true, images, name, descriptions)}
    >
      <ImageThumbnail image={images[0]} /> {name} <SquareArrowOutUpRight />
    </button>
  );
}
