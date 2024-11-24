import createActive from "@/assets/svgs/create-acc-active.svg";
import create from "@/assets/svgs/create-acc.svg";
import propertyInfoActive from "@/assets/svgs/property-info-active.svg";
import propertyInfo from "@/assets/svgs/property-info.svg";
import propertyLocActive from "@/assets/svgs/property-loc-active.svg";
import propertyLoc from "@/assets/svgs/property-loc.svg";
import quotation from "@/assets/svgs/quotation.svg";
import { FormTrackerProps } from "@/types";

import mcreateActive from "@/assets/svgs/m-create-acc-active.svg";
import mcreate from "@/assets/svgs/m-create-acc.svg";
import mpropertyInfoActive from "@/assets/svgs/m-property-info-active.svg";
import mpropertyInfo from "@/assets/svgs/m-property-info.svg";
import mpropertyLocActive from "@/assets/svgs/m-property-loc-active.svg";
import mpropertyLoc from "@/assets/svgs/m-property-loc.svg";
import mquotation from "@/assets/svgs/m-quotation.svg";
export const useOnboardingStages = (mobile?: boolean) => {
  return mobile ? mobileFormStages : formStages;
};

export const useFormatParam = (param: string | string | undefined) => {
  return param?.replaceAll(" ", "_").toLowerCase();
};

const formStages: FormTrackerProps["stages"] = [
  {
    id: 1,
    img: {
      active: createActive,
      inactive: create,
    },
    title: "Create an account",
    description: "Provide your email and password",
  },
  {
    id: 2,
    img: {
      active: propertyInfoActive,
      inactive: propertyInfo,
    },
    title: "Property Information",
    description: "Provide the property basic information.",
  },
  {
    id: 3,
    img: {
      active: propertyLocActive,
      inactive: propertyLoc,
    },
    title: "Property Location",
    description: "Provide the street, city and state details",
  },
  {
    id: 4,
    img: {
      active: quotation,
      inactive: quotation,
    },
    title: "Quotation",
  },
];

const mobileFormStages: FormTrackerProps["stages"] = [
  {
    id: 1,
    img: {
      active: mcreateActive,
      inactive: mcreate,
    },
  },
  {
    id: 2,
    img: {
      active: mpropertyInfoActive,
      inactive: mpropertyInfo,
    },
  },
  {
    id: 3,
    img: {
      active: mpropertyLocActive,
      inactive: mpropertyLoc,
    },
  },
  {
    id: 4,
    img: {
      active: mquotation,
      inactive: mquotation,
    },
  },
];
