import Image from "next/image";
import { Menu as Bar } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const router = useRouter();
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <main>
        {/* large screen Nav */}
        <nav className="hidden max-w-[1440px] mx-auto lg:flex justify-center items-center py-[54px]">
          {navigation.map((link, index) => (
            <div key={index} className="mx-[30px]">
              <Link href={link.href} passHref>
                <span
                  className={classNames(
                    router.asPath === link.href
                      ? "text-secondary-hover"
                      : "text-primary-main",
                    "font-semibold text-xl hover:text-secondary-hover"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
        {/* small screen Nav */}
        <nav className="flex justify-end items-center lg:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className=" px-[17px] pt-[54px] font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main">
                <Bar size={32} />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 px-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-30 focus:outline-none">
                <div className="px-1 py-1 flex flex-col">
                  {navigation.map((link, index) => (
                    <div key={index} className="border-b py-3 border-gray-400">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={link.href} passHref>
                            <span
                              className={classNames(
                                router.asPath === link.href
                                  ? "text-secondary-hover"
                                  : "text-primary-main",
                                "font-semibold py-3 text-xl hover:text-secondary-hover"
                              )}
                            >
                              {link.name}
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
        <div className="lg:max-w-[1440px] lg:mx-auto flex lg:justify-start lg:items-center px-4">
          <div className="flex items-center gap-x-4 mt-[50%] lg:mt-0">
            <Image
              src="/assets/greenspider-logo.svg"
              width={524.16}
              height={501.45}
              alt="green_spider logo"
              className="hidden lg:block"
            />
            <Image
              src="/assets/greenspider-logo.svg"
              width={120.62}
              height={142.6}
              alt="green_spider logo"
              className="block lg:hidden"
            />
            <div className="mt-6 md:w-[589px] flex-1">
              <h1 className="font-semibold text-[18.2px] lg:text-[64px] text-primary-main">
                Green Spider <br /> Consult Limited
              </h1>
              <span className="text-[9px] leading-normal lg:text-[32px]">
                Protecting the Enviroment For Sustainable <br />
                Development
              </span>
            </div>
          </div>
        </div>
        <div className="lg:hidden block mt-[74px] py-[30px]">
          <Slider {...settings}>
            <Image
              src="/assets/cam-01.png"
              alt="Image 1"
              width={129.33}
              height={72.75}
              className="px-2"
            />

            <Image
              src="/assets/cam-02.png"
              alt="Image 2"
              width={129.33}
              height={72.75}
              className="px-2"
            />

            <Image
              src="/assets/cam-03.png"
              alt="Image 3"
              width={129.33}
              height={32.75}
              className="px-2"
            />
          </Slider>
        </div>
      </main>
    </>
  );
}

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Main Activities", href: "/activities" },
  { name: "Principal Partners", href: "/partners" },
  { name: "Technical Experts", href: "/technical_experts" },
];
