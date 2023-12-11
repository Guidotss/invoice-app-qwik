import { Slot, component$ } from "@builder.io/qwik";
import { UiProvider, InvoicesProvider } from "~/context";

export default component$(() => {
  return (
    <UiProvider>
      <InvoicesProvider>
        <Slot />
      </InvoicesProvider>
    </UiProvider>
  );
});
