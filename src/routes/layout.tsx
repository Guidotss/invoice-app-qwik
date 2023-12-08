import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Sidebar } from "~/components/shared";

import InvoicesProvider from "~/context/invoices/invoices-provider";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="flex h-screen w-full bg-midnight-black">
      <Sidebar />
      <InvoicesProvider>
        <main class="flex flex-1 flex-col items-center py-10">
          <Slot />
        </main>
      </InvoicesProvider>
    </div>
  );
});
