import React from 'react';
import NewsItem from '../news/NewsItem';
const LastNews = () => {
  return (
    <section className="my-10 md:my-20">
      <div className="space-y-4 md:space-y-6">
        <h4 className="container font-DanaBold text-3xl md:text-5xl text-colorBlack">
          آخرین اخبار
        </h4>
        <span className="block h-1.5 w-1/4 bg-[#FF4422] rounded-l-xl"></span>
      </div>
      <div className="container flex-all gap-6 flex-col my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 sm:px-0">
          {[...new Array(6)].map((_, index) => (
            <NewsItem key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastNews;
