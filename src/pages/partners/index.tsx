import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Partners = () => {
  const router = useRouter();

  return (
    <div className="text-primary-main">
      <Header />
      <div className="lg:py-[121px] lg:max-w-[1440px] mx-auto lg:px-[75px] px-5">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:hidden">
            <div className="absolute right-[10%] top-[17%] green-bg bg-[#2FAC4E] w-[249.64px] h-[92px] rounded-tl-[30px]" />
            <div className="absolute z-20 right-[8%] top-[19%]">
              <Image
                src="/images/principal-partners-img.png"
                width={213.53}
                height={142.37}
                alt="pricipal_partners"
              />
            </div>
          </div>
          <div className="mt-[235px] lg:mt-0 lg:w-[580px]">
            <h3 className="text-lg font-bold lg:text-[40px] mb-5">
              Principal Partners
            </h3>
            <p className="lg:font-semibold font-medium lg:text-[24px]">
              GSC’s Principal Partners (PPS) perform an integral role in the
              successful operation of the company. They hold responsibility for
              the operation and management of GSC, supervising and supporting
              the technical and administrative staff to ensure both the clients’
              needs and organizational values are achieved. Key mandates include
              client support, day-to-day management and perpetual monitoring of
              GSC team members, business development and marketing.
            </p>
          </div>
          <div className="hidden relative lg:block">
            <div className="green-bg bg-[#2FAC4E] w-[712px] h-[264px] rounded-tl-[30px]" />
            <div className="absolute lg:-right-[5%] lg:top-[5%]">
              <Image
                src="/images/principal-partners-img.png"
                width={608}
                height={406.05}
                alt="pricipal_partners"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-16">
          <div className="lg:w-[748px]">
            <p className="font-medium lg:text-[26px] lg:font-semibold">
              The PPs have a wealth of experience and share a passion for the
              work they do in the environmental consultancy sphere.
            </p>
          </div>

          <div className="mt-4 flex-1 flex justify-start lg:justify-center">
            <button
              type="button"
              className=" rounded-xl lg:rounded-[16px] py-[9px] px-[37px] lg:px-[60px] lg:py-[30px] bg-secondary-main text-white lg:text-[32px] text-[17px] font-semibold"
              onClick={() => router.push("/partners/pps")}
            >
              View PPS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
