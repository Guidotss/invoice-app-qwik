import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { type InvoiceContextProps, InvoiceContext } from "./invoices.context";
import data from "~/data/data.json";
import type { Invoice } from "~/interfaces";

export default component$(() => {
  const { invoices } = useStore<InvoiceContextProps>({
    invoices: data as Invoice[],
  });

  useContextProvider(InvoiceContext, { invoices });

  return <Slot />;
});
