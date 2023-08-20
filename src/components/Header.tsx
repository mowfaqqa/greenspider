import { navigation } from "@/pages";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Menu as Bar } from "react-feather";
import Activities from "../pages/activities/index";

const Header = () => {
  const router = useRouter();
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const searchString = "/partners";
  const includesString = router.asPath.includes(searchString);

  return (
    <div>
      {/* large screen Nav */}
      <nav className="hidden max-w-[1440px] mx-auto lg:flex justify-between items-center py-[54px] px-[75px]">
        <div>
          <Image
            src="/assets/greenspider-logo.svg"
            width={46}
            height={54}
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="mx-[30px]">
            <Link href="/" passHref>
              <span
                className={classNames(
                  router.asPath === "/"
                    ? "text-secondary-hover"
                    : "text-primary-main",
                  "font-semibold text-xl hover:text-secondary-hover"
                )}
              >
                Home
              </span>
            </Link>
          </div>
          <div className="mx-[30px]">
            <Link href="/about" passHref>
              <span
                className={classNames(
                  router.asPath === "/about"
                    ? "text-secondary-hover"
                    : "text-primary-main",
                  "font-semibold text-xl hover:text-secondary-hover"
                )}
              >
                About Us
              </span>
            </Link>
          </div>
          <div className="mx-[30px]">
            <Link href="/activities" passHref>
              <span
                className={classNames(
                  router.asPath === "/activities"
                    ? "text-secondary-hover"
                    : "text-primary-main",
                  "font-semibold text-xl hover:text-secondary-hover"
                )}
              >
                Main Activities
              </span>
            </Link>
          </div>
          <div className="mx-[30px]">
            <Link href="/partners" passHref>
              <span
                className={classNames(
                  includesString ? "text-secondary-hover" : "text-primary-main",
                  "font-semibold text-xl hover:text-secondary-hover"
                )}
              >
                Principal Partners
              </span>
            </Link>
          </div>
          <div className="mx-[30px]">
            <Link href="/technical_experts" passHref>
              <span
                className={classNames(
                  router.asPath === "/technical_experts"
                    ? "text-secondary-hover"
                    : "text-primary-main",
                  "font-semibold text-xl hover:text-secondary-hover"
                )}
              >
                Technical Experts
              </span>
            </Link>
          </div>
        </div>
      </nav>
      {/* small screen Nav */}
      <nav className="flex justify-between  items-center lg:hidden px-4 py-[24px]">
        <div>
          <Image
            src="/assets/responsiveLogo.png"
            width={154}
            height={51}
            alt="logo"
          />
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main">
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
            <Menu.Items className="absolute right-0 mt-2 w-64 py-3 px-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-30 focus:outline-none">
              <div className="px-1 py-1 flex flex-col">
                <div className="border-b py-3 border-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/" passHref>
                        <span
                          className={classNames(
                            router.asPath === "/"
                              ? "text-secondary-hover"
                              : "text-primary-main",
                            "font-semibold py-3 text-xl hover:text-secondary-hover"
                          )}
                        >
                          Home
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="border-b py-3 border-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/about" passHref>
                        <span
                          className={classNames(
                            router.asPath === "/about"
                              ? "text-secondary-hover"
                              : "text-primary-main",
                            "font-semibold py-3 text-xl hover:text-secondary-hover"
                          )}
                        >
                          About Us
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="border-b py-3 border-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/activities" passHref>
                        <span
                          className={classNames(
                            router.asPath === "/activities"
                              ? "text-secondary-hover"
                              : "text-primary-main",
                            "font-semibold py-3 text-xl hover:text-secondary-hover"
                          )}
                        >
                          Main Activities
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="border-b py-3 border-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/partners" passHref>
                        <span
                          className={classNames(
                            includesString
                              ? "text-secondary-hover"
                              : "text-primary-main",
                            "font-semibold py-3 text-xl hover:text-secondary-hover"
                          )}
                        >
                          Principal Partners
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="border-b py-3 border-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/technical_experts" passHref>
                        <span
                          className={classNames(
                            router.asPath === "/technical_experts"
                              ? "text-secondary-hover"
                              : "text-primary-main",
                            "font-semibold py-3 text-xl hover:text-secondary-hover"
                          )}
                        >
                          Technical Experts
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </div>
  );
};

export default Header;
