import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useInvoiceId = routeLoader$<string>(({ params }) => {
  return params.id; 
});

export default component$(() => {
  const invoiceId = useInvoiceId();
  return (
    <h1 class="text-white">{invoiceId}</h1>
  )
});

export const head: DocumentHead = {
  title: "Invoice",
  meta: [
    {
      name: "Invoice page",
      content: "this page contains all information about invoice",
    },
  ],
};
