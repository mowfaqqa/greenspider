import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PPSData } from "@/utils/PartnerData";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const PPSDetails = () => {
  const router = useRouter();
  const { ppsId }: any = router.query;
  const ppsDetail = PPSData?.find((obj: any) => obj.id === ppsId);

  return (
    <div className="">
      <Header />
      <div className="lg:max-w-[1440px] lg:pb-[80px] mx-auto lg:px-[75px] text-primary-main lg:mt-[130px]">
        <div className="relative grid grid-cols-3 mt-[104px] px-4">
          <div className="col-span-2 ">
            <div className=" flex items-center">
              <div className="bg-secondary-main h-[60px] w-[11px]" />
              <div className="mx-2">
                <div className="text-xl lg:text-[34px] font-bold">
                  {ppsDetail?.name}
                </div>
                <span className="text-sm lg:leading-10 lg:text-[26px] font-medium">
                  {ppsDetail?.post}
                </span>
              </div>
            </div>
            <p className="font-medium text-lg w-[338px] lg:w-full mx-4 pr-4 mt-[60px]">
              {ppsDetail?.desc}
            </p>
          </div>
          <div>
            <div className="hidden lg:flex justify-end">
              <div className="green-bg bg-[#2FAC4E] w-[297px] h-[223px] rounded-[30px]" />
              <div className="absolute lg:right-[0.04%] lg:top-[6.5%]">
                <Image
                  src={ppsDetail?.img!}
                  width={275}
                  height={396}
                  alt="pps detail"
                />
              </div>
            </div>
            <div className="flex lg:hidden justify-end">
              <div className="green-bg bg-[#2FAC4E] w-[93px] h-[70px] rounded-[5px]" />
              <div className="absolute lg:right-[0.04%] lg:top-[6.5%]">
                <Image
                  src={ppsDetail?.img!}
                  width={86}
                  height={124}
                  alt="pps detail"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-medium text-lg w-[338px] lg:w-full mx-4 px-3 mt-5 lg:mt-[140px]">
          {ppsDetail?.further_desc}
        </div>
        {ppsDetail?.extra !== "" && (
          <div className="font-medium text-lg w-[338px] lg:w-full mx-4 px-3 mt-5 lg:mt-[40px]">
            {ppsDetail?.extra}
          </div>
        )}
        <div className="flex justify-between items-center mt-8 px-5 pb-5">
          <button
            onClick={() => router.back()}
            className="flex items-center text-black text-[23px] lg:text-[40px] font-semibold"
          >
            {" "}
            <ArrowLeft className="text-[23px] lg:text-[40px]" /> Back
          </button>
          <button
            onClick={() => router.push(`/partners/pps/${ppsDetail?.next}`)}
            className="flex items-center text-black text-[23px] lg:text-[40px] font-semibold"
          >
            {" "}
            Next <ArrowRight className="text-[23px] lg:text-[40px]" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PPSDetails;
