import { component$ } from "@builder.io/qwik";
import type { Address } from "~/interfaces";
import { getDate } from "~/utils";

interface Props {
  createdAt: string;
  paymentDue: string;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  isDarkmode?: boolean;
}

export default component$(
  ({
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    isDarkmode,
  }: Props) => {
    return (
      <div class="mt-10 grid grid-cols-3">
        <div class="flex flex-col gap-y-5">
          <div>
            <h4
              class={`${
                isDarkmode ? "text-periwinkle" : "text-soft-periwinkle"
              }`}
            >
              Invoice Date
            </h4>
            <h3
              class={`mt-3 text-xl font-bold tracking-wide ${
                isDarkmode ? " text-light-gray" : "text-deep-purple"
              }`}
            >
              {getDate(new Date(createdAt))}
            </h3>
          </div>
          <div>
            <h4
              class={`${
                isDarkmode ? "text-periwinkle" : "text-soft-periwinkle"
              }`}
            >
              Payment Due
            </h4>
            <h3
              class={`mt-3 text-xl font-bold tracking-wide ${
                isDarkmode ? "text-light-gray" : "text-deep-purple"
              }`}
            >
              {getDate(new Date(paymentDue))}
            </h3>
          </div>
        </div>
        <div class="flex flex-col">
          <h4
            class={`${isDarkmode ? "text-periwinkle" : "text-soft-periwinkle"}`}
          >
            Bill To
          </h4>
          <h3
            class={`mt-2 text-lg font-bold ${
              isDarkmode ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            {clientName}
          </h3>
          <div
            class={`${isDarkmode ? "text-periwinkle" : "text-soft-periwinkle"}`}
          >
            <h6>{clientAddress.street}</h6>
            <h6>{clientAddress.city}</h6>
            <h6>{clientAddress.postCode}</h6>
            <h6>{clientAddress.country}</h6>
          </div>
        </div>
        <div class="flex flex-col">
          <h4
            class={`${isDarkmode ? "text-periwinkle" : "text-soft-periwinkle"}`}
          >
            Sent To
          </h4>
          <h3
            class={`mt-3 text-lg font-bold ${
              isDarkmode ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            {clientEmail}
          </h3>
        </div>
      </div>
    );
  },
);
