import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <button class="btn bg-periwinkle bg-opacity-5 py-4">Edit</button>
      <button class="btn bg-light-coral duration-300 ease-in-out hover:bg-opacity-90">
        Delete
      </button>
      <button class="btn w-40 bg-purple duration-300 ease-in-out hover:bg-opacity-90">
        Mark as Paid
      </button>
    </>
  );
});
