import { Button } from "@/components/ui/button";
import { BUILDINGS_AND_VALUABLES, CORPORATE_ENTERPRISE } from "@/config";
import { goToFormStage, goToStep } from "@/redux/slices/onboardingSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import verify from "@/assets/svgs/verify.svg";
import verified from "@/assets/svgs/verified.svg";

// interface IProps {}

const EmailVerification: FC = (props) => {
  const currentStep = useSelector((state: RootState) => state.onboarding.step);
  const whoAreYou = useSelector(
    (state: RootState) => state.onboarding.whoAreYou,
  );
  const whatToInsure = useSelector(
    (state: RootState) => state.onboarding.whatToInsure,
  );
  const email = useSelector(
    (state: RootState) =>
      state.onboarding.accountInfo.email ??
      state.onboarding.accountInfo.business_email,
  );
  const dispatch = useDispatch();

  const proceedToNextStep = () => {
    let step = currentStep + 1;
    let stage = 2;
    if (
      whoAreYou === CORPORATE_ENTERPRISE &&
      whatToInsure === BUILDINGS_AND_VALUABLES
    ) {
      step = currentStep + 2;
      stage = 3;
    }

    dispatch(goToStep(step));
    dispatch(goToFormStage(stage));
  };

  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    currentStep === 4 && setTimeout(() => setIsVerified(true), 2000); 
  }, [currentStep]);

  if (currentStep === 4) {
    return (
      <div className="flex min-h-[55vh] w-full flex-col items-center justify-center gap-4 px-4 leading-6 text-gray-primary sm:px-[10vw] lg:min-h-[90vh] lg:px-[5vw] xl:px-[7vw]">
        {isVerified ? (
          <>
            <Image src={verified} alt="verified" className="h-20 w-20" />
            <h1 className="mt-2 text-2xl font-semibold text-gray-secondary">
              Email verified
            </h1>
            <p>
              Your email {email} has been verified, you will be redirected to
              continue in 30 seconds, click on the “Continue” button to continue
              to sign up.
            </p>

            <Button onClick={proceedToNextStep} variant={"red"}>
              Continue
            </Button>
          </>
        ) : (
          <>
            <Image src={verify} alt="" width={100} height={100} />
            <h1 className="mt-2 text-lg font-semibold text-gray-secondary">
              Verify email
            </h1>
            <p className="pb-3">
              Click on the verification link sent to your email {email} to
              verify your account and view your quote.
            </p>
            <span className="flex w-full items-center justify-center gap-1 border-t pt-3">
              Didn&apos;t receive link?{" "}
              <Button
                variant={"ghost"}
                className="p-0 text-base text-red duration-300 hover:bg-transparent hover:text-red hover:opacity-80"
              >
                Resend
              </Button>
            </span>
          </>
        )}
      </div>
    );
  }
};

export default EmailVerification;
