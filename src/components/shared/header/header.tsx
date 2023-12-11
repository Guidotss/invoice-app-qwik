import { component$, Slot } from "@builder.io/qwik";

interface Props {
  styles?: string;
  titlesContainerStyles?: string;
}

export default component$(({ styles }: Props) => {
  return (
    <header
      class={`flex items-center justify-center md:w-2/3 2xl:w-1/2 ${styles}`}
    >
      <Slot name="header-titles" />
      <Slot name="buttons-container" />
    </header>
  );
});
