import { component$, useContext } from "@builder.io/qwik";
import { UiContext } from "~/context";

export default component$(() => {
  const { isSideMenuOpen } = useContext(UiContext);

  return isSideMenuOpen ? (
    <div class="absolute h-screen w-full bg-midnight-black bg-opacity-40">
      <div>Hola</div>
    </div>
  ) : null;
});
