import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { EmptyHome } from "~/components/home";
export default component$(() => {
  return (
    <>
      <div class="flex h-full flex-col items-center justify-center">
        <EmptyHome />
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
