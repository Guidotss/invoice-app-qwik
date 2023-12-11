import { component$, Slot, } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import SideMenu from "~/components/invoices/side-menu";
import { Sidebar } from "~/components/shared";

import Providers from "~/providers/providers";

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
    <Providers>
      <main class="flex overflow-hidden">
        <Sidebar />
        <SideMenu />
        <Slot />
      </main>
    </Providers>
  );
});
