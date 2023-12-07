import { createContextId } from "@builder.io/qwik";
import type { Invoice } from "~/interfaces";

export interface InvoiceContextProps { 
  invoices: Invoice[];
}

export const InvoiceContext =
  createContextId<InvoiceContextProps>("invoices-context");
