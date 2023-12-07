import { component$, useContext } from "@builder.io/qwik";
import { InvoiceContext } from "~/context/invoices/invoices.context";
import type { Invoice } from "~/interfaces";
import InvoiceCard from "./invoice-card";

export default component$(() => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <>
      <div class="mt-5 flex w-1/2 flex-col gap-5">
        {invoices.map((invoice: Invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </>
  );
});
