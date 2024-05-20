import { Plans } from "@/app/types";
import { ChevronDown } from "lucide-react";
import useOpenModal from "./useOpenModal";

export default function PlansComponent({ plans }: { plans: Plans[] }) {
  const { handlerOpenModal, isOpen } = useOpenModal();

  return (
    <button
      onClick={() => handlerOpenModal(true, plans, "Planes Tarifarios")}
      className="flex items-center justify-center gap-2 text-primary-600 underline underline-offset-2"
    >
      {plans.length} Planes <ChevronDown />
    </button>
  );
}
