import { Rooms } from "@/app/types";
import { Table } from "flowbite-react";
import FormatCode from "../formatCode";
import GuestComponent from "../guestComponent";
import Ammenities from "../amennities";
import PlansComponent from "../plans";
import RoomNameComponent from "../roomName";

export default function TableRow({ room }: { room: Rooms }) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <RoomNameComponent
          name={room.name}
          images={room.images}
          descriptions={room.description}
        />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <FormatCode code={room.book_code.toString()} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <FormatCode code={room.book_pms.toString()} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap text-center font-medium text-gray-900 dark:text-white">
        {room.book_units}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <GuestComponent guest={room.persons} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <PlansComponent plans={room.plans} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Ammenities ammenityList={room.ammenities} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {room.name}
      </Table.Cell>
    </Table.Row>
  );
}
