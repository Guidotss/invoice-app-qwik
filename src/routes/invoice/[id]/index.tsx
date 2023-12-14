import { component$, useContext, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import { ArrowLeft } from "~/components/icons/icons";
import InvoiceDetails from "~/components/invoices/invoice-details";
import { Header, HeaderTitles, HeaderActionButtons } from "~/components/shared";
import { InvoiceContext } from "~/context/invoices/invoices.context";
import { setCircleColor, setStatusColor, setStatusText } from "~/utils";
import { useUiStore } from "~/utils/hooks/useUiStore";

export const useInvoiceId = routeLoader$<string>(({ params }) => {
  return params.id;
});

export default component$(() => {
  const invoiceId = useInvoiceId();
  const { isDarkMode } = useUiStore();
  const { invoices } = useContext(InvoiceContext);

  const invoice = invoices.find((invoice) => invoice.id === invoiceId.value);

  const { statusColor, textColor, circleStyles } = useStore({
    statusColor: setStatusColor(invoice!.status),
    textColor: setStatusText(invoice!.status),
    circleStyles: setCircleColor(invoice!.status),
  });

  return (
    <div
      class={`flex w-full h-screen flex-col items-center justify-center transition-colors ${
        isDarkMode.value ? "bg-midnight-black" : "bg-light-gray"
      }`}
    >
      <div class="mb-3 flex w-2/3 items-center gap-x-3 2xl:w-1/2">
        <i>
          <ArrowLeft />
        </i>
        <Link
          class={`text-[18px] font-bold ${
            isDarkMode.value ? "text-light-gray" : "text-deep-purple"
          }`}
          href="/"
        >
          Go back
        </Link>
      </div>
      <Header
        styles={`${
          isDarkMode.value ? "bg-midnight-blue" : "bg-white shadow-md"
        } rounded-lg 2xl:p-8 p-5 transition-colors`}
      >
        <HeaderTitles
          q:slot="header-titles"
          circleDecorator
          title="Status"
          subtitle={invoice?.status || "Loading..."}
          titleStyles={`${
            isDarkMode.value ? "text-light-gray" : "text-deep-purple"
          } text-xl font-bold mr-5`}
          subtitleStyles={`${statusColor} ${textColor} font-bold text-xl px-5 py-2 rounded-md`}
          circleDecoratorStyles={`${circleStyles} mr-2 mt-1`}
        />
        <div q:slot="buttons-container" class="flex w-1/2 justify-center gap-2">
          <HeaderActionButtons />
        </div>
      </Header>

      <InvoiceDetails invoice={invoice!} />
    </div>
  );
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
