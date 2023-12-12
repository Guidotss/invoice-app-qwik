import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { UiContext, type UiContextProps } from "./ui.context";

export default component$(() => {
  const uiState = useStore<UiContextProps>({
    isDarkmode: true,
    isSideMenuOpen: true,
  });

  useContextProvider(UiContext, uiState);

  useVisibleTask$(({ track }) => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark");
      uiState.isDarkmode = true;
    } else {
      uiState.isDarkmode = theme === "dark";
    }
    track(() => uiState.isDarkmode);
  });

  return <Slot />;
});
