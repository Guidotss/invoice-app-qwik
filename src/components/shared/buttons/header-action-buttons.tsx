import { component$ } from "@builder.io/qwik";

export default component$(({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <>
      <button
        class={`rounded-full bg-periwinkle px-5 font-bold outline-none ${
          isDarkMode
            ? "bg-opacity-5 text-light-gray"
            : "bg-opacity-70 text-soft-periwinkle"
        } py-4`}
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
