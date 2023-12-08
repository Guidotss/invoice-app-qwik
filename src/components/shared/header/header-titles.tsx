import { component$ } from "@builder.io/qwik";

interface Props {
  column?: boolean;
  title: string;
  subtitle: string;
  titleStyles?: string;
  subtitleStyles?: string;
}
export default component$(
  ({ title, subtitle, titleStyles, subtitleStyles, column }: Props) => {
    return (
      <div class={`flex w-full ${column ? "flex-col" : "flex-row"}`}>
        <h1 class={titleStyles}>{title}</h1>
        <h2 class={subtitleStyles}>{subtitle}</h2>
      </div>
    );
  },
);
