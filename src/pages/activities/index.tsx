import { Card } from "@/components/Card";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Activities = () => {
  return (
    <div>
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
            <div className=" absolute lg:top-[103%] lg:left-[24%] h-[40px] hidden lg:block w-[40px] bg-primary-main rounded-br-[7px]" />
            <div className="absolute lg:top-[60%] lg:left-[24%]">
              <Image
                src="/images/activities-img-3.svg"
                width={291}
                height={252}
                alt="activities"
              />
            </div>
            <div className=" absolute lg:top-[73%] lg:left-[62%] h-[40px] w-[40px] bg-primary-main rounded-br-[7px]" />
          </div>
          <div className="block md:hidden">
            <div className="absolute top-[47%] left-[12%]">
              <Image
                src="/images/activities-img-1.svg"
                width={116.32}
                height={77.56}
                alt="activities"
              />
            </div>
            <div className="absolute top-[45.8%] left-[31%] h-[18px] w-[18px] bg-primary-main rounded-br-[7px]" />
            <div className="absolute top-[40%] left-[31%]">
              <Image
                src="/images/activities-img-2.svg"
                width={173.58}
                height={97.64}
                alt="activities"
              />
            </div>

            <div className="absolute top-[52%] left-[32%]">
              <Image
                src="/images/activities-img-3.svg"
                width={134.34}
                height={116.34}
                alt="activities"
              />
            </div>
            <div className="absolute top-[57%] left-[31%] h-[18px] w-[18px] bg-primary-main rounded-br-[7px]" />
          </div>
        </div>
      </div>
      {/* <div>
        <Carousel items={Items} />
      </div> */}
      <div className="swiper-container mt-[80%] pb-[10%] lg:mt-[5%] lg:px-[75px] px-3">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {Items.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <Card
                className={`carousel-item lg:w-[253px] mb-4 lg:h-[269px] mt-5 flex-col p-5`}
              >
                <div className="flex flex-col">
                  <Image
                    src={item.img}
                    width={30}
                    height={30}
                    alt="icon"
                    className="block mx-auto mb-3"
                  />
                  <h2 className="lg:w-[187px] text-primary-main text-sm lg:text-base font-medium">
                    {item.title}
                  </h2>
                  <ul>
                    {item.description.map((desc: any, index: number) => (
                      <li key={index} className="text-[10px]">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
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
      "Dryland Afforestation and Landscape Restoration",
      " Sand Dune Fixation and Sand Storm Management",
      "Oasis Rehabilitation and Management",
    ],
  },
  {
    img: "/icons/logo-2.svg",
    title: "ENVIRONMENTAL IMPACT MANAGEMENT",
    description: [
      " Environmental Impact Assessment (EIA)",
      " Environmental Monitoring and Auditing",
      " Environmental Management Plan (EMP)",
    ],
  },
  {
    img: "/icons/logo-3.svg",
    title: "SOIL AND WATER MANAGEMENT",
    description: [
      "Soil Survey and Analysis",
      " Soil Classification and suitability Mapping",
      " Erosion Control Plan",
    ],
  },
  {
    img: "/icons/logo-4.svg",
    title: "ECOLOGICAL SERVICES",
    description: [
      " Ecological Rehabilitation Plan",
      " Conservation Management Plan",
      "Invasive Species Management Plan",
    ],
  },
  {
    img: "/icons/logo-5.png",
    title: "WASTE MANAGEMENT",
    description: [
      " Pollution Management and Ccontrol",
      " Solid Waste Management",
    ],
  },
  {
    img: "/icons/logo-6.png",
    title: "SPECIALIZED ENVIROMENTAL SERVICES",
    description: [
      " Air Quality Assessment",
      " Climate Change Management",
      "Environmental Risk Assessment",
    ],
  },
  {
    img: "/icons/logo-7.png",
    title: "COMMUNITY MOBILIZATION AND TRAINING",
    description: [
      " Development of Public Mobilization and Communication Strategy",
      " Stakeholder Engagement",
      "Extension Services and Training",
    ],
  },
];

// prev: (
// <button className="w-[41px] h-[41px] bg-primary-main text-white rounded-full">
//   <ChevronLeft size={20} />
// </button>
// ),
// next: (
// <button className="w-[41px] h-[41px] bg-primary-main text-white rounded-full">
//   <ChevronRight size={20} />
// </button>
// ),
