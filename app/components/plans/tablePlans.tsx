import { Plans } from "@/app/types";
import { Table } from "flowbite-react";
import PlanRow from "./planRow";

export default function TablePlans({ plans }: { plans: Plans[] }) {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="text-lg">
        <Table.Head>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Plan Tarífario
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Plan Tarífario
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent border-r-gray-300 dark:border-r-zinc-100 ">
            <span className="flex items-center justify-center gap-2 font-bold">
              Plan Tarífario
            </span>
          </Table.HeadCell>
          <Table.HeadCell className="border-2 border-transparent">
            <span className="flex items-center justify-center gap-2 font-bold">
              Plan Tarífario
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {plans.map((plan: Plans) => {
            return <PlanRow key={plan.id} plan={plan} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
