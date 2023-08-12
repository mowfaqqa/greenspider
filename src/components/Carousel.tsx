import React, { useState } from "react";
import { Card } from "./Card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ items }: any) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const prevItem = () => {
    const newIndex = (currentItemIndex - 1 + items.length) % items.length;
    setCurrentItemIndex(newIndex);
  };

  const nextItem = () => {
    const newIndex = (currentItemIndex + 1) % items.length;
    setCurrentItemIndex(newIndex);
  };

  const currentItem = items[currentItemIndex];

  return (
    <div className="carousel lg:max-w-[1040px] mx-auto">
      <div className="carousel-items flex overflow-hidden">
        {items.map((item: any, index: number) => (
          <Card
            key={index}
            className="flex-col p-4"
          >
            <Image src={item.img} width={30} height={30} alt="icon" />
            <h2 className="w-[187px] text-primary-main">{item.title}</h2>
            <ul>
              {item.description.map((desc: any, index: number) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            {/* You can add more fields from the object as needed */}
          </Card>
        ))}
      </div>
      <div>
        <button
          onClick={prevItem}
          className="w-[41px] h-[41px] bg-primary-main text-white rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextItem}
          className="w-[41px] h-[41px] bg-primary-main text-white rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
