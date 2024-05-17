import React, { useEffect } from 'react';

const ContactUs = () => {
  return (
    <section className="my-5 md:my-10 ">
      <div className="relative h-[430px] md:h-[830px] overflow-hidden ">
        <div className="bg-contact bg-cover bg-no-repeat flex h-full w-full">
          <img
            src="/images/blogShape.svg"
            alt=""
            className="absolute hidden lg:block right-0 top-0 bottom-0 my-auto h-full w-fit object-cover "
          />
          <span className="absolute lg:hidden w-full h-full bg-black/25"></span>
          <div className="absolute flex flex-col space-y-4  justify-center my-auto top-0 bottom-0 right-10 md:right-40  text-white h-fit">
            <h4 className="font-DanaBold text-3xl md:text-6xl">تماس با ما</h4>
            <p className="md:text-2xl font-DanaMedium w-[80%]  lg:w-2/5 ">
              آکادمی سرمایه گذاران برتر یک شرکت تامین سرمایه است و به عنوان
              کارگزار خدماتی ارائه نمیدهد. ترید در بازارهای مالی، ریسک زیادی
              برای سرمایه شما دارد و ممکن است برای همه مناسب نباشد. به همین دلیل
              باید خطرات آن را درک کنید و در صورت نیاز به دنبال مشاور مالی متخصص
              باشید. شما باید پیش از استفاده از خدمات ما اهداف، وضعیت مالی و سطح
              تجربه خود را ارزیابی کنید.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-10 flex flex-col md:flex-row justify-between flex-wrap gap-10 items-center">
        <div className="relative h-full ">
          <span className="flex-all flex-col gap-2 absolute -left-8 top-0  rounded-full h-[180px] text-colorBlack text-xl font-MorabbaMedium">
            <span className="text-colorGreenHigh ">شماره تماس</span>
            <span>555-555-555</span>
          </span>
          <span className="block w-[170px] h-[170px] bg-colorGreen/10  rounded-full"></span>
          <div className="flex-all absolute top-0 right-0 rounded-full w-[70px] h-[70px] bg-colorGreenHigh text-white">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </div>
        <div className="relative h-full ">
          <span className="flex-all flex-col gap-2 absolute -left-20 top-0  rounded-full h-[180px] text-colorBlack text-xl font-MorabbaMedium">
            <span className="text-colorGreenHigh">ایمیل</span>
            <span>info@ecommercewithme.com</span>
          </span>
          <span className="block w-[170px] h-[170px] bg-colorGreen/10  rounded-full"></span>
          <div className="flex-all absolute top-0 right-0 rounded-full w-[70px] h-[70px] bg-colorGreenHigh text-white">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </div>
        <div className="relative h-full ">
          <span className="flex-all flex-col gap-2 absolute -left-10 pr-14 top-0  rounded-full h-[180px] text-colorBlack text-xl font-MorabbaMedium">
            <span className="text-colorGreenHigh ">دفتر مرکزی</span>
            <span>تهران، میدان ولیعصر بالاتر از میدان توحید</span>
          </span>
          <span className="block w-[170px] h-[170px] bg-colorGreen/10  rounded-full"></span>
          <div className="flex-all absolute top-0 right-0 rounded-full w-[70px] h-[70px] bg-colorGreenHigh text-white">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row flex-wrap my-10 justify-between space-y-6">
        <div className="flex flex-col gap-4 items-center px-4 sm:px-20 md:px-8 lg:px-14 xl:px-20 py-6 rounded-xl shadow-md drop-shadow-md bg-white">
          <h6 className=" text-colorBlack text-2xl md:text-3xl">
            با ما در ارتباط باشید
          </h6>
          <input
            className="w-full md:w-[300px] lg:w-[380px] h-12 border border-[#237425] pr-3 rounded-xl outline-none placeholder-[#237425]/70  placeholder:text-xm"
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            name=""
            id=""
          />
          <input
            className="w-full md:w-[300px] lg:w-[380px] h-12 border border-[#237425] pr-3 rounded-xl outline-none placeholder-[#237425]/70 placeholder:text-xm"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            name=""
            id=""
          />
          <textarea
            className="w-full md:w-[300px] lg:w-[380px] h-[300px] border border-[#237425] pr-3 rounded-xl outline-none placeholder-[#237425]/70 placeholder:text-xm"
            placeholder="متن خود را وارد کنید"
          ></textarea>
          <button className="w-full md:w-[300px] lg:w-[380px] h-12 mt-4 rounded-xl text-white cursor-pointer bg-[#6CC21B] active:bg-lime-500 outline-none active:scale-95 active:translate-y-1 transition-all">
            ارسال
          </button>
        </div>
        <div className="flex items-center justify-center h-[300px] md:h-auto md:w-1/2 px-4 lg:px-8 xl:px-20 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.6924302154835!2d51.41561104592219!3d35.6942956168649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e019f1ac4ba77%3A0xb98f44956995033b!2sCharsou%20Mall!5e0!3m2!1sen!2s!4v1709836832970!5m2!1sen!2s"
            className="w-full h-full rounded-xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
