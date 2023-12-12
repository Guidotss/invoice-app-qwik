import { type QwikMouseEvent, component$ } from "@builder.io/qwik";
import "animate.css";
import { useUiStore } from "~/utils/hooks/useUiStore";
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
        <form class="mt-10 flex flex-col overflow-y-auto">
          <h3 class="mb-5 font-semibold text-purple">Bill from</h3>
          <div class="flex flex-col">
            <label
              for="bill-from-street"
              class={`mb-2 ${
                isDarkMode.value ? "text-light-gray" : "text-deep-purple"
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
          <div class="mt-10 flex items-center gap-x-5">
            <div class="flex flex-col">
              <label
                for="bill-from-city"
                class={`mb-2 ${
                  isDarkMode.value ? "text-light-gray" : "text-deep-purple"
                }`}
              >
                City
              </label>
              <input
                id="bill-from-city"
                type="text"
                class="input w-40"
                placeholder="London"
              />
            </div>
            <div class="flex flex-col ">
              <label
                for="bill-from-post-code"
                class={`mb-2 ${
                  isDarkMode.value ? "text-light-gray" : "text-deep-purple"
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
                  isDarkMode.value ? "text-light-gray" : "text-deep-purple"
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
        </form>
      </div>
    </div>
  ) : null;
});
