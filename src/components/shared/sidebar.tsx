import { component$ } from "@builder.io/qwik";
import { MoonIcon, SunIcon } from "../icons/icons";
import { Link } from "@builder.io/qwik-city";
import ThunderImg from "~/media/thunder.png";
import Avatar from "~/media/avatar.jpg";
import { useUiStore } from "~/utils/hooks/useUiStore";

export default component$(() => {
  const { isDarkMode, toggleTheme } = useUiStore();

  return (
    <div class={`${isDarkMode.value ? "bg-midnight-black" : "bg-light-gray"}`}>
      <aside class="flex h-screen w-24 flex-col items-center rounded-br-[30px] rounded-tr-[30px] bg-midnight-blue">
        <header class="h-full">
          <Link href="/">
            <img
              src={ThunderImg}
              alt="Thunder"
              class="mx-auto mt-5 cursor-pointer"
              height={80}
              width={80}
            />
          </Link>
        </header>
        <i class="cursor-pointer py-8" onClick$={toggleTheme}>
          {isDarkMode.value ? <SunIcon /> : <MoonIcon />}
        </i>
        <footer class="flex w-full items-center justify-center border-t-[1px] border-t-manatee p-2">
          <img
            src={Avatar}
            alt="Avatar"
            class="mx-auto mt-5 cursor-pointer rounded-full"
            height={50}
            width={50}
          />
        </footer>
      </aside>
    </div>
  );
});
