import {
  BOOLEAN,
  INPUT,
  MULTI_SELECT,
  NUMBER,
  SELECT,
  STRING,
  SWITCH,
} from "@/config";
import { FormBuilderProps } from "@/types";
import Image from "next/image";
import fire from "@/assets/svgs/fire.svg";
import lock from "@/assets/svgs/lock.svg";

const fireAndNaturalDisaster = (
  <div className="flex items-center gap-3">
    <Image src={fire} alt="" className="h-9 w-9 sm:h-12 sm:w-12" />

    <div className="flex flex-col gap-2">
      <h1 className="text-[16px] font-semibold leading-5 text-gray-secondary">
        All properies are insured against Fire & natural disaster
      </h1>
      <div className="hidden text-sm text-gray-primary lg:flex">
        We insure all properties against fire and natural disaster like
        Lightning, explosion, thunderbolt and subterranean fire, Bursting or
        overflowing of water tanks, aircraft dropped therefrom. Hurricane,
        cyclone, tornado, windstorm. earthquake and volcanic eruption , flood
        etc.
      </div>
    </div>
  </div>
);

const burglaryInsurance = (
  <div className="flex items-center gap-3">
    <Image src={lock} alt="" className="h-9 w-9 sm:h-12 sm:w-12" />

    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-gray-secondary">
        Do you want to insure properties against burglary? (optional)
      </h1>
      <p className="text-sm text-gray-primary">
        Insure property against theft of property and damages and risk incurred
        caused by theft
      </p>
    </div>
  </div>
);

export const buildingsIndividualAndCE: FormBuilderProps = {
  id: 3,
  title: "Property info",
  step: 5,
  formStage: 2,
  formFields: [
    {
      id: "type_of_property",
      inputType: STRING,
      formType: SELECT,
      title: "Type of property",
      selectItems: [
        "Bungalow",
        "Duplex",
        "Storey building (less than 2 floors)",
        "Storey building (less than 4 floors)",
        "Storey building (more than 3 floors)",
      ],
    },
    {
      id: "property_usage",
      inputType: STRING,
      formType: MULTI_SELECT,
      title: "Property usage",
      multiSelectItems: [
        { value: "Residential", label: "Residential" },
        { value: "Commercial", label: "Commercial" },
        { value: "Industrial", label: "Industrial" },
      ],
    },
    {
      id: "property_value",
      inputType: NUMBER,
      formType: INPUT,
      title: "Property value",
      placeholder: "N 0.00",
    },
    {
      id: "insurance_duration",
      inputType: STRING,
      formType: SELECT,
      title: "Insurance duration",
      selectItems: [
        "3 months",
        "6 months",
        "9 months",
        "12 months",
        "18 months",
        "2 years",
        "3, 4, 5 years",
      ],
    },
    {
      id: "burglary_insurance",
      inputType: BOOLEAN,
      formType: SWITCH,
      optional: true,
      title: "Select the risk you are insuring against",
      extraInformation: fireAndNaturalDisaster,
      description: burglaryInsurance,
    },
  ],
};

export const valuablesIndividualAndCE: FormBuilderProps = {
  id: 3,
  title: "Property info",
  step: 5,
  formStage: 2,
  formFields: [
    {
      id: "insurance_duration",
      inputType: STRING,
      formType: SELECT,
      title: "Insurance duration",
      selectItems: [
        "3 months",
        "6 months",
        "9 months",
        "12 months",
        "18 months",
        "2 years",
        "3, 4, 5 years",
      ],
    },
    {
      id: "static_property_value",
      inputType: STRING,
      formType: INPUT,
      title: "Add all your static property value (Furniture, Electronics, etc)",
      placeholder: "N 0.00",
    },
    {
      id: "luxury_mobile_property_value",
      inputType: STRING,
      formType: INPUT,
      title:
        "Add all your luxury mobile property value (Jewelries, Expensive wrist watches, etc)",
      placeholder: "N 0.00",
    },
    {
      id: "fully_mobile_property_value",
      inputType: STRING,
      formType: INPUT,
      title: "Add all your fully mobile property value (Laptops, Phones, etc)",
      placeholder: "N 0.00",
    },
    {
      id: "burglary_insurance",
      inputType: BOOLEAN,
      formType: SWITCH,

      optional: true,
      title: "Select the risk you are insuring against",
      extraInformation: fireAndNaturalDisaster,
      description: burglaryInsurance,
    },
  ],
};

export const buildingsAndValuablesIndividual: FormBuilderProps = {
  id: 3,
  title: "Property info",
  step: 5,
  formStage: 2,
  formFields: [
    {
      id: "type_of_property",
      inputType: STRING,
      formType: SELECT,
      title: "Type of property",
      selectItems: [
        "Bungalow",
        "Duplex",
        "Storey building (less than 2 floors)",
        "Storey building (less than 4 floors)",
        "Storey building (more than 3 floors)",
      ],
    },
    {
      id: "property_usage",
      inputType: STRING,
      formType: MULTI_SELECT,
      title: "Property usage",
      multiSelectItems: [
        { value: "Residential", label: "Residential" },
        { value: "Commercial", label: "Commercial" },
        { value: "Industrial", label: "Industrial" },
      ],
    },
    {
      id: "property_value",
      inputType: NUMBER,
      formType: INPUT,
      title: "Property value",
      placeholder: "N 0.00",
    },
    {
      id: "insurance_duration",
      inputType: STRING,
      formType: SELECT,
      title: "Insurance duration",
      selectItems: [
        "3 months",
        "6 months",
        "9 months",
        "12 months",
        "18 months",
        "2 years",
        "3, 4, 5 years",
      ],
    },
    {
      id: "burglary_insurance",
      inputType: BOOLEAN,
      formType: SWITCH,

      optional: true,
      title: "Select the risk you are insuring against",
      extraInformation: fireAndNaturalDisaster,
      description: burglaryInsurance,
    },
    {
      id: "static_property_value",
      inputType: STRING,
      formType: INPUT,
      title: "Add all your static property value (Furniture, Electronics, etc)",
      placeholder: "N 0.00",
    },
    {
      id: "luxury_mobile_property_value",
      inputType: STRING,
      formType: INPUT,
      title:
        "Add all your luxury mobile property value (Jewelries, Expensive wrist watches, etc)",
      placeholder: "N 0.00",
    },
    {
      id: "fully_mobile_property_value",
      inputType: STRING,
      formType: INPUT,
      title: "Add all your fully mobile property value (Laptops, Phones, etc)",
      placeholder: "N 0.00",
    },
  ],
};

export const BuildingsAndValuablesCE: FormBuilderProps = {
  id: 3,
  title: "Property info",
  step: 5,
  formStage: 2,
  formFields: [],
};
