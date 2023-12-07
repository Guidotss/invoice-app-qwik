import { component$, useStore, $, type QwikMouseEvent } from "@builder.io/qwik";
import { customSelectOptions } from "~/constants";

type Status = { id: number; name: string; isSelected: boolean };

interface Props {
  isOpen: boolean;
}
export default component$(({ isOpen }: Props) => {
  const status = useStore<readonly Status[]>(customSelectOptions);

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

  return (
    <>
      {isOpen && (
        <ul class="absolute top-24 w-40 overflow-hidden rounded-lg bg-midnight-blue shadow-lg lg:right-[32vw]">
          {status.map((status, index) => (
            <li
              key={status.id}
              class="cursor-pointer px-4 py-2 text-light-gray duration-300 ease-in-out hover:opacity-70"
              onClick$={(event) => toggleStatus(event, index + 1)}
            >
              <input type="checkbox" checked={status.isSelected} />
              <span class="ml-5 font-semibold">{status.name}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
});
