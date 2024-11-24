import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountInfo, PropertyInfo, PropertyLocation } from "@/types";

type OnboardingState = {
  step: number;
  formStage: number;
  whatToInsure: string;
  whoAreYou: string;
  accountInfo: AccountInfo;
  propertyInfo: PropertyInfo;
  propertyLocation: PropertyLocation;
  quotation: Record<string, any>;
};

const initialState: OnboardingState = {
  step: 1,
  formStage: 1,
  whatToInsure: "",
  whoAreYou: "",
  accountInfo: {},
  propertyInfo: {},
  propertyLocation: {},
  quotation: {},
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    goToStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    goToFormStage: (state, action: PayloadAction<number>) => {
      state.formStage = action.payload;
    },
    updateWhatToInsure: (state, action: PayloadAction<string>) => {
      state.whatToInsure = action.payload;
    },
    updateWhoAreYou: (state, action: PayloadAction<string>) => {
      state.whoAreYou = action.payload;
    },
    updateAccountInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.accountInfo = { ...state.accountInfo, ...action.payload };
    },
    updatePropertyInfo: (state, action: PayloadAction<PropertyInfo>) => {
      state.propertyInfo = { ...state.propertyInfo, ...action.payload };
    },
    updatePropertyLocation: (
      state,
      action: PayloadAction<PropertyLocation>,
    ) => {
      state.propertyLocation = { ...state.propertyLocation, ...action.payload };
    },
    updateQuotation: (state, action: PayloadAction<Record<string, any>>) => {
      state.quotation = { ...state.quotation, ...action.payload };
    },
    resetOnboarding: () => initialState,
  },
});

export const {
  goToStep,
  goToFormStage,
  updateAccountInfo,
  updateWhatToInsure,
  updateWhoAreYou,
  updatePropertyInfo,
  updatePropertyLocation,
  updateQuotation,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
