import { component$ } from "@builder.io/qwik";
import type { Invoice } from "~/interfaces";
import InvoiceClientData from "./invoice-client-data";

interface Props {
  invoice: Invoice;
}
export default component$(({ invoice }: Props) => {
  return (
    <div class="mt-10 rounded-lg bg-midnight-blue p-10 2xl:w-1/2 w-2/3 overflow-y-scroll invoice-scroll">
      <header class="flex w-full items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-light-gray">
            <span class="text-manatee">#</span>
            {invoice.id}
          </h3>
          <h4 class="font-light text-periwinkle">{invoice.description}</h4>
        </div>
        <div class="text-sm text-periwinkle">
          <h5>{invoice.senderAddress.street}</h5>
          <h6 class="text-end">{invoice.senderAddress.city}</h6>
          <h6 class="text-end">{invoice.senderAddress.postCode}</h6>
          <h6>{invoice.senderAddress.country}</h6>
        </div>
      </header>
      <InvoiceClientData
        clientAddress={invoice.clientAddress}
        clientEmail={invoice.clientEmail}
        clientName={invoice.clientName}
        createdAt={invoice.createdAt}
        paymentDue={invoice.paymentDue}
      />

      <section class="mt-10 flex justify-center p-10 rounded-t-lg bg-charcoal-blue">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-left text-sm  font-semibold text-periwinkle">
                Item Name
              </th>
              <th class="text-lg text-left font-semibold text-periwinkle w-10">
                QTY.
              </th>
              <th class="text-lg text-right w-48 font-semibold text-periwinkle">
                Price
              </th>
              <th class="text-lg text-right font-semibold text-periwinkle ">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.name} class="text-xl">
                <td class="font-bold text-light-gray">{item.name}</td>
                <td class=" font-bold text-light-gray text-center">
                  {item.quantity}
                </td>
                <td class="text-md font-bold text-light-gray text-right">
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "GBP",
                  })}
                </td>
                <td class="font-bold text-light-gray text-right">
                  {item.total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "GBP",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
        <div class="flex justify-between items-center bg-midnight-black p-10 rounded-b-lg">
            <h3 class="font-bold text-light-gray text-2xl">Amount</h3>
            <h2 class="font-bold text-light-gray text-2xl">
                {invoice.total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "GBP",
                })}
            </h2>
        </div>
    </div>
  );
});
