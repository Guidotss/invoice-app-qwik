import { $, component$, useSignal } from "@builder.io/qwik";
import { MoonIcon, SunIcon } from "../icons/icons";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const isDarkMode = useSignal<boolean>(true);

  const toggleDarkMode = $(() => {
    isDarkMode.value = !isDarkMode.value;
  });

  return (
    <>
      <aside class="flex w-24 flex-col items-center rounded-br-[30px] rounded-tr-[30px] bg-midnight-blue">
        <header class="h-full">
          <Link href="/">
            <img
              src="src\media\thunder.png"
              alt="Thunder"
              class="mx-auto mt-5 h-20 w-20"
              height={80}
              width={80}
            />
          </Link>
        </header>
        <i class="cursor-pointer py-8" onClick$={toggleDarkMode}>
          {isDarkMode.value ? <SunIcon /> : <MoonIcon />}
        </i>
        <footer class="flex w-full items-center justify-center border-t-[1px] border-t-manatee p-2">
          <img
            src="assets\image-avatar.jpg"
            alt="Avatar"
            class="mx-auto mt-5 cursor-pointer rounded-full"
            height={50}
            width={50}
          />
        </footer>
      </aside>
    </>
  );
});
