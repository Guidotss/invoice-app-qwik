import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { Invoice } from "~/interfaces";
import {
  getDate,
  setCircleColor,
  setStatusColor,
  setStatusText,
} from "~/utils";
import { ArrowRight } from "../icons/icons";
import { useUiStore } from "~/utils/hooks/useUiStore";

interface Props {
  invoice: Invoice;
}

export default component$(({ invoice }: Props) => {
  const navigation = useNavigate();
  const { isDarkMode } = useUiStore();
  const navigateToInvoice = $(() => {
    navigation("/invoice/" + invoice.id);
  });
  return (
    <div
      class={`mr-3 flex cursor-pointer items-center justify-between rounded-lg ${
        isDarkMode.value ? "bg-midnight-blue" : "bg-white shadow-lg"
      } px-10 duration-300 ease-in-out hover:opacity-90 lg:py-4 2xl:py-6`}
      onClick$={navigateToInvoice}
    >
      <div class="flex items-center gap-x-10 text-light-gray">
        <h3 class={`font-bold ${!isDarkMode.value ? "text-deep-purple" : ""}`}>
          #{invoice.id}
        </h3>
        <h5
          class={`text-sm ${
            isDarkMode.value ? "text-periwinkle" : "text-soft-periwinkle"
          }`}
        >
          Due {getDate(new Date(invoice.createdAt))}
        </h5>
        <h4
          class={`${
            isDarkMode.value
              ? "text-light-gray"
              : "font-semibold text-soft-periwinkle"
          }`}
        >
          {invoice.clientName}
        </h4>
      </div>
      <div class="flex items-center gap-5">
        <h2
          class={`font-bold ${
            isDarkMode.value ? "text-light-gray" : "text-deep-purple"
          }`}
        >
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
