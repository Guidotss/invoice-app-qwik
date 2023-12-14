import { component$ } from "@builder.io/qwik";
import type { Invoice } from "~/interfaces";
import InvoiceClientData from "./invoice-client-data";
import { useUiStore } from "~/utils/hooks/useUiStore";
import InvoiceTable from "./invoice-table";

interface Props {
  invoice: Invoice;
}
export default component$(({ invoice }: Props) => {
  const { isDarkMode } = useUiStore();
  return (
    <div
      class={`invoice-scroll mt-5 w-2/3 overflow-y-auto rounded-lg p-10 transition-colors 2xl:mt-10 2xl:w-1/2 ${
        isDarkMode.value ? "bg-midnight-blue" : "bg-white shadow-md"
      }`}
    >
      <header class="flex w-full items-center justify-between">
        <div>
          <h3
            class={`text-xl font-bold ${
              isDarkMode.value ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            <span class="text-manatee">#</span>
            {invoice.id}
          </h3>
          <h4
            class={`${
              isDarkMode.value ? "text-periwinkle" : "text-soft-periwinkle"
            }`}
          >
            {invoice.description}
          </h4>
        </div>
        <div
          class={`text-sm ${
            isDarkMode.value ? "text-periwinkle" : "text-soft-periwinkle"
          }`}
        >
          <h5>{invoice.senderAddress.street}</h5>
          <h6 class="text-end">{invoice.senderAddress.city}</h6>
          <h6 class="text-end">{invoice.senderAddress.postCode}</h6>
          <h6>{invoice.senderAddress.country}</h6>
        </div>
      </header>
      <InvoiceClientData
        isDarkmode={isDarkMode.value}
        clientAddress={invoice.clientAddress}
        clientEmail={invoice.clientEmail}
        clientName={invoice.clientName}
        createdAt={invoice.createdAt}
        paymentDue={invoice.paymentDue}
      />

      <InvoiceTable isDarkMode={isDarkMode.value} items={invoice.items} />
      <div
        class={`flex items-center justify-between rounded-b-lg ${
          isDarkMode.value ? "bg-midnight-black" : "bg-midnight-blue"
        } p-10`}
      >
        <h3 class="text-2xl font-bold text-light-gray">Amount</h3>
        <h2 class="text-2xl font-bold text-light-gray">
          {invoice.total.toLocaleString("en-US", {
            style: "currency",
            currency: "GBP",
          })}
        </h2>
      </div>
    </div>
  );
});
