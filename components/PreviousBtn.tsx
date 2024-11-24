"use client";
import React, { FC } from "react";
import arrow from "@/assets/svgs/arrow-left.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface IProps {
  handleClick?: () => void;
  className?: string;
  isBackBtn?: boolean;
}

const PreviousBtn: FC<IProps> = ({
  handleClick,
  className,
  isBackBtn = false,
}) => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <div
      className={cn(
        "flex w-full items-center justify-normal gap-3 text-red duration-300 hover:opacity-85",
        className,
      )}
    >
      <span
        onClick={isBackBtn ? goBack : handleClick}
        className="flex w-fit cursor-pointer items-center gap-2 text-sm sm:text-base"
      >
        <Image src={arrow} alt="arrow" width={20} height={20} />
        Previous
      </span>
    </div>
  );
};

export default PreviousBtn;
