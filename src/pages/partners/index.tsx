import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="text-primary-main">
      <Header />
      <div className="lg:pt-[121px] max-w-xl lg:max-w-full mx-auto lg:px-[75px]">
        <div className="flex justify-between items-start">
          <div className="lg:w-[580px]">
            <h3 className="text-lg font-bold lg:text-[40px] mb-3">
              Principal Partners
            </h3>
            <p className="md:font-semibold md:text-[24px]">
              GSC’s Principal Partners (PPS) perform an integral role in the
              successful operation of the company. They hold responsibility for
              the operation and management of GSC, supervising and supporting
              the technical and administrative staff to ensure both the clients’
              needs and organizational values are achieved. Key mandates include
              client support, day-to-day management and perpetual monitoring of
              GSC team members, business development and marketing.
            </p>
          </div>
          <div className="relative">
            <div className="green-bg bg-[#2FAC4E] w-[712px] h-[264px] rounded-tl-[30px]" />
            <div className="absolute lg:-right-[5%] lg:top-[10%]">
              <Image
                src="/images/principal-partners-img.png"
                width={608}
                height={406.05}
                alt="pricipal_partners
          "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1x">
          <p className="text-[26px]">
            The PPs have a wealth of experience and share a passion for the work
            they do in the environmental consultancy sphere.
          </p>
          <div>
            <button
              type="button"
              className="px-[30] py-15pxxxxxxxxxxxxxxxxxxxxxs bg-secondary-main text-white flex-1"
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
