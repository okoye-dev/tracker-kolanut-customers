import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type FormTrackerProps = {
  stages: {
    id: number;
    img: {
      active: StaticImageData;
      inactive: StaticImageData;
    };
    title?: string;
    description?: string;
  }[];
  currentStage: number;
};

export type FormBuilderProps = {
  id: number;
  title: string;
  step: number;
  formStage: number;
  formFields: {
    id: string;
    inputType: string;
    formType: string;
    title?: string;
    placeholder?: string;
    description?: ReactNode;
    extraInformation?: ReactNode;
    errorMessage?: string;
    selectItems?: string[];
    multiSelectItems?: { label: string; value: string }[];
    comboItems?: { label: string; value: string }[];
    optional?: boolean;
    isHalfWidth?: boolean;
  }[];
};

export type AccountInfo = {
  // Fields for both corporate and individual forms
  company_name?: string;
  company_registered_name?: string;
  business_email?: string;
  business_phone_number?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  alternative_phone_number?: string;
  date_of_birth?: string;
  password?: string;
  terms_of_service?: boolean;
};

export type PropertyInfo = {
  type_of_property?: string;
  property_usage?: string[];
  property_value?: number;
  insurance_duration?: string;
  burglary_insurance?: boolean;
  static_property_value?: string;
  luxury_mobile_property_value?: string;
  fully_mobile_property_value?: string;
};

export type PropertyLocation = {
  house_number?: string;
  street?: string;
  estate_name?: string;
  city?: string;
  state?: string;
  lga?: string;
  postal_code?: string;
};

export type CompanyCard = {
  img: StaticImageData;
  title: string;
  content: string;
  price: number;
}[];

export type Filter = {
  title: string;
  selectItems?: string[];
  isNumberRange?: boolean;
  numberRange?: [number, number];
  labels?: [string, string];
};
