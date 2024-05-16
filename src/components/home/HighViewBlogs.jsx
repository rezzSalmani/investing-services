import React, { useState } from 'react';
import BlogItem from '../blog/BlogItem';

const HighViewBlogs = () => {
  const [initialBlogs, setInitialBlogs] = useState(4);
  return (
    <section className="my-10 md:my-20">
      <div className="space-y-4 md:space-y-6">
        <h4 className="container font-DanaBold text-3xl md:text-5xl text-colorBlack">
          پر بازدیدترین مقالات
        </h4>
        <span className="block h-1.5 w-2/6 bg-[#FF4422] rounded-l-xl"></span>
      </div>
      <div className="container flex-all gap-6 flex-col my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 sm:px-0">
          {/* create temp array with 8 length and map over them to show content */}
          <BlogItem isActive={true} />
          {[...new Array(initialBlogs)].map((_, index) => (
            <BlogItem key={index} />
          ))}
        </div>
        <button
          className="md:hidden rounded-lg px-8 py-3 bg-colorGreen text-white"
          onClick={() => {
            if (initialBlogs <= 4) {
              setInitialBlogs(8);
            } else {
              setInitialBlogs(4);
            }
          }}
        >
          {initialBlogs <= 4 ? 'مشاهده همه' : 'مخفی کردن '}
        </button>
      </div>
    </section>
  );
};

export default HighViewBlogs;
