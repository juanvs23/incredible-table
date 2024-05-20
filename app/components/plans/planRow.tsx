import { Table } from "flowbite-react";
import { Plans } from "@/app/types";

export default function PlanRow({ plan }: { plan: Plans }) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {plan.plan_name}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex justify-between">
          {plan.prices.currency}
          {plan.prices.base_price}
        </div>
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex justify-between">
          {plan.prices.currency}
          {plan.prices.lower_price}
        </div>
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex justify-between">
          {plan.prices.currency}
          {plan.prices.upper_price}
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
