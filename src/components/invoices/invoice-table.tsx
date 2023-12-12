import { component$ } from "@builder.io/qwik";
import type { Items } from "~/interfaces";

interface Props {
  isDarkMode: boolean;
  items: Items[];
}

export default component$(({ items, isDarkMode }: Props) => {
  return (
    <section
      class={`mt-10 flex justify-center rounded-t-lg ${
        isDarkMode ? "bg-charcoal-blue" : "bg-periwinkle bg-opacity-20"
      } p-10`}
    >
      <table class="w-full">
        <thead>
          <tr>
            <th
              class={`text-left text-sm  font-semibold ${
                isDarkMode ? "text-periwinkle" : "text-soft-periwinkle"
              }`}
            >
              Item Name
            </th>
            <th
              class={`w-10 text-left text-lg font-semibold ${
                isDarkMode ? "text-periwinkle" : "text-soft-periwinkle"
              }`}
            >
              QTY.
            </th>
            <th
              class={`w-48 text-right text-lg font-semibold ${
                isDarkMode ? "text-periwinkle" : "text-soft-periwinkle"
              }`}
            >
              Price
            </th>
            <th
              class={`text-right text-lg font-semibold ${
                isDarkMode ? "text-periwinkle" : "text-soft-periwinkle"
              }`}
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Items) => (
            <tr key={item.name} class="text-xl">
              <td
                class={`font-bold ${
                  isDarkMode ? "text-light-gray" : "text-deep-purple"
                }`}
              >
                {item.name}
              </td>
              <td
                class={`text-center font-bold ${
                  isDarkMode ? "text-light-gray" : "text-soft-periwinkle"
                }`}
              >
                {item.quantity}
              </td>
              <td
                class={`text-md text-right font-bold ${
                  isDarkMode ? "text-light-gray" : "text-soft-periwinkle"
                }`}
              >
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "GBP",
                })}
              </td>
              <td
                class={`text-right font-bold ${
                  isDarkMode ? "text-light-gray" : "text-deep-purple"
                }`}
              >
                {item.total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "GBP",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
});
