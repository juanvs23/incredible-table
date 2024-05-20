"use client";
import { Carousel } from "flowbite-react";
import { ImagesRoom } from "@/app/types";
import Image from "next/image";

export default function ImageCaousel({
  images,
  description,
}: {
  images: ImagesRoom[];
  description: string;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="w-full ">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel pauseOnHover>
            {images.map((image) => (
              <Image
                key={image.id}
                src={image.url}
                alt={image.description}
                width={1000}
                height={1000}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 ">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
          {description}
        </h3>
      </div>
    </div>
  );
}
