"use client";
import React, { FC, useState } from "react";
import individuals from "@/assets/svgs/individuals.svg";
import valuables from "@/assets/svgs/valuables.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { goToStep, updateWhoAreYou } from "@/redux/slices/onboardingSlice";
import { Button } from "../../ui/button";
import PreviousBtn from "../../PreviousBtn";
import { dispatchController } from "@/config/dispatch-controller";
import { ONBOARDING_GO_TO_STEP } from "@/config";

// interface IProps {}

const WhoAreYou: FC = () => {
  const [activeOption, setActiveOption] = useState(999);
  const whoAreYou = useSelector(
    (state: RootState) => state.onboarding.whoAreYou,
  );
  const currentStep = useSelector((state: RootState) => state.onboarding.step);

  const canProceed = whoAreYou !== "";

  const dispatch = useDispatch();

  const goToNextStep = () => {
    const action = dispatchController(ONBOARDING_GO_TO_STEP, currentStep + 1);
    if (action) {
      dispatch(action);
    }
  };

  const handleUpdateWhoAreYou = (title: string, id: number) => {
    dispatch(updateWhoAreYou(title));
    setActiveOption(id);
  };

  const options = [
    {
      img: individuals,
      title: "Individuals",
    },
    {
      img: valuables,
      title: "Corporate Enterprise",
    },
  ];

  return (
    currentStep === 2 && (
      <div className="flex w-full flex-col items-center justify-center gap-6 py-10 lg:min-h-screen">
        <PreviousBtn handleClick={() => dispatch(goToStep(currentStep - 1))} />

        <h1 className="] text-center text-2xl font-bold">Who are you?</h1>

        <div className="flex flex-wrap justify-center gap-5">
          {options.map(({ img, title }, id) => (
            <div
              key={title}
              onClick={() => handleUpdateWhoAreYou(title, id)}
              className={cn(
                "relative flex w-[10rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 px-5 py-3 pt-20 shadow-neutral-200/10 duration-300 hover:shadow-xl",
                activeOption === id && "border-red",
              )}
            >
              <Image
                src={img}
                alt=""
                width={50}
                height={50}
                className="absolute top-5"
              />

              <h1 className="text-center text-lg font-bold text-black">
                {title}
              </h1>
            </div>
          ))}
        </div>

        <Button variant={"red"} disabled={!canProceed} onClick={goToNextStep}>
          Continue
        </Button>
      </div>
    )
  );
};

export default WhoAreYou;
