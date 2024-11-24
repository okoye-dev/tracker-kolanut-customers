import { FormTrackerProps } from "@/types";
import React, { FC } from "react";
import kolanut from "@/assets/svgs/kolanut2.svg";
import Image from "next/image";

const FormTrackerMobile: FC<FormTrackerProps> = ({
  stages,
  currentStage = 1,
}) => {
  return (
    <div className="flex w-full flex-grow-0 flex-col gap-4 overflow-hidden lg:hidden">
      <Image src={kolanut} alt="kolanut logo" width={110} height={110} />

      <section className="relative mt-3 flex items-center justify-between">
        <span className="absolute flex h-[2px] w-full bg-[#E9E7E7]" />

        {stages.map(({ id, img }) => (
          <Image
            key={id}
            src={currentStage === id ? img.active : img.inactive}
            alt=""
            width={40}
            height={40}
            className="z-10"
          />
        ))}
      </section>
    </div>
  );
};

export default FormTrackerMobile;
