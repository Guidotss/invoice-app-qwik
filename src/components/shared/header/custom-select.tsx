import {
  component$,
  useStore,
  $,
  type QwikMouseEvent,
  useSignal,
} from "@builder.io/qwik";
import { ArrowDown } from "~/components/icons/icons";
import { customSelectOptions } from "~/constants";
import { useUiStore } from "~/utils/hooks/useUiStore";

type Status = { id: number; name: string; isSelected: boolean };

export default component$(() => {
  const status = useStore<readonly Status[]>(customSelectOptions);
  const isOpen = useSignal<boolean>(false);
  const { isDarkMode } = useUiStore();

  const toggleStatus = $(
    (event: QwikMouseEvent<HTMLLIElement, MouseEvent>, id: number) => {
      event.stopPropagation();
      status.map((status) => {
        if (status.id === id) {
          status.isSelected = !status.isSelected;
        } else {
          status.isSelected = false;
        }

        return status;
      });
    },
  );

  const toggleIsOpen = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <div class="flex cursor-pointer items-center gap-2">
      <div class="flex items-center gap-x-2" onClick$={toggleIsOpen}>
        <span
          class={`font-bold ${
            isDarkMode.value ? "text-light-gray" : "text-deep-purple"
          }`}
        >
          Filter by status
        </span>
        <i>
          {isOpen.value ? (
            <ArrowDown
              rotate="transform rotate-180"
            />
          ): (

            <ArrowDown />
          )}
        </i>
      </div>
      {isOpen.value && (
        <ul class={`absolute w-40 overflow-hidden rounded-lg ${isDarkMode.value ? "bg-midnight-blue": "bg-white"} shadow-lg lg:right-[30vw] lg:top-20 2xl:right-[32vw] 2xl:top-24 z-10`}>
          {status.map((status, index) => (
            <li
              key={status.id}
              class={`cursor-pointer px-4 py-2 ${!isDarkMode.value ? "text-deep-purple" : 'text-light-gray'} duration-300 ease-in-out hover:opacity-70`}
              onClick$={(event) => toggleStatus(event, index + 1)}
            >
              <input type="checkbox" checked={status.isSelected} />
              <span class="ml-5 font-semibold">{status.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
