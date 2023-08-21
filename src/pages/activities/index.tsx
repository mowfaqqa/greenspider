import { Card } from "@/components/Card";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Dropdown from "@/components/Dropdown";

const Activities = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const PrevArrow = (
    <button className="w-[41px] h-[41px] pl-2 bg-primary-main text-white rounded-full">
      <ChevronLeft size={20} />
    </button>
  );
  const NextArrow = (
    <button className="w-[41px] flex justify-center items-center h-[41px] bg-primary-main text-white rounded-full">
      <ChevronRight size={20} />
    </button>
  );
  return (
    <div className="pb-[3rem]">
      <Header />
      <div className="lg:py-[121px] lg:max-w-[1440px] mx-auto lg:px-[75px] px-5 text-primary-main">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h3 className="text-lg font-bold lg:text-[40px] mb-8">
              Main Activities
            </h3>
            <p className="md:font-semibold md:text-[24px]">
              In the process of managing a wide range of environmental problems,
              GSC has developed expertise in the following key areas.
            </p>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute lg:top-[32%]">
              <Image
                src="/images/activities-img-1.svg"
                width={251}
                height={168}
                alt="activities"
              />
            </div>
            <div className="absolute lg:top-[23%] lg:left-[24%] h-[40px] w-[40px] bg-primary-main rounded-br-[7px]" />
            <div className="absolute lg:-top-[15%] lg:left-[23%]">
              <Image
                src="/images/activities-img-2.svg"
                width={375}
                height={211}
                alt="activities"
              />
            </div>
            <div className=" absolute lg:top-[120%] lg:left-[24%] h-[40px] hidden lg:block w-[40px] bg-primary-main rounded-br-[7px]" />
            <div className="absolute lg:top-[80%] lg:left-[24%]">
              <Image
                src="/images/activities-img-3.svg"
                width={291}
                height={252}
                alt="activities"
              />
            </div>
            <div className=" absolute lg:top-[94%] lg:left-[62%] h-[40px] w-[40px] bg-primary-main rounded-br-[7px]" />
          </div>
          <div className="block md:hidden">
            <div className="absolute top-[44%] left-[0%]">
              <Image
                src="/images/activities-img1.png"
                width={116.32}
                height={77.56}
                alt="activities"
                className="w-[55vw]"
              />
            </div>
            <div className="absolute top-[43.8%] left-[39%] h-[18px] w-[18px] bg-primary-main rounded-br-[7px]" />
            <div className="absolute top-[38%] left-[36%]">
              <Image
                src="/images/activities-img-2.svg"
                width={173.58}
                height={97.64}
                alt="activities"
                className="w-[65vw]"
              />
            </div>

            <div className="absolute top-[56%] left-[36%]">
              <Image
                src="/images/activities-img3.png"
                width={134.34}
                height={116.34}
                alt="activities"
                className="w-[55vw]"
              />
            </div>
            <div className="absolute top-[63%] left-[39%] h-[18px] w-[18px] bg-primary-main rounded-br-[7px]" />
          </div>
        </div>
      </div>
      <div className="max-w-[250px] md:max-w-[1440px] mx-auto">
        <div className="swiper-container mt-[60vh] pb-[10%] lg:mt-[5%] lg:px-[75px] px-3">
          <AliceCarousel
            disableDotsControls
            responsive={responsive}
            items={Items.map((item: any, index: number) => (
              <Card
                key={index}
                className={`carousel-item w-[200px] lg:w-[253px] mb-4 h-[269px] mt-5 flex-col border border-primary-main shadow-lg`}
              >
                <div className="flex flex-col">
                  <Image
                    src={item.img}
                    width={30}
                    height={30}
                    alt="icon"
                    className="block mx-auto mb-3"
                  />
                  {/* <h2 className="lg:w-[187px] text-primary-main text-sm lg:text-base font-medium">
                  {item.title}
                </h2> */}
                  <Dropdown heading={item.title} listItems={item.description} />
                  <ul className="mt-[20%] px-5">
                    {item.description.map((desc: any, index: number) => (
                      <li key={index} className="text-[10px]">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
            renderPrevButton={() => PrevArrow}
            renderNextButton={() => NextArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;

const Items = [
  {
    img: "/icons/logo-1.svg",
    title: "DRYLAND MANAGEMENT AND LAND RESTORATION",
    description: [
      "• Dryland Afforestation and Landscape Restoration",
      "• Sand Dune Fixation and Sand Storm Management",
      "• Oasis Rehabilitation and Management",
    ],
  },
  {
    img: "/icons/logo-2.svg",
    title: "ENVIRONMENTAL IMPACT MANAGEMENT",
    description: [
      "• Environmental Impact Assessment (EIA)",
      "• Environmental Monitoring and Auditing",
      "• Environmental Management Plan (EMP)",
    ],
  },
  {
    img: "/icons/logo-3.svg",
    title: "SOIL AND WATER MANAGEMENT",
    description: [
      "• Soil Survey and Analysis",
      "• Soil Classification and suitability Mapping",
      "• Erosion Control Plan",
    ],
  },
  {
    img: "/icons/logo-4.svg",
    title: "ECOLOGICAL SERVICES",
    description: [
      "• Ecological Rehabilitation Plan",
      "• Conservation Management Plan",
      "• Invasive Species Management Plan",
    ],
  },
  {
    img: "/icons/logo-5.jpg",
    title: "WASTE MANAGEMENT",
    description: [
      "• Pollution Management and Ccontrol",
      "• Solid Waste Management",
    ],
  },
  {
    img: "/icons/logo-6.jpg",
    title: "SPECIALIZED ENVIROMENTAL SERVICES",
    description: [
      "• Air Quality Assessment",
      "• Climate Change Management",
      "• Environmental Risk Assessment",
    ],
  },
  {
    img: "/icons/logo-7.jpg",
    title: "COMMUNITY MOBILIZATION AND TRAINING",
    description: [
      "• Development of Public Mobilization and Communication Strategy",
      "• Stakeholder Engagement",
      "• Extension Services and Training",
    ],
  },
];
