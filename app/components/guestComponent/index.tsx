import { Persons } from "@/app/types";
import { PawPrint, User } from "lucide-react";

export default function GuestComponent({ guest }: { guest: Persons }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="flex items-center justify-center gap-2">
        <User size={18} /> {guest.adults}
      </span>
      {guest.children !== 0 && (
        <span className="flex items-center justify-center gap-2">
          <User size={12} /> {guest.children}
        </span>
      )}
      {guest.puppets !== 0 && (
        <span className="flex items-center justify-center gap-2">
          <PawPrint size={15} /> {guest.puppets}
        </span>
      )}
    </div>
  );
}
