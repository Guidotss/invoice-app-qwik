import { component$, useContext } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { EmptyHome } from "~/components/home";
import InvoicesList from "~/components/invoices/invoices-list";
import { InvoiceContext } from "~/context/invoices/invoices.context";


export default component$(() => {
  const { invoices } = useContext(InvoiceContext);
  return (
    <>
      <div class="flex h-full flex-col items-center justify-center w-full">
        {invoices.length ? (
          <InvoicesList/>
        ) : (
          <EmptyHome />
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to invoice app",
  meta: [
    {
      name: "description",
      content: "Invoice app",
    },
  ],
};
