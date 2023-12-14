import { component$ } from "@builder.io/qwik";

export default component$(({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <form class="mt-10 flex flex-col overflow-hidden gap-y-2">
      <div class="flex flex-col">
        <h3 class="mb-5 font-semibold text-purple">Bill from</h3>
        <div class="flex flex-col">
          <label
            for="bill-from-street"
            class={`mb-2 ${
              isDarkMode ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            Street Address
          </label>
          <input
            id="bill-from-street"
            type="text"
            class="input"
            placeholder="19 Union Terrace"
          />
        </div>
      </div>

      <div class="invoice-scroll flex items-center gap-x-5 overflow-x-auto">
        <div class="flex flex-col">
          <label
            for="bill-from-city"
            class={`mb-2 ${
              isDarkMode ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            City
          </label>
          <input
            id="bill-from-city"
            type="text"
            class="input mb-2 w-40"
            placeholder="London"
          />
        </div>
        <div class="w-full">
          <label
            for="bill-from-post-code"
            class={`mb-2 ${
              isDarkMode ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            Post Code
          </label>
          <input
            id="bill-from-post-code"
            type="text"
            class="input w-40"
            placeholder="E1 3EZ"
          />
        </div>
        <div class="flex flex-col ">
          <label
            for="bill-from-country"
            class={`mb-2 ${
              isDarkMode ? "text-light-gray" : "text-deep-purple"
            }`}
          >
            Country
          </label>
          <input
            id="bill-from-country"
            type="text"
            class="input w-36"
            placeholder="United Kingdom"
          />
        </div>
      </div>
      <div class="flex gap-x-10">
        <div class="flex flex-col justify-center">
          <label
            for="invoice-date"
            class={`${isDarkMode ? "text-periwinkle" : "text-purple"} mb-2`}
          >
            Invoice Date
          </label>
          <input id="invoice-date" type="date" class="input w-50" />
        </div>
        <div class="flex flex-col">
          <label
            for="payment-terms"
            class={`${isDarkMode ? "text-periwinkle" : "text-purple"} mb-2`}
          >
            Payment Terms
          </label>
          <input id="payment-terms" type="date" class="input w-50" />
        </div>
      </div>
      <div class="flex flex-col">
        <label
          for="project-description"
          class={`${isDarkMode ? "text-periwinkle" : "text-purple"} mb-2`}
        >
          Project Description"
        </label>
        <input
          id="project-description"
          type="text"
          class="input"
          placeholder="Graphic Design Service"
        />
      </div>
      <h3 class="text-periwinkle font-semibold">Item List</h3>
    </form>
  );
});
