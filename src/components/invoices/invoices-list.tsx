import { component$, useContext } from "@builder.io/qwik";
import { InvoiceContext } from "~/context";
import type { Invoice } from "~/interfaces";
import InvoiceCard from "./invoice-card";

export default component$(() => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <>
      <div class="invoice-scroll mt-5 flex flex-col gap-5 overflow-y-scroll lg:h-[80vh] lg:w-2/3 2xl:w-1/2">
        {invoices.map((invoice: Invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </>
  );
});
