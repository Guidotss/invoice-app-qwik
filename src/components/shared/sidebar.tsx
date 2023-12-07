import { component$ } from "@builder.io/qwik";
import { SunIcon } from "../icons/icons";

export default component$(() => {
  return (
    <>
      <aside class="flex w-24 flex-col items-center rounded-br-[30px] rounded-tr-[30px] bg-midnight-blue">
        <header class="h-full">
          <img
            src="src\media\thunder.png"
            alt="Thunder"
            class="mx-auto mt-5 h-20 w-20"
            height={80}
            width={80}
          />
        </header>
        <i class="cursor-pointer py-8">
          <SunIcon />
        </i>
        <footer class="flex w-full items-center justify-center border-t-[1px] border-t-manatee p-2">
          <img
            src="assets\image-avatar.jpg"
            alt="Avatar"
            class="mx-auto mt-5 rounded-full cursor-pointer"
            height={50}
            width={50}
          />
        </footer>
      </aside>
    </>
  );
});
