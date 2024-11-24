import React, { FC } from "react";
import WhatToInsure from "./WhatToInsure";
import WhoAreYou from "./WhoAreYou";
import { useOnboardingStages } from "@/hooks/onboarding";
import FormTracker from "@/components/FormTracker";
import FormWrapper from "@/components/FormWrapper";
import {
  BUILDINGS_AND_VALUABLES,
  CORPORATE_ENTERPRISE,
  ONBOARDING_ACCOUNT_INFO,
  ONBOARDING_PROPERTY_INFO,
  ONBOARDING_PROPERTY_LOCATION,
  QUOTE,
} from "@/config";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import EmailVerification from "./EmailVerification";
import FormTrackerMobile from "@/components/FormTrackerMobile";

// interface IProps {}

const CreateAnAccountForms: FC = () => {
  const stages = useOnboardingStages();
  const mobileStages = useOnboardingStages(true);

  const formStage = useSelector(
    (state: RootState) => state.onboarding.formStage,
  );
  const whoAreYou = useSelector(
    (state: RootState) => state.onboarding.whoAreYou,
  );
  const whatToInsure = useSelector(
    (state: RootState) => state.onboarding.whatToInsure,
  );

  let shouldSkipBackwards = false;
  if (
    whoAreYou === CORPORATE_ENTERPRISE &&
    whatToInsure === BUILDINGS_AND_VALUABLES
  ) {
    shouldSkipBackwards = true;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center lg:items-start gap-10 px-4 py-8 sm:px-8 md:px-12 md:py-12 lg:flex-row">
      <FormTracker stages={stages} currentStage={formStage} />
      <FormTrackerMobile stages={mobileStages} currentStage={formStage} />

      <WhatToInsure />
      <WhoAreYou />
      <FormWrapper dispatch={`${ONBOARDING_ACCOUNT_INFO}`} pauseFormStage />

      <EmailVerification />

      <FormWrapper dispatch={`${ONBOARDING_PROPERTY_INFO}`} />
      <FormWrapper
        dispatch={`${ONBOARDING_PROPERTY_LOCATION}`}
        shouldSkipBackwards={shouldSkipBackwards}
        redirectTo={QUOTE}
      />
    </div>
  );
};

export default CreateAnAccountForms;
