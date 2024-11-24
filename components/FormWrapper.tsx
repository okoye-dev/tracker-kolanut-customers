import React, { FC } from "react";
import { FormBuilder } from "./FormBuilder";
import { useGenerateFormFields } from "../hooks/onboarding/create-an-account";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ErrorBoundary from "./ErrorBoundary";

interface IProps {
  dispatch: string;
  pauseFormStage?: boolean;
  shouldSkipBackwards?: boolean;
  redirectTo?: string;
}

const FormWrapper: FC<IProps> = ({
  dispatch,
  pauseFormStage = false,
  shouldSkipBackwards = false,
  redirectTo,
}) => {
  const whoAreYou = useSelector(
    (state: RootState) => state.onboarding.whoAreYou,
  );
  const whatToInsure = useSelector(
    (state: RootState) => state.onboarding.whatToInsure,
  );

  const formFields = useGenerateFormFields(whatToInsure, whoAreYou, dispatch);

  return (
    <ErrorBoundary>
      {formFields && (
        <FormBuilder
          formData={formFields}
          dispatchControl={dispatch}
          pauseFormStage={pauseFormStage}
          shouldSkipBackwards={shouldSkipBackwards}
          redirectTo={redirectTo}
        />
      )}
    </ErrorBoundary>
  );
};

export default FormWrapper;
