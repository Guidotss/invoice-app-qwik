import { component$ } from "@builder.io/qwik";
import { useUiStore } from "~/utils/hooks/useUiStore";

interface Props {
  column?: boolean;
  title: string;
  subtitle: string;
  titleStyles?: string;
  subtitleStyles?: string;
  circleDecorator?: boolean;
  circleDecoratorStyles?: string;
}
export default component$(
  ({
    title,
    subtitle,
    titleStyles,
    subtitleStyles,
    column,
    circleDecorator,
    circleDecoratorStyles,
  }: Props) => {
    const { isDarkMode } = useUiStore();
    return (
      <div
        class={`flex w-full ${column ? "flex-col" : "flex-row items-center"}`}
      >
        <h1 class={`${titleStyles} ${!isDarkMode.value && 'text-deep-purple'}`}>{title}</h1>

        <div class={`flex items-center capitalize ${subtitleStyles}`}>
          {circleDecorator && (
            <div
              class={`h-3 w-3 rounded-full ${
                circleDecoratorStyles || "bg-white"
              }`}
            ></div>
          )}
          <h2>{subtitle}</h2>
        </div>
      </div>
    );
  },
);
