import { component$ } from "@builder.io/qwik";
import { PlusIcon } from "~/components/icons/icons";

export default component$(() => {
  return (
    <button class="flex items-center justify-between rounded-full bg-purple px-3 py-2 outline-none duration-300 ease-in-out hover:opacity-90">
      <i class="flex items-center justify-center rounded-full bg-light-gray p-3">
        <PlusIcon />
      </i>
      <span class="ml-2 font-semibold text-light-gray">New Invoice</span>
    </button>
  );
});
