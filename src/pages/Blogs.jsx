import React, { useState, useRef } from 'react';
import BlogItem from '../components/blog/BlogItem';
import { HERO_CONTENT } from '../blogData';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);
  const blogsRef = useRef(null);
  function goToSection() {
    const navbarHeight = 128; // Height of the navbar in pixels
    const offsetTop = blogsRef.current.offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <section className="my-5 md:my-10 h-full">
      <div className="relative h-[430px] md:h-[830px] overflow-hidden">
        <div className="bg-blog bg-cover bg-no-repeat flex h-full w-full">
          <img
            src="/images/blogShape.svg"
            alt=""
            className="absolute hidden lg:block right-0 top-0 bottom-0 my-auto h-full w-fit object-cover "
          />
          <span className="absolute lg:hidden w-full h-full bg-black/25"></span>
          <div className="absolute flex flex-col justify-center my-auto top-0 bottom-0 right-10 md:right-40  text-white h-fit">
            <h4 className="font-DanaBold text-3xl md:text-6xl">بلاگ‌ها</h4>
            <p className="md:text-2xl font-DanaMedium w-[80%]  lg:w-2/5 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
      <div className="container my-10 space-y-6  md:my-20" ref={blogsRef}>
        {showAll
          ? HERO_CONTENT.map(item => (
              <div
                className="flex relative flex-col md:flex-row justify-center items-center gap-2 lg:gap-6 w-full "
                key={item.id}
              >
                <Link
                  to={`/blogs/${item.id}`}
                  className="flex items-center gap-2 justify-center w-2/3 md:w-1/2 lg:w-1/3"
                >
                  <img
                    src={item.image}
                    alt="BlogImage"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className=" md:w-1/2 p-6 space-y-2">
                  <Link to={`/blogs/${item.id}`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-DanaBold text-colorBlack hover:scale-105 hover:rotate-2 transition-all line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-sm md:text-base text-justify text-colorGray line-clamp-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center text-colorGreen  justify-between xs:gap-0 h-fit child:flex  child:gap-1 text-sm leading-7">
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
                      تاریخ انتشار ۱۴۰۰/۰۲/۱۲
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      7 دقیقه زمان مطالعه
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
                      نوشته شده توسط matican_admin
                    </span>
                  </div>
                </div>
              </div>
            ))
          : HERO_CONTENT.slice(0, 4).map(item => (
              <div
                className="flex relative flex-col md:flex-row justify-center items-center gap-2 lg:gap-6 w-full "
                key={item.id}
              >
                <Link
                  to={`/blogs/${item.id}`}
                  className="flex items-center gap-2 justify-center w-2/3 md:w-1/2 lg:w-1/3"
                >
                  <img
                    src={item.image}
                    alt="BlogImage"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className=" md:w-1/2 p-6 space-y-2">
                  <Link to={`/blogs/${item.id}`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-DanaBold text-colorBlack hover:scale-105 hover:rotate-2 transition-all line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-sm md:text-base text-justify text-colorGray line-clamp-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center text-colorGreen  justify-between xs:gap-0 h-fit child:flex  child:gap-1 text-sm leading-7">
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
                      تاریخ انتشار ۱۴۰۰/۰۲/۱۲
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      7 دقیقه زمان مطالعه
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
                      نوشته شده توسط matican_admin
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="flex items-center justify-center">
        <span className=" bg-colorGreen/30 w-full h-0.5 "></span>
        <span className="flex items-center justify-center mx-10 w-fit text-colorGreenHigh cursor-pointer">
          <span
            className="w-24"
            onClick={() => {
              setShowAll(perv => !perv);
              showAll && goToSection('blogs');
            }}
          >
            {showAll ? 'بازگشت به بالا' : 'مشاهده همه'}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={`${showAll ? 'rotate-180' : ''} w-6 h-6`}
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className=" bg-colorGreen/30 w-full h-0.5 "></span>
      </div>
      <div className="container my-10 space-y-10  md:my-20">
        <h6 className="text-colorBlack font-DanaBold text-3xl text-center">
          مطالب دیگری که ممکن است دوست داشته باشید
        </h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 sm:px-0">
          {[...new Array(4)].map((_, index) => (
            <BlogItem key={index} id={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
