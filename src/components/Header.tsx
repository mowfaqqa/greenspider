import { navigation } from "@/pages";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Menu as Bar } from "react-feather";

const Header = () => {
  const router = useRouter();
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div>
      {/* large screen Nav */}
      <nav className="hidden max-w-[1440px] mx-auto lg:flex justify-between items-center py-[54px] px-[45px]">
        <div>
          <Image
            src="/assets/greenspider-logo.svg"
            width={46}
            height={54}
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center flex-1">
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
        </div>
      </nav>
      {/* small screen Nav */}
      <nav className="flex justify-between items-center lg:hidden px-4">
        <div>
          <Image src="/assets/logo_v2.png" width={154} height={51} alt="logo" />
        </div>
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
            <Menu.Items className="absolute right-0 mt-2 w-56 px-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 flex flex-col">
                {navigation.map((link, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link href={link.href} passHref>
                        <span
                          className={classNames(
                            router.asPath === link.href
                              ? "text-secondary-hover"
                              : "text-primary-main",
                            "font-semibold py-3 text-base hover:text-secondary-hover"
                          )}
                        >
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </div>
  );
};

export default Header;
