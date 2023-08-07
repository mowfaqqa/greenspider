import Header from "@/components/Header";
import { PPSData } from "@/utils/PartnerData";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PPSDetails = () => {
  const router = useRouter();
  const { ppsId }: any = router.query;
  const ppsDetail = PPSData?.find((obj: any) => obj.id === ppsId);

  return (
    <div className="lg:pb-[100px]">
      <Header />
      <div className="lg:max-w-[1440px] mx-auto lg:px-[75px] text-primary-main lg:mt-[130px]">
        <div className="relative grid grid-cols-3 mt-[104px]">
          <div className="col-span-2 ">
            <div className=" flex items-center">
              <div className="bg-secondary-main h-[60px] w-[11px]" />
              <div className="mx-2">
                <div className="lg:text-[34px] font-bold">
                  {ppsDetail?.name}
                </div>
                <span className="lg:text-[26px] font-medium">
                  {ppsDetail?.post}
                </span>
              </div>
            </div>
            <p className="font-medium text-lg mx-4 mt-[40px]">
              {ppsDetail?.desc}
            </p>
          </div>
          <div className="flex justify-end">
            <div className="green-bg bg-[#2FAC4E] w-[297px] h-[223px] rounded-[30px]" />
            <div className="absolute lg:right-[0.04%] lg:top-[6.5%]">
              <Image
                src={ppsDetail?.img!}
                width={275}
                height={396}
                alt="Bukar Hassan"
              />
            </div>
          </div>
        </div>
        <div className="font-medium text-lg mx-4 mt-[140px]">
          {ppsDetail?.further_desc}
        </div>
      </div>
    </div>
  );
};

export default PPSDetails;
