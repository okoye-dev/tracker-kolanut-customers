"use client";
import React, { FC, useState } from "react";
import buildings from "@/assets/svgs/buildings.svg";
import valuables from "@/assets/svgs/valuables.svg";
import buildingsAndValuables from "@/assets/svgs/bandv.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { goToStep, updateWhatToInsure } from "@/redux/slices/onboardingSlice";
import { Button } from "@/components/ui/button";
import { BUILDINGS, BUILDINGS_AND_VALUABLES, VALUABLES } from "@/config";

// interface IProps {}

const WhatToInsure: FC = () => {
  const [activeOption, setActiveOption] = useState(999);
  const whatToInsure = useSelector(
    (state: RootState) => state.onboarding.whatToInsure,
  );
  const currentStep = useSelector((state: RootState) => state.onboarding.step);
  const canProceed = whatToInsure !== "";

  const dispatch = useDispatch();
  const goToNextStep = () => dispatch(goToStep(currentStep + 1));

  const handleUpdateWhatToInsure = (title: string, id: number) => {
    dispatch(updateWhatToInsure(title));
    setActiveOption(id);
  };

  const options = [
    {
      img: buildings,
      title: BUILDINGS,
      value: BUILDINGS,
      description:
        "For individual and corporates who want to insure only their  building against risk",
    },
    {
      img: valuables,
      title: VALUABLES,
      value: VALUABLES,
      description:
        "For individual   and corporates who want to insure  only valuables  in their home against risks",
    },
    {
      img: buildingsAndValuables,
      title: "Buildings & Valuables",
      value: BUILDINGS_AND_VALUABLES,
      description:
        "For individua and companies   who want to insure both valuables and  the building against risks",
    },
  ];

  return (
    currentStep === 1 && (
      <div className="flex w-full flex-grow flex-col items-center justify-center gap-6 py-10 lg:min-h-screen">
        <h1 className="text-center text-2xl font-bold">
          What do you want to insure?
        </h1>

        <div className="grid grid-cols-2 justify-center gap-3 xl:grid-cols-3">
          {options.map(({ img, title, value, description }, id) => (
            <div
              key={title}
              onClick={() => handleUpdateWhatToInsure(value, id)}
              className={cn(
                "relative flex max-w-[14rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 px-2 py-2 pt-16 shadow-neutral-200/10 duration-300 hover:shadow-xl sm:px-5 sm:py-3 sm:pt-20 md:max-w-[15rem]",
                activeOption === id && "border-red",
              )}
            >
              <Image
                src={img}
                alt=""
                width={50}
                height={50}
                className="absolute top-3 h-10 w-10 sm:top-5 sm:h-12 sm:w-12"
              />

              <h1 className="text-center text-sm font-bold text-black sm:text-nowrap sm:text-lg">
                {title}
              </h1>
              <p className="flex-grow text-start text-xs text-gray-primary sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>

        <Button variant={"red"} disabled={!canProceed} onClick={goToNextStep}>
          Request for quotation
        </Button>
      </div>
    )
  );
};

export default WhatToInsure;
