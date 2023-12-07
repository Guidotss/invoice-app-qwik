import { component$, useSignal, $ } from '@builder.io/qwik';
import { ArrowDown, PlusIcon } from "../../icons/icons";
import CustomSelect from "./custom-select";

export default component$(() => {
  const isCustomSelectOpen = useSignal<boolean>(false);
  const toggleCustomSelect = $(() => { 
    isCustomSelectOpen.value = !isCustomSelectOpen.value;
  }); 
  return (
    <header class="flex w-1/2 items-center justify-center">
      <div class="flex w-full flex-col">
        <h1 class="mb-2 text-4xl font-bold text-light-gray">Invoices</h1>
        <p class="text-sm font-semibold text-periwinkle">
          There are 7 total invoices
        </p>
      </div>
      <div class="flex w-full items-center justify-end gap-x-10 ">
        <div class="flex cursor-pointer items-center gap-2" onClick$={toggleCustomSelect}>
          <span class="font-semibold text-light-gray">Filter by status</span>
          <CustomSelect isOpen={isCustomSelectOpen.value} />
          <i>
            <ArrowDown />
          </i>
        </div>
        <button class="flex items-center justify-between rounded-full bg-purple px-3 py-2 outline-none duration-300 ease-in-out hover:opacity-90">
          <i class="flex items-center justify-center rounded-full bg-light-gray p-3">
            <PlusIcon />
          </i>
          <span class="ml-2 font-semibold text-light-gray">New Invoice</span>
        </button>
      </div>
    </header>
  );
});
