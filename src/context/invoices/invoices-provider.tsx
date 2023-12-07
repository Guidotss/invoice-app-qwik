import { Slot, component$, useStore } from "@builder.io/qwik";
import type { InvoiceContext } from "./invoices.context";
import data from "~/data/data.json";
import type { Invoice } from "~/interfaces";

export default component$(() => {
  const { invoices } = useStore<InvoiceContext>({
    invoices: data as Invoice[],
  });

  console.log(invoices);

  return <Slot />;
});
