import {
  BUILDINGS,
  BUILDINGS_AND_VALUABLES,
  INDIVIDUALS,
  ONBOARDING_ACCOUNT_INFO,
  ONBOARDING_PROPERTY_INFO,
  ONBOARDING_PROPERTY_LOCATION,
  VALUABLES,
} from "@/config";
import {
  corporateEnterpriseForm,
  individualsForm,
} from "@/config/onboarding/create-an-account";
import {
  buildingsAndValuablesIndividual,
  buildingsIndividualAndCE,
  valuablesIndividualAndCE,
} from "@/config/onboarding/property-information";
import { propertyLocationForm } from "@/config/onboarding/property-location";

export const useGenerateFormFields = (
  whatToInsure: string,
  whoAreYou: string,
  dispatch: string,
) => {
  let form;

  switch (dispatch) {
    case ONBOARDING_ACCOUNT_INFO:
      form =
        whoAreYou === INDIVIDUALS ? individualsForm : corporateEnterpriseForm;
      break;

    case ONBOARDING_PROPERTY_INFO:
      switch (whatToInsure) {
        case BUILDINGS:
          form = buildingsIndividualAndCE;
          break;
        case VALUABLES:
          form = valuablesIndividualAndCE;
          break;
        case BUILDINGS_AND_VALUABLES:
          form = buildingsAndValuablesIndividual;
          break;
        default:
          break;
      }
      break;

    case ONBOARDING_PROPERTY_LOCATION:
      form = propertyLocationForm;
      break;

    default:
      break;
  }

  return form;
};
