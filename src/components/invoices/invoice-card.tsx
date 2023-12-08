import { $, component$ } from "@builder.io/qwik";
import type { Invoice } from "~/interfaces";
import {
  getMonth,
  setCircleColor,
  setStatusColor,
  setStatusText,
} from "~/utils";
import { ArrowRight } from "../icons/icons";
import { useNavigate } from "@builder.io/qwik-city";

interface Props {
  invoice: Invoice;
}

export default component$(({ invoice }: Props) => {
  const navigation = useNavigate();
  const navigateToInvoice = $(() => {
    navigation("/invoice/" + invoice.id);
  });
  return (
    <div
      class="flex cursor-pointer items-center justify-between rounded-lg bg-midnight-blue px-10 py-6 duration-300 ease-in-out hover:opacity-90"
      onClick$={navigateToInvoice}
    >
      <div class="flex items-center gap-x-10 text-light-gray">
        <h3 class="font-bold">#{invoice.id}</h3>
        <h5 class="text-sm text-periwinkle">
          Due {getMonth(new Date(invoice.createdAt))}
        </h5>
        <h4 class="text-light-gray">{invoice.clientName}</h4>
      </div>
      <div class="flex items-center gap-5">
        <h2 class="font-bold text-light-gray">
          {invoice.total.toLocaleString("en-US", {
            style: "currency",
            currency: "GBP",
          })}
        </h2>
        <div
          class={`flex h-12 w-28 items-center justify-center ${setStatusColor(
            invoice.status,
          )} gap-2 rounded-lg`}
        >
          <div
            class={`h-3 w-3 rounded-full ${setCircleColor(invoice.status)}`}
          />
          <span
            class={`text-lg font-semibold ${setStatusText(invoice.status)}`}
          >
            {invoice.status}
          </span>
        </div>
        <i>
          <ArrowRight />
        </i>
      </div>
    </div>
  );
});
