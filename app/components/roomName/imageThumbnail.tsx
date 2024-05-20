import { ImagesRoom } from "@/app/types";
import Image from "next/image";

export default function ImageThumbnail({ image }: { image: ImagesRoom }) {
  return (
    <Image
      src={`${image.url}`}
      alt={image.description}
      width={40}
      height={40}
      className="size-8 rounded-full"
    />
  );
}
