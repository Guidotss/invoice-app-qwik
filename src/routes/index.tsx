import { component$, useContext } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { EmptyHome } from "~/components/home";
import InvoicesList from "~/components/invoices/invoices-list";
import { Header, HeaderTitles, NewInvoice } from "~/components/shared";
import CustomSelect from "~/components/shared/header/custom-select";
import { InvoiceContext } from "~/context/invoices/invoices.context";

export default component$(() => {
  const { invoices } = useContext(InvoiceContext);
  return (
    <>
      <Header>
        <HeaderTitles
          column
          q:slot="header-titles"
          title="Invoices"
          titleStyles="text-white text-4xl font-bold mb-2"
          subtitle="There are 7 total invoices"
          subtitleStyles="text-light-gray"
        />
        <div
          q:slot="buttons-container"
          class="flex w-full items-center justify-end gap-x-10 "
        >
          <CustomSelect />
          <NewInvoice />
        </div>
      </Header>
      <div class="flex h-full w-full flex-col items-center justify-center">
        {invoices.length ? <InvoicesList /> : <EmptyHome />}
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
