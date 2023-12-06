import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <>
      <h1 class="text-6xl">Welcome to Qwik</h1>
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
