import { Ammenities } from "@/app/types";
import React from "react";
import Icon from "./../lucideIcon/index";
import { icons } from "lucide-react";

export default function AmmenityList({
  ammenities,
}: {
  ammenities: Ammenities[];
}) {
  return (
    <div>
      {ammenities.map((ammenity) => (
        <div
          key={ammenity.id}
          className="flex items-center justify-between gap-2"
        >
          {" "}
          <Icon
            name={ammenity.ammenity_icon as keyof typeof icons}
            size={20}
            color="gray"
          />{" "}
          {ammenity.ammenity_name}
        </div>
      ))}
    </div>
  );
}
