import { component$, Slot } from "@builder.io/qwik";

interface Props {
  styles?: string;
  titlesContainerStyles?: string;
}

export default component$(({ styles }: Props) => {
  return (
    <header class={`flex w-1/2 items-center justify-center ${styles}`}>
      <Slot name="header-titles" />
      <Slot name="buttons-container" />
    </header>
  );
});
