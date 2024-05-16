import React, { useState } from 'react';
import { HERO_CONTENT } from '../../blogData';
import { Link } from 'react-router-dom';
const Hero = () => {
  const [active, setActive] = useState('c1');

  return (
    <section className="my5 md:my-10">
      <div
        className="w-full flex flex-col gap-8 md:gap-0
       md:flex-row child:md:w-1/2 "
      >
        {/* hero img */}
        <div className="relative flex shadow-lg">
          <span className="absolute block w-full h-full inset-0 bg-black/30"></span>
          <img
            src="/images/hero.png"
            alt="hero-image"
            className="w-full h-[500px] sm:h-full object-cover"
          />
          {/* side functinlity for div */}
          {/* by each slide state changed to item id of that div */}
          <div className="absolute flex inset-0 z-10">
            {HERO_CONTENT.slice(0, 4).map(
              item =>
                item.id === active && (
                  <div
                    key={item.id}
                    className=" flex flex-col gap-4 xl:gap-8 justify-center items-start  text-white font-DanaBold px-6 sm:px-20 xl:px-32 lg:py-28 animate-fadeRight transition-all z-20 "
                  >
                    <h2 className="text-xl md:text-2xl xl:text-3xl">
                      {item.title}
                    </h2>
                    <p className="text-base lg:text-lg line-clamp-6">
                      {item.description}
                    </p>
                    <Link
                      to={`/blogs/${item.id}`}
                      className="bg-colorGreen cursor-pointer px-14 py-3  transition-all rounded-xl active:bg-lime-500 outline-none active:scale-95 active:translate-y-1 "
                    >
                      مشاهده
                    </Link>
                  </div>
                )
            )}
          </div>
          <div className="absolute bottom-1 left-0 right-0 flex h-fit gap-2 items-end justify-center lg:pb-10 w-full  z-10">
            {HERO_CONTENT.map(item => (
              <span
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`p-1 cursor-pointer block rounded-full ${
                  item.id === active ? 'bg-colorGreen' : 'bg-white'
                }`}
              ></span>
            ))}
          </div>
        </div>
        {/* hero content */}
        <div className="flex flex-col items-center justify-between pr-10 md:pr-0 child-hover:cursor-pointer">
          {HERO_CONTENT.slice(0, 4).map(item => (
            <div
              className={`relative flex items-center py-5 px-10 w-full transition-all   ${
                item.id === active
                  ? 'bg-colorGreen animate-fadeTop'
                  : 'bg-white'
              }`}
              key={item.id}
              onClick={() => setActive(item.id)}
            >
              <div className="space-y-2 xl:w-[90%]text-white h-full">
                <h4
                  className={`font-DanaBold text-lg lg:text-2xl transition-all ${
                    item.id === active ? 'text-white' : 'text-colorGreen'
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`pr-4 xl:w-[85%] line-clamp-2 transition-all ${
                    item.id === active ? 'text-white' : 'text-colorGray'
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <div
                className={`absolute flex-all -right-10 top-0 bottom-0 my-auto rounded-full w-20 h-20 md:shadow-2xl md:drop-shadow-2xl transition-all ${
                  item.id === active
                    ? 'bg-colorGreen shadow-2xl drop-shadow-xl'
                    : 'bg-white'
                }`}
              >
                <span
                  className={`w-8 h-8 transition-all ${
                    item.id === active ? 'text-white' : 'text-colorGreen'
                  }`}
                >
                  {item.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
