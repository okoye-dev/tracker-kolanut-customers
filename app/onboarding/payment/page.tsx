import React, { FC } from "react";
import kolanut from "@/assets/svgs/kolanut.svg";
import kolanut2 from "@/assets/svgs/kolanut2.svg";
import bg from "@/assets/svgs/bg.svg";
import Image from "next/image";
import Payment from "@/components/onboarding/quote/Payment";

interface IProps {}

const PaymentPage: FC<IProps> = (props) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-4 overflow-hidden bg-white py-10 lg:gap-10 lg:bg-red">
      <Image
        src={kolanut}
        alt="kolanut"
        width={200}
        height={200}
        className="z-10 hidden lg:flex"
      />
      <Image
        src={kolanut2}
        alt="kolanut"
        width={150}
        height={150}
        className="z-10 flex lg:hidden"
      />

      <Image
        src={bg}
        alt=""
        width={1000}
        height={1000}
        className="absolute hidden w-[130vw] lg:flex"
      />

      <Payment />
    </div>
  );
};

export default PaymentPage;
