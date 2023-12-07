import { component$ } from "@builder.io/qwik";
import { IllustrationEmpty } from "../icons/icons";

export default component$(() => (
  <>
    <figure>
      <IllustrationEmpty />
    </figure>
    <div class="item-center mt-10 flex flex-col justify-center text-center">
      <h1 class="text-3xl font-bold text-light-gray">There is nothing here</h1>
      <p class="mt-5 w-[260px] self-center text-light-gray">
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  </>
));
