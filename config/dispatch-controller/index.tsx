import {
  goToStep,
  updateAccountInfo,
  updatePropertyInfo,
  updatePropertyLocation,
} from "@/redux/slices/onboardingSlice";
import {
  ONBOARDING_ACCOUNT_INFO,
  ONBOARDING_GO_TO_STEP,
  ONBOARDING_PROPERTY_INFO,
  ONBOARDING_PROPERTY_LOCATION,
} from "..";

export const dispatchController = (dispatch: string, action: any) => {
  switch (dispatch) {
    case ONBOARDING_GO_TO_STEP:
      return goToStep(action);
    case ONBOARDING_ACCOUNT_INFO:
      return updateAccountInfo(action);
    case ONBOARDING_PROPERTY_INFO:
      return updatePropertyInfo(action);
    case ONBOARDING_PROPERTY_LOCATION:
      return updatePropertyLocation(action);
    default:
      return;
  }
};
