import {
  INPUT,
  SELECT,
  SWITCH,
  CHECKBOX,
  TEXTAREA,
  CALENDAR,
  COMBOBOX,
  EMAIL,
  MULTI_SELECT,
} from "@/config";
import { z, ZodSchema } from "zod";

import { FormBuilderProps } from "@/types";

export const createZodSchema = (formFields: FormBuilderProps["formFields"]) => {
  const schema = formFields.reduce<Record<string, ZodSchema>>((acc, field) => {
    const message = field.errorMessage ?? "*";

    switch (field.formType) {
      case INPUT:
        if (field.inputType === EMAIL) {
          acc[field.id] = z.string({ required_error: message }).email("*");
        } else {
          field.optional
            ? (acc[field.id] = z.string().optional())
            : (acc[field.id] = z
                .string({ required_error: message })
                .min(2, { message }));
        }
        break;

      case SELECT:
        acc[field.id] = z.string().min(2, { message }).default("");
        break;

      case MULTI_SELECT:
        acc[field.id] = z.array(z.string()).min(1, { message }).default([]);
        break;

      case SWITCH:
        acc[field.id] = field.optional
          ? z.boolean().optional()
          : z.boolean().refine((val) => val === true, { message });
        break;

      case CHECKBOX:
        acc[field.id] = z
          .boolean()
          .refine((val) => val === true, { message: "" });
        break;

      case TEXTAREA:
        acc[field.id] = z
          .string()
          .min(10, { message })
          .max(200, { message: "Must be less than 200 characters." })
          .default("");
        break;

      case CALENDAR:
        acc[field.id] = z.date({ required_error: message });
        break;

      case COMBOBOX:
        acc[field.id] = z
          .string({ required_error: message })
          .min(3, { message });
        break;

      default:
        acc[field.id] = z.any().optional();
        break;
    }
    return acc;
  }, {});

  return z.object(schema);
};
