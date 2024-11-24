"use client";

import store from "@/redux/store";
import React, { FC } from "react";
import { Provider } from "react-redux";
import CreateAnAccountForms from "@/components/onboarding/create-an-account/CreateAnAccountForms";

// interface IProps {}

const OnboardingPage: FC = () => {
  return (
    <Provider store={store}>
      <CreateAnAccountForms />
    </Provider>
  );
};

export default OnboardingPage;
