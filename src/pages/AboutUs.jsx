import React, { useEffect } from 'react';

const AboutUs = () => {
  return (
    <section className="my-5 md:my-10">
      <div className="relative h-[430px] md:h-[830px] overflow-hidden ">
        <div className="bg-aboutUs bg-cover bg-no-repeat flex h-full w-full">
          <img
            src="/images/blogShape.svg"
            alt=""
            className="absolute hidden lg:block right-0 top-0 bottom-0 my-auto h-full w-fit object-cover "
          />
          <span className="absolute lg:hidden w-full h-full bg-black/25"></span>
          <div className="absolute flex flex-col space-y-4 justify-center my-auto top-0 bottom-0 right-10 md:right-40  text-white h-fit">
            <h4 className="font-DanaBold text-3xl md:text-6xl">درباره ما</h4>
            <p className="md:text-2xl font-DanaMedium w-[80%]  lg:w-2/5 ">
              آکادمی سرمایه گزاران برتر، از پاییز سال ۲۰۲۱ فعالیت خود را به طور
              رسمی آغاز کرد و از بهار ۲۰۲۲ با گسترش دامنه فعالیت، آکادمی سرمایه
              گزاران برتر را به شکل استاندارد و برای اولین بار برای فارسی زبانان
              آغاز کرد. هدف آکادمی سرمایه گزاران برتر کشف استعداد و همکاری بلند
              مدت با تریدرهای حرفه‌ای است. آکادمی سرمایه گزاران برتر تحت نظارت و
              رگوله FSRC آنتیگوا و باربودا می باشد.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 md:my-20">
        <div className="flex flex-col  md:flex-row  justify-center items-center h-full gap-8 md:gap-0">
          <div className="flex-all flex-col space-y-6  md:w-1/2">
            <h4 className=" text-2xl md:text-3xl lg:text-4xl text-colorBlack font-DanaBold">
              نحوه کار ما
            </h4>
            <div className="text-colorGray lg:text-lg  w-4/5">
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
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </div>
          <div className="relative bg-aboutUsImg1 bg-cover bg-no-repeat h-[350px] md:h-[300px] lg:h-[350px] xl:h-[450px]  w-full md:w-1/2 overflow-hidden">
            {/* <img
              src="/images/aboutUsHowWeWork.png"
              alt="aboutUsHowWeWork"
              className=" object-contain"
            /> */}
            <img
              src="/images/aboutUsShapeHowOurWorks.svg"
              alt="aboutUsShapeHowOurWorks"
              className="hidden lg:block absolute  lg:-right-[60%] w-full h-full object-cover top-0 bottom-0 my-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row  items-center justify-between my-10 md:my-20">
        <div className="relative flex items-start justify-start bg-no-repeat bg-aboutUsImg2 bg-cover w-full h-[350px] lg:h-[400px] overflow-hidden">
          <img
            src="/images/aboutUsShapeGoal.svg"
            alt="aboutUsShapeGoal"
            className="hidden md:block absolute h-full -left-2/3 lg:-left-2/4 xl:-left-1/2 top-0 bottom-0 my-auto object-cover"
          />
        </div>
        <div className="flex-all flex-col space-y-6 w-full">
          <h4 className=" text-2xl md:text-3xl lg:text-4xl text-colorBlack font-DanaBold">
            هدف ما
          </h4>
          <div className="text-colorGray lg:text-lg  w-4/5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
