import { component$, useContext } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { EmptyHome } from "~/components/home";
import InvoicesList from "~/components/invoices/invoices-list";
import { Header, HeaderTitles, NewInvoice } from "~/components/shared";
import CustomSelect from "~/components/shared/header/custom-select";
import { InvoiceContext } from "~/context/invoices/invoices.context";
import { useUiStore } from "~/utils/hooks/useUiStore";

export default component$(() => {
  const { invoices } = useContext(InvoiceContext);
  const { isDarkMode } = useUiStore(); 
  return (
    <div class={`flex h-screen w-full flex-col items-center justify-center  ${isDarkMode.value ? "bg-midnight-black" : "bg-light-gray"}`}>
      <Header styles="mt-10">
        <HeaderTitles
          column
          q:slot="header-titles"
          title="Invoices"
          titleStyles="text-white text-4xl font-bold mb-2"
          subtitle="There are 7 total invoices"
          subtitleStyles="font-semibold"
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
    </div>
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
