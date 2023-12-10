import { component$, useContext, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import { ArrowLeft } from "~/components/icons/icons";
import InvoiceDetails from "~/components/invoices/invoice-details";
import { Header } from "~/components/shared";
import HeaderActionButtons from "~/components/shared/buttons/header-action-buttons";
import HeaderTitles from "~/components/shared/header/header-titles";
import { InvoiceContext } from "~/context/invoices/invoices.context";
import { setCircleColor, setStatusColor, setStatusText } from "~/utils";

export const useInvoiceId = routeLoader$<string>(({ params }) => {
  return params.id;
});

export default component$(() => {
  const invoiceId = useInvoiceId();
  const { invoices } = useContext(InvoiceContext);

  const invoice = invoices.find((invoice) => invoice.id === invoiceId.value);

  const { statusColor, textColor, circleStyles } = useStore({
    statusColor: setStatusColor(invoice!.status),
    textColor: setStatusText(invoice!.status),
    circleStyles: setCircleColor(invoice!.status),
  });

  return (
    <>
      <div class="mb-3 flex 2xl:w-1/2 items-center gap-x-3">
        <i>
          <ArrowLeft />
        </i>
        <Link class="text-xl font-semibold text-light-gray" href="/">
          Go back
        </Link>
      </div>
      <Header styles="bg-midnight-blue rounded-md p-8">
        <HeaderTitles
          q:slot="header-titles"
          circleDecorator
          title="Status"
          subtitle={invoice?.status || "Loading..."}
          titleStyles="text-light-gray text-xl font-semibold mr-5"
          subtitleStyles={`${statusColor} ${textColor} font-bold text-xl px-5 py-2 rounded-md`}
          circleDecoratorStyles={`${circleStyles} mr-2 mt-1`}
        />
        <div q:slot="buttons-container" class="flex w-1/2 justify-center gap-2">
          <HeaderActionButtons />
        </div>
      </Header>

      <InvoiceDetails invoice={invoice!}/>
    </>
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
