import { component$, Slot } from "@builder.io/qwik";

interface Props {
  styles?: string;
  titlesContainerStyles?: string;
}

export default component$(({ styles }: Props) => {
  return (
    <header class={`flex 2xl:w-1/2 md:w-2/3 items-center justify-center ${styles}`}>
      <Slot name="header-titles" />
      <Slot name="buttons-container" />
    </header>
  );
});
