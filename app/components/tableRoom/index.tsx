"use client";
import useGetFetch from "@/app/hooks/useGetFetch";
import { Spinner } from "flowbite-react";
import React, { useEffect } from "react";
import { Fail } from "@/app/components";
import { store } from "@/app/libs";
import TableComponent from "../table";

export default function TableRooms({ ...props }) {
  const { data, error, loading } = useGetFetch("/habitaciones?limit=15");
  const { rooms, setRooms } = store.roomsStore();

  useEffect(() => {
    if (data !== null) setRooms(data);
  }, [data, rooms, setRooms]);
  return (
    <section className={`${props.classProps} `}>
      {data !== null && (
        <div className="relative h-full  px-3 pt-10">
          <TableComponent />
        </div>
      )}
      {error !== null && (
        <div className="relative h-full px-3">
          <Fail message={(error?.message as string) || ""} />
        </div>
      )}
      {loading && (
        <div
          className={`relative flex h-full items-center justify-center px-3 ${props.classProps}`}
        >
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      )}
    </section>
  );
}
