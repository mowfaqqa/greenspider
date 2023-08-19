import Header from "@/components/Header";
import { PPSData } from "@/utils/PartnerData";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PPS = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="lg:max-w-[1440px] mx-auto lg:px-[75px] text-primary-main lg:mt-[130px]">
        {PPSData.map((data, index) => (
          <div key={index} className="relative grid grid-cols-3 mt-[76px] lg:mt-[192px] px-5">
            <div className="col-span-2 ">
              <div className=" flex items-center">
                <div className="bg-secondary-main h-[60px] w-[11px]" />
                <div className="mx-2">
                  <div className="lg:text-[34px] font-bold">{data.name}</div>
                  <span className="lg:text-[26px] font-medium">
                    {data.post}
                  </span>
                </div>
              </div>
              <p className="font-medium text-lg mx-4 w-[333px] lg:w-full mt-[60px] lg:mt-[40px]">
                {data.summary}
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className=" rounded-xl lg:rounded-[16px] py-[9px] px-[37px] lg:px-[60px] lg:py-[10px] bg-secondary-main text-white lg:text-[32px] text-[17px] font-semibold"
                  onClick={() => router.push(`/partners/pps/${data.id}`)}
                >
                  More
                </button>
              </div>
            </div>
            <div>
              <div className="hidden lg:flex justify-end">
                <div className="green-bg bg-[#2FAC4E] w-[297px] h-[223px] rounded-[30px]" />
                <div className="absolute lg:right-[0.04%] lg:top-[6.5%]">
                  <Image
                    src={data?.img}
                    width={275}
                    height={396}
                    alt="pps partner"
                  />
                </div>
              </div>
              <div className="flex lg:hidden justify-end">
                <div className="green-bg bg-[#2FAC4E] w-[93px] h-[70px] rounded-[5px]" />
                <div className="absolute lg:right-[0.04%] lg:top-[6.5%]">
                  <Image
                    src={data?.img}
                    width={86}
                    height={124}
                    alt="pps partner"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PPS;
