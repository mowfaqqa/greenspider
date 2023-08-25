import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TechnicalExpertsData } from "@/utils/TechnicalExperts";
import Image from "next/image";
import React from "react";

const TechnicalExperts = () => {
  return (
    <div>
      <Header />
      <div className="lg:py-[121px] lg:max-w-[1440px] mx-auto lg:px-[75px] px-5 text-primary-main">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:hidden">
            <div className="absolute right-[10%] top-[17%] green-bg bg-[#2FAC4E] w-[335px] h-[124.21px] rounded-tl-[30px]" />
            <div className="absolute z-20 right-[8%] top-[19%]">
              <Image
                src="/images/wilderness.png"
                width={286.54}
                height={191.37}
                alt="wilderness"
              />
            </div>
          </div>
          <div className="mt-[235px] lg:mt-0 lg:w-[580px]">
            <h3 className="text-lg font-bold lg:text-[40px] mb-5">
              Technical Experts
            </h3>
            <p className="lg:font-semibold font-medium lg:text-[24px]">
              Our technical experts or professionals with diverse background are
              highly knowledgeable with long experience on solving issues
              related to environmental management.
            </p>
          </div>
          <div className="hidden relative lg:block">
            <div className="green-bg mx-6 bg-[#2FAC4E] w-[712px] h-[264px] rounded-tl-[30px]" />
            <div className="absolute lg:right-[3%] lg:top-[20%]">
              <Image
                src="/images/wilderness.png"
                width={608}
                height={406.05}
                alt="pricipal_partners"
              />
            </div>
          </div>
        </div>
        <div>
          {TechnicalExpertsData?.map((data: any, index: number) => (
            <div key={index} className="my-[65px] lg:my-[180px]">
              <div className="flex items-center">
                <div className="bg-secondary-main h-[60px] w-[11px]" />
                <div className="mx-2">
                  <div className="lg:text-[34px] font-bold">{data.name}</div>
                  <span className="lg:text-[26px] font-medium">
                    {data.post}
                  </span>
                </div>
              </div>
              <p className="font-medium text-lg px-2 w-full mt-[60px] lg:mt-[40px]">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalExperts;
