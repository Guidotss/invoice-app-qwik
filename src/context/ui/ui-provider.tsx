import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { UiContext, type UiContextProps } from "./ui.context";

export default component$(() => {
  const { isDarkmode, isSideMenuOpen } = useStore<UiContextProps>({
    isDarkmode: false,
    isSideMenuOpen: false,
  });

  useContextProvider(UiContext, { isDarkmode, isSideMenuOpen });

  useVisibleTask$(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    }
  });

  return <Slot />;
});
