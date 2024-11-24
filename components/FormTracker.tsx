import { FormTrackerProps } from "@/types";
import React, { FC } from "react";
import kolanut from "@/assets/svgs/kolanut.svg";
import vline from "@/assets/svgs/vline.svg";
import waves from "@/assets/svgs/waves.svg";
import Image from "next/image";

const FormTracker: FC<FormTrackerProps> = ({ stages, currentStage = 1 }) => {
  return (
    <div className="hidden min-w-[27.5rem] flex-col overflow-hidden rounded-3xl bg-red pt-10 text-white lg:flex">
      <Image
        src={kolanut}
        alt="kolanut logo"
        width={170}
        height={170}
        className="ml-10"
      />

      <section className="relative mt-10 flex flex-col px-10">
        <Image src={vline} alt="" className="absolute left-[59px] top-14" />

        {stages.map(({ id, img, title, description }) => (
          <div
            key={id}
            className={`z-0 flex items-center gap-4 rounded-xl pt-6 transition-all duration-300 ease-in-out hover:border-white`}
          >
            <Image
              src={currentStage === id ? img.active : img.inactive}
              alt=""
              width={40}
              height={40}
            />

            <div className="flex flex-col gap-[2px]">
              <span className="text-base text-white/85">{title}</span>
              {description && (
                <span className="-light text-sm text-white/75">
                  {description}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      <Image src={waves} alt="" className="w-full" />
    </div>
  );
};

export default FormTracker;
