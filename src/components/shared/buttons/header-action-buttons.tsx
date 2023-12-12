import { component$ } from "@builder.io/qwik";
import { useUiStore } from "~/utils/hooks/useUiStore";

export default component$(() => {
  const { isDarkMode, openSideMenu } = useUiStore();
  return (
    <>
      <button
        class={`rounded-full bg-periwinkle px-5 font-bold outline-none ${
          isDarkMode.value
            ? "bg-opacity-5 text-light-gray"
            : "bg-opacity-70 text-soft-periwinkle"
        } py-4`}
        onClick$={openSideMenu}
      >
        Edit
      </button>
      <button class="btn bg-light-coral duration-300 ease-in-out hover:bg-opacity-90">
        Delete
      </button>
      <button class="btn w-40 bg-purple duration-300 ease-in-out hover:bg-opacity-90">
        Mark as Paid
      </button>
    </>
  );
});
