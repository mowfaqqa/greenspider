import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Dropdown = ({ listItems, heading }: any) => {
  return (
    <div className="z-50">
      <Menu as="div" className="relative inline-block">
        <div className="flex justify-center">
          <Menu.Button className="w-[180px] lg:w-[250px] lg:px-3 text-primary-main text-xs lg:text-base font-medium">
            {heading}
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
          <Menu.Items className="absolute left-0 lg:-right-2 mt-2 w-56 origin-top-right -top-[5.5rem] text-white rounded-md bg-primary-main shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 z-40">
            <div className="px-1 py-1 ">
              {listItems?.map((item: any, index: number) => (
                <Menu.Item key={index}>
                  <li className="text-white text-xs">{item}</li>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
