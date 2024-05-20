import useFilter from "@/app/hooks/useFilter";
import { store } from "@/app/libs";
import { Table } from "flowbite-react";
import FilterIndex from "../filterIndex";
import { Rooms } from "@/app/types";
import TableRow from "./tableRow";

export default function TableComponent() {
  const { rooms } = store.roomsStore();
  const {
    sortOrderByCode,
    sortOrderByPms,
    sortOrderByName,
    handlerSortOrderByName,
    handlerSortOrderByCode,
    handlerSortOrderByPms,
  } = useFilter();
  return (
    <div className="overflow-x-auto">
      <Table
        hoverable
        theme={{
          root: {
            base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
            shadow:
              "absolute left-0 top-0 -z-10 size-full rounded-lg bg-white drop-shadow-md dark:bg-black",
            wrapper: "relative",
          },
        }}
      >
        <Table.Head>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <button
              onClick={handlerSortOrderByName}
              className="flex items-center justify-center gap-2 font-bold "
            >
              Nombre <FilterIndex filter={sortOrderByName} />
            </button>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <button
              onClick={handlerSortOrderByCode}
              className="flex items-center justify-center gap-2 font-bold "
            >
              Código Book <FilterIndex filter={sortOrderByCode} />
            </button>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <button
              onClick={handlerSortOrderByPms}
              className="flex items-center justify-center gap-2 font-bold"
            >
              Código PMS
              <FilterIndex filter={sortOrderByPms} />
            </button>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Uds.
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Huéspedes
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Plan Tarífario
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Amenidades
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent">
            <span className="flex items-center justify-center gap-2 font-bold">
              Estado
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {rooms.map((room: Rooms) => {
            return <TableRow key={room.id} room={room} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
