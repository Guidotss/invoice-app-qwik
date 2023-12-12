import { useContext, $, useComputed$ } from "@builder.io/qwik";

import { UiContext } from "~/context";

export const useUiStore = () => {
  const uiState = useContext(UiContext);

  const toggleTheme = $(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "light") {
      uiState.isDarkmode = true;
      localStorage.setItem("theme", "dark");
    } else {
      uiState.isDarkmode = false;
      localStorage.setItem("theme", "light");
    }
  });

  const openSideMenu = $(() => {
    uiState.isSideMenuOpen = true;
  });
  const closeSideMenu = $(() => {
    uiState.isSideMenuOpen = false;
  });

  return {
    isDarkMode: useComputed$(() => uiState.isDarkmode),
    isSideMenuOpen: useComputed$(() => uiState.isSideMenuOpen),
    toggleTheme,
    openSideMenu,
    closeSideMenu,
  };
};
