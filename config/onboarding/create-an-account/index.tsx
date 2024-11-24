import {
  STRING,
  EMAIL,
  BOOLEAN,
  CHECKBOX,
  INPUT,
  CALENDAR,
  NUMBER,
} from "@/config";
import { FormBuilderProps } from "@/types";
import Link from "next/link";

const privacyPolicy = (
  <div className="inline">
    I read, understand and agree to the{" "}
    <Link className="font-semibold text-red" href="">
      Terms of service
    </Link>{" "}
    and{" "}
    <Link className="font-semibold text-red" href="">
      Privacy policy
    </Link>
  </div>
);

export const corporateEnterpriseForm: FormBuilderProps = {
  id: 1,
  title: "Create an account",
  step: 3,
  formStage: 1,
  formFields: [
    {
      id: "company_name",
      inputType: STRING,
      formType: INPUT,
      title: "Company name",
    },
    {
      id: "company_registered_name",
      inputType: STRING,
      formType: INPUT,
      title: "Company registered name",
    },
    {
      id: "business_email",
      inputType: EMAIL,
      formType: INPUT,
      title: "Business email",
    },
    {
      id: "business_phone_number",
      inputType: NUMBER,
      formType: INPUT,
      title: "Business phone number",
      placeholder: "+234",

      isHalfWidth: true,
    },
    {
      id: "alternative_phone_number",
      inputType: NUMBER,
      formType: INPUT,
      title: "Alternative phone number (optional)",
      placeholder: "+234",
      optional: true,
      isHalfWidth: true,
    },
    {
      id: "password",
      inputType: STRING,
      formType: INPUT,
      title: "Password",
    },
    {
      id: "terms_of_service",
      inputType: BOOLEAN,
      formType: CHECKBOX,
      description: privacyPolicy,
    },
  ],
};

export const individualsForm: FormBuilderProps = {
  id: 2,
  title: "Create an account",
  step: 3,
  formStage: 1,
  formFields: [
    {
      id: "first_name",
      inputType: STRING,
      formType: INPUT,
      title: "First name",
    },
    {
      id: "middle_name",
      inputType: STRING,
      formType: INPUT,
      title: "Middle name (optional)",
      optional: true,
    },
    {
      id: "last_name",
      inputType: STRING,
      formType: INPUT,
      title: "Last name",
    },
    {
      id: "email",
      inputType: EMAIL,
      formType: INPUT,
      title: "Email",
    },
    {
      id: "phone_number",
      inputType: NUMBER,
      formType: INPUT,
      title: "Phone number",
      placeholder: "+234",

      isHalfWidth: true,
    },
    {
      id: "alternative_phone_number",
      inputType: NUMBER,
      formType: INPUT,
      title: "Alternative phone number (optional)",
      placeholder: "+234",
      optional: true,
      isHalfWidth: true,
    },
    {
      id: "date_of_birth",
      inputType: STRING,
      formType: CALENDAR,
      title: "Date of birth",
    },
    {
      id: "password",
      inputType: STRING,
      formType: INPUT,
      title: "Password",
    },
    {
      id: "terms_of_service",
      inputType: BOOLEAN,
      formType: CHECKBOX,

      description: privacyPolicy,
    },
  ],
};
