import React, { useEffect, useState } from 'react';

const BlogItem = ({ isActive, id }) => {
  // create a radom color array
  const [color, setColor] = useState('');
  const colorArray = ['#C2BB1B', '#1BC286', '#C21BB1', '#6CC21B'];
  // shuffle the colorArray to get one random color each time the component is rendered

  return (
    <div
      className={`flex relative p-6  flex-col justify-between  drop-shadow-md shadow-lg rounded-xl w-full h-[330px] overflow-hidden ${
        isActive ? 'bg-colorGreen' : 'bg-white'
      }`}
    >
      <span
        style={{ backgroundColor: colorArray[id] }}
        className="absolute -right-5 w-9 h-9 rounded-full"
      ></span>
      <div className="flex flex-col gap-4 ">
        <h5
          className={`text-lg md:text-2xl font-DanaBold transition-all delay-200 
          ${isActive ? 'text-white' : 'text-colorBlack'}`}
        >
          تجارت فارکس در مقابل معاملات سهام
        </h5>
        <p
          className={` transition-colors delay-200 text-balance group-hover:text-white ${
            isActive ? 'text-white' : 'text-colorGray'
          }`}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی صنعت چاپ، و با استفاده از طراحان
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است.
        </p>
      </div>
      <div
        className={`flex items-center gap-4  group-hover: transition-colors delay-200 h-fit child:flex child:gap-2 text-sm leading-7 ${
          isActive ? 'text-white' : 'text-colorGreen'
        }`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          ۱۴۰۰/۰۲/۱۲
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          matican_admin
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
