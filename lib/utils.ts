import { FormBuilderProps } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFormEntries(formData: {
  [x: string]: FormBuilderProps["formFields"];
}) {
  const formattedValues = Object.fromEntries(
    Object.entries(formData).map(([key, value]) => [
      key,
      value instanceof Date
        ? value.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })
        : value,
    ]),
  );

  return formattedValues;
}

/**
 * Utilities to convert formatted currency to a number and vice versa.
 */
export const formattedToNumber = (formatted: string): number => {
  return parseFloat(
    formatted.replace(/[^0-9.-]+/g, "")
  );
};

export const numberToFormatted = (num: number): string => {
  return `N${num.toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;
};
