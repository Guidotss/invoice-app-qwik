import { type QwikMouseEvent, component$ } from "@builder.io/qwik";
import "animate.css";
import { useUiStore } from "~/utils/hooks/useUiStore";
import InvoiceForm from "./invoice-form";
export default component$(() => {
  const { isDarkMode, isSideMenuOpen, closeSideMenu } = useUiStore();

  return isSideMenuOpen.value ? (
    <div
      class="animate__animated animate__fadeIn animate__faster absolute h-screen w-full bg-midnight-black bg-opacity-40"
      onClick$={closeSideMenu}
    >
      <div
        class={`animate__animated animate__slideInLeft animate__faster flex h-screen w-[30vw] flex-col px-6 py-10 ${
          isDarkMode.value ? "bg-midnight-blue" : "bg-light-gray"
        }`}
        onClick$={(event: QwikMouseEvent) => {
          event.stopPropagation();
        }}
      >
        <h1
          class={`text-2xl font-bold ${
            isDarkMode.value ? "text-light-gray" : "text-deep-purple"
          }`}
        >
          New Invoice
        </h1>
        <InvoiceForm isDarkMode={isDarkMode.value} />
      </div>
    </div>
  ) : null;
});
