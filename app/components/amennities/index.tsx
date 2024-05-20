import { Ammenities as Amenities } from "@/app/types";
import useOpenModal from "./useOpenModal";
import { ChevronDown } from "lucide-react";

export default function Ammenities({
  ammenityList,
}: {
  ammenityList: Amenities[];
}) {
  const { handlerOpenModal, isOpen } = useOpenModal();
  return (
    <button
      className="flex items-center justify-center w-full gap-1 text-primary-600"
      onClick={() => handlerOpenModal(true, ammenityList, "Amenidades")}
    >
      {ammenityList.length} <ChevronDown />
    </button>
  );
}
