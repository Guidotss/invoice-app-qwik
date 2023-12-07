import { createContextId } from "@builder.io/qwik";
import type { Invoice } from "~/interfaces";

export interface InvoiceContext { 
  invoices: Invoice[];
}

export const SharesListContextId =
  createContextId<InvoiceContext>("invoices-context");
