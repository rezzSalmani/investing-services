import React, { useEffect, useState } from 'react';
import BlogDetailItem from '../components/blog/BlogDetailItem';
import { useParams } from 'react-router-dom';
import { HERO_CONTENT } from '../blogData';
const helperMenu = [
  { title: 'مقدمه', id: 'c1' },
  { title: 'بررسی اجمالی', id: 'c2' },
  { title: 'اطلاعات اولیه', id: 'c3' },
  { title: 'اطلاعات کلی', id: 'c4' },
  { title: 'راه حل', id: 'c5' },
  { title: 'پیام صوتی', id: 'c6' },
];
const BlogDetail = () => {
  const [activeChevron, setActiveChevron] = useState('c1');
  const { id } = useParams();
  const blogItem = HERO_CONTENT.find(item => item.id === id);

  function goToSection(id) {
    setActiveChevron(id);
    const offsetTop = document.getElementById(id).offsetTop - 128;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
  return (
    <section className="my-10 md:my-20">
      <div className="container flex gap-6 lg:gap-10  ">
        {/* helper menu */}
        <div className="bg-white hidden sm:block rounded-xl shadow-lg drop-shadow-lg w-3/12 xl:w-1/6 h-fit sticky top-[20%]">
          <h6 className="md:text-xl font-DanaMedium text-colorGreen p-2 xl:p-4">
            اطاعات صفحه
          </h6>
          <span className="w-full  h-0.5 block bg-colorGreenHigh/20 "></span>
          <div className="flex flex-col gap-2 text-colorGray text-sm md:text-base child:flex child:gap-2 child:items-center p-2 xl:p-4 child:transition-all">
            {helperMenu.map(item => (
              <div key={item.id}>
                {item.id === activeChevron && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-5 h-5 text-colorGreen"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span
                  className={`cursor-pointer transition-all ${
                    item.id === activeChevron
                      ? 'scale-110 text-colorGreen'
                      : 'pr-6'
                  }`}
                  onClick={() => goToSection(item.id)}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full space-y-8 md:space-y-14 overflow-hidden">
          <h2 className="text-2xl md:text-4xl text-colorGreen font-DanaBold ">
            {blogItem.title}
          </h2>
          <div className="flex flex-col justify-center gap-4" id="c1">
            <h4 className="relative pr-10 text-colorBlack text-xl md:text-3xl font-DanaMedium">
              مقدمه
              <span className="absolute top-0 bottom-0 -right-5 my-auto rounded-full w-10 h-10 bg-[#FF4422]"></span>
            </h4>
            <p className="md:text-lg font-Dana text-justify text-colorGray">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="flex w-full h-fit">
            <div className="w-1/3 h-full relative">
              <img
                src="/images/bg-blogDetail-green.svg"
                alt="BgSvg"
                className=" object-contain"
              />
              <img
                src="/images/logo-blogDetail.svg"
                alt="logoSvg"
                className="absolute h-14  md:h-38 xl:h-fit inset-0 my-auto mx-auto"
              />
            </div>
            <img
              src="/images/blogDetail1.png"
              alt=""
              className="flex items-end w-4/6 object-cover "
            />
          </div>
          <BlogDetailItem title="بررسی اجمالی" color="#C2BB1B" id="c2" />
          <div className="w-full">
            <img
              src="/images/RESIZEME-YouTube.png"
              alt="youTubeLink"
              className="w-full"
            />
          </div>
          <BlogDetailItem title="اطلاعات اوایه" color="#C21BB1" id="c3" />
          <BlogDetailItem title="اطلاعات کلی" color="#1BC286" id="c4" />
          <div
            className="flex flex-col justify-center gap-4 bg-[#FBFFF8] rounded-xl"
            id="c5"
          >
            <h4 className="relative  flex items-center gap-2 pr-10  text-xl md:text-3xl font-DanaMedium text-colorGreen">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </span>
              راه حل
            </h4>
            <p className="md:text-lg font-MorabbaMedium text-justify text-colorGray">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="hidden lg:flex w-full relative h-[170px]" id="c6">
            <div className="w-full xl:w-[90%]">
              <div className="absolute flex h-full child:h-fit justify-end child:pl-8 items-center gap-2 xl:gap-5 -right-56 md:-right-52 bg-voice w-full bg-no-repeat child:w-22 child:xl:w-auto">
                <img src="/images/voice/volum.svg" alt="volum" />
                <img src="/images/voice/timeLeft.svg" alt="timeLeft" />
                <img
                  src="/images/voice/sounds.svg"
                  alt="sounds"
                  className="w-44"
                />
                <img src="/images/voice/play.svg" alt="play" />
              </div>
            </div>
            <div className="flex w-auto h-full justify-end">
              <img src="/images/happyGuy.png" alt="happyGuy" className="" />
            </div>
          </div>
          <div className="block lg:hidden h-[170px] w-full">
            <div className="flex items-center  w-full]">
              <div className=" flex h-full child:h-fit justify-end child:pl-8 items-center flex-wrap gap-2 xl:gap-5 w-full  child:w-16 child:md:w-22 child:xl:w-auto">
                <img src="/images/voice/volum.svg" alt="volum" />
                <img src="/images/voice/timeLeft.svg" alt="timeLeft" />
                <img src="/images/voice/sounds.svg" alt="sounds" />
                <img src="/images/voice/play.svg" alt="play" />
              </div>
              <div className="flex w-auto h-full justify-end">
                <img src="/images/happyGuy.png" alt="happyGuy" className="d" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
