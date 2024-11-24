import { COMBOBOX, INPUT, SELECT, STRING } from "@/config";
import { FormBuilderProps } from "@/types";
import { LGAs, states } from "./utils";

export const propertyLocationForm: FormBuilderProps = {
  id: 4,
  title: "Property location",
  step: 6,
  formStage: 3,
  formFields: [
    {
      id: "house_number",
      inputType: STRING,
      formType: INPUT,
      title: "House number",
    },
    {
      id: "street",
      inputType: STRING,
      formType: INPUT,
      title: "Street",
    },
    {
      id: "estate_name",
      inputType: STRING,
      formType: INPUT,
      title: "Estate name (optional)",
      optional: true,
    },
    {
      id: "city",
      inputType: STRING,
      formType: INPUT,
      title: "City",
    },
    {
      id: "state",
      inputType: STRING,
      formType: SELECT,
      selectItems: states,
      title: "State",
    },
    {
      id: "lga",
      inputType: STRING,
      formType: COMBOBOX,
      comboItems: LGAs,
      title: "LGA",
    },
    {
      id: "postal_code",
      inputType: STRING,
      formType: INPUT,
      title: "Postal Code (optional)",
      optional: true,
    },
  ],
};
