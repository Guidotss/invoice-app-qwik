import { component$, useContext } from "@builder.io/qwik";
import { InvoiceContext } from "~/context/invoices/invoices.context";
import type { Invoice } from "~/interfaces";
import InvoiceCard from "./invoice-card";

export default component$(() => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <>
      <div class="mt-5 flex 2xl:w-1/2 lg:w-2/3 lg:h-[80vh] flex-col gap-5 overflow-y-scroll invoice-scroll">
        {invoices.map((invoice: Invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </>
  );
});
