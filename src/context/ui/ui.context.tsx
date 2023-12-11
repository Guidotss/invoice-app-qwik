import { createContextId } from "@builder.io/qwik";

export interface UiContextProps {
  isDarkmode: boolean;
  isSideMenuOpen: boolean;
}

export const UiContext = createContextId<UiContextProps>("ui-context");
