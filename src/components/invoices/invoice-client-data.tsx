import { component$ } from "@builder.io/qwik";
import type { Address } from "~/interfaces";
import { getDate } from "~/utils";

interface Props {
  createdAt: string;
  paymentDue: string;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
}

export default component$(
  ({
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
  }: Props) => {
    return (
      <div class="mt-10 grid grid-cols-3">
        <div class="flex flex-col gap-y-5">
          <div>
            <h4 class="text-periwinkle">Invoice Date</h4>
            <h3 class="mt-3 text-xl font-bold tracking-wide text-light-gray">
              {getDate(new Date(createdAt))}
            </h3>
          </div>
          <div>
            <h4 class="text-periwinkle">Payment Due</h4>
            <h3 class="mt-3 text-xl font-bold tracking-wide text-light-gray">
              {getDate(new Date(paymentDue))}
            </h3>
          </div>
        </div>
        <div class="flex flex-col">
          <h4 class="text-periwinkle">Bill To</h4>
          <h3 class="mt-3 text-lg font-bold text-light-gray">{clientName}</h3>
          <h6 class="text-periwinkle">{clientAddress.street}</h6>
          <h6 class="text-periwinkle">{clientAddress.city}</h6>
          <h6 class="text-periwinkle">{clientAddress.postCode}</h6>
          <h6 class="text-periwinkle">{clientAddress.country}</h6>
        </div>
        <div class="flex flex-col">
          <h4 class="text-periwinkle">Sent To</h4>
          <h3 class="mt-3 text-lg font-bold text-light-gray">{clientEmail}</h3>
        </div>
      </div>
    );
  },
);
