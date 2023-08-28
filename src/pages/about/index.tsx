import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-primary-main md:px-0">
      <Header />
      <div className="lg:pt-[121px] px-10 max-w-xl lg:max-w-[1440px] mx-auto lg:px-[85px] lg:pb-[99px] text-primary-main">
        <div className="block lg:hidden mb-4">
          <div className="flex justify-start">
            <Image
              src="/images/about-img-2.png"
              width={194.36}
              height={129.56}
              alt="desert"
              className="rounded-tl-[20px]"
            />
          </div>
          <div className="flex justify-end mt-5">
            <Image
              src="/images/about-img-1.png"
              width={194.36}
              height={90}
              alt="desert"
              className="rounded-br-[20px]"
            />
          </div>
        </div>
        <h1 className="md:text-[40px] text-xl font-bold mb-[15px] lg:mb-[49px]">
          About Us
        </h1>
        <p className="md:text-xl font-medium md:font-semibold">
          Green Spider Consult (GSC) is a Nigerian environmental consulting firm
          incorporated in 2020 to provide a wide range of environmental
          services. <br />
          Excellent environmental outcomes are fundamental pillars supporting
          GSC’s day-to-day work. While, GSC is particularly adroit at evolving
          synergistic teams and alliance to provide sustainable, innovative and
          cost effective environmental solutions, it also strives to exceed the
          expectations of clients, provide value for money, promote excellent
          service delivery and quality. Leveraging on the interaction with
          various other specialists in the environmental sphere, GSC can provide
          boffin input on any simple or complex environmental issue by providing
          the most efficient and cost effective solution guided by associated
          environmental ethics and integrity. <br />
          It is an immense privilege for GSC to work in the stimulating and
          challenging field of consulting. GSP is driven by a robust work ethics
          and offers a novel perspective through a comprehensive and integrated
          approach to environmental management. <br />
          GSC embraces the principles of quality assurance in all aspects of its
          services to provide clients with transparent and reliable solutions to
          environmental issues.
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto px-10 pb-10">
        <div className="md:flex md:justify-start lg:px-[75px]">
          <div className="lg:w-[631px]">
            <h3 className="text-lg font-bold lg:text-[40px] mb-3">Vision</h3>
            <p className="md:font-semibold md:text-[24px]">
              To provide excellent and highest quality environmental services to
              an array of clients without compromising high degree of
              professional ethics and core values.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between my-4">
          <Image
            src="/images/about-img-1.png"
            width={720}
            height={258}
            alt="desert"
            className="hidden lg:block lg:rounded-br-[50px]"
          />
          <div className="md:pl-[60px] md:pr-[100px]">
            <h3 className="text-lg font-bold lg:text-[40px] mb-3">Mission</h3>
            <p className="md:font-semibold md:text-[24px]">
              To contribute towards resolving the prevailing Global
              Environmental Challenges through the provision of excellent
              services toclients anchored on best-proven technology and
              strategy.
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-end">
          <Image
            src="/images/about-img-2.png"
            width={720}
            height={258}
            alt="desert"
            className="lg:rounded-bl-[50px] hidden lg:block"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
