import React, { useState } from 'react';
import NavBar from './UI/NavBar';
import { NavLink, Link } from 'react-router-dom';
export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState({
    mainPage: false,
    blogs: false,
  });
  return (
    <div className="sticky w-full top-0 z-30">
      <NavBar></NavBar>
      {/* desktop menu */}
      <div className="block h-16 md:h-20 bg-white">
        <div className="container items-center justify-between hidden h-full md:flex z-50">
          <ul className="flex items-center gap-6 text-xl lg:gap-8 child:flex child:items-center font-DanaMedium ">
            <li className="relative group">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-colorGreen' : 'text-colorBlack'
                }
              >
                صفحه اصلی
              </NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="transition-all duration-200 w-7 h-7 group-hover:rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* sub menu */}
              <ul className="absolute top-0 left-0 right-0 invisible w-56 gap-2 px-8 py-8 mx-auto mt-10 space-y-2 text-base text-white list-disc transition-all shadow-md opacity-0 group-hover:visible group-hover:opacity-100 child-hover:text-zinc-700 child:transition-colors rounded-xl bg-colorGreen child:child:line-clamp-2  font-Dana">
                <li>
                  <a href="#">رزرو کوچینگ معامله گری</a>
                </li>
                <li>
                  <a href="#">کسب و کار آنلاین</a>
                </li>
                <li>
                  <a href="#">رشد غیر مستقیم روزانه</a>
                </li>
                <li>
                  <a href="#">متن تستی </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? 'text-colorGreen' : 'text-colorBlack'
                }
              >
                بلاگ ها
              </NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="transition-all duration-200 w-7 h-7 group-hover:rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* sub menu */}
              <ul className="absolute top-0 left-0 right-0 invisible w-56 gap-2 px-8 py-8 mx-auto mt-10 space-y-2 text-base text-white list-disc transition-all shadow-md opacity-0 group-hover:visible group-hover:opacity-100 child-hover:text-zinc-700 child:transition-colors rounded-xl bg-colorGreen child:child:line-clamp-2 font-Dana">
                <li>
                  <a href="#">نمودار سرمایه </a>
                </li>
                <li>
                  <a href="#">کسب و کار آنلاین</a>
                </li>
                <li>
                  <a href="#">سود حرفه ای در بازار سرمایه</a>
                </li>
                <li>
                  <a href="#">تحلیل مالی و سرمایه</a>
                </li>
                <li>
                  <a href="#">رشد غیر مستقیم روزانه</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? 'text-colorGreen' : 'text-colorBlack'
                }
              >
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? 'text-colorGreen' : 'text-colorBlack'
                }
              >
                تماس با ما
              </NavLink>
            </li>
          </ul>
          <Link
            to="/"
            className="flex items-center gap-2 text-xl lg:gap-4 lg:text-2xl font-MorabbaMedium"
          >
            <h4> آکادمی سرمایه گزاران برتر</h4>
            <img src="/images/main-logo.svg" className="w-8" alt="" />
          </Link>
        </div>
        <div
          className="container flex md:hidden items-center justify-between h-full"
          onClick={() => setShowMobileMenu(perv => !perv)}
        >
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
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          <Link
            to="/"
            className="flex items-center gap-2 text-lg lg:gap-4 lg:text-2xl font-MorabbaMedium"
          >
            <h4> آکادمی سرمایه گزاران برتر</h4>
            <img src="/images/main-logo.svg" className="w-6" alt="" />
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`fixed top-0 right-0 block h-screen px-6 py-10 space-y-10 rounded-md transition-all z-40 md:hidden bg-slate-50 ${
          showMobileMenu
            ? ' w-2/3 xs:w-2/4 visible opacity-100 translate-x-2'
            : 'w-0 invisible opacity-0'
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex justify-center w-full gap-2 text-xl font-MorabbaMedium"
          >
            <img src="/images/main-logo.svg" alt="main logo" className="w-5" />
            <h4>سرمایه گزاران برتر</h4>
          </Link>
          <span
            className="rounded-full flex-all h-7 w-7 hover:bg-colorGreen/10"
            onClick={() => setShowMobileMenu(perv => !perv)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        {/* body */}
        <ul className="flex flex-col items-start font-DanaMedium gap-6 pr-4 text-xl child:flex">
          <li className="flex-col w-full ">
            <div className="flex justify-between w-full ">
              <NavLink
                to="/"
                onClick={() => setShowMobileMenu(perv => !perv)}
                className={({ isActive }) =>
                  isActive ? 'text-colorGreenHigh' : 'text-colorBlack'
                }
              >
                صفحه اصلی
              </NavLink>
              <span
                onClick={() =>
                  setMobileSubMenu({
                    ...mobileSubMenu,
                    mainPage: !mobileSubMenu.mainPage,
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`transition-all duration-200 w-7 h-7 cursor-pointer ${
                    mobileSubMenu.mainPage ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            {/* sub menu */}
            <ul
              className={`space-y-2 pr-8  text-base transition-all text-zinc-700  child-hover:text-colorGreen child-hover:submenu__item--active rounded-xl child:child:line-clamp-2 child:transition-all child-hover:pr-4 child:w-fit ${
                mobileSubMenu.mainPage
                  ? 'visible opacity-100 h-full py-4 translate-y-1'
                  : 'h-0 invisible opacity-0'
              }`}
            >
              <li>
                <a href="#"> ابزار جعبه سرمایه</a>
              </li>
              <li>
                <a href="#">کسب و کار آنلاین</a>
              </li>
              <li>
                <a href="#">رشد غیر مستقیم روزانه</a>
              </li>
              <li>
                <a href="#">نمایشگاه ها</a>
              </li>
            </ul>
          </li>
          <li className="flex-col w-full">
            <div className="flex justify-between w-full">
              <NavLink
                onClick={() => setShowMobileMenu(perv => !perv)}
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? 'text-colorGreenHigh' : 'text-colorBlack'
                }
              >
                بلاگ ها
              </NavLink>
              <span
                onClick={() =>
                  setMobileSubMenu({
                    ...mobileSubMenu,
                    blogs: !mobileSubMenu.blogs,
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`transition-all duration-200 w-7 h-7 cursor-pointer ${
                    mobileSubMenu.blogs ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            {/* sub menu */}
            <ul
              className={`space-y-2 pr-8  text-base transition-all text-zinc-700  child-hover:text-colorGreen child-hover:submenu__item--active rounded-xl child:child:line-clamp-2 child:transition-all child-hover:pr-4 child:w-fit ${
                mobileSubMenu.blogs
                  ? 'visible opacity-100 h-full py-4 translate-y-1'
                  : 'h-0 invisible opacity-0'
              }`}
            >
              <li>
                <a href="#">نمودار سرمایه </a>
              </li>
              <li>
                <a href="#">کسب و کار آنلاین</a>
              </li>
              <li>
                <a href="#">سود حرفه ای در بازار سرمایه</a>
              </li>
              <li>
                <a href="#">تحلیل مالی و سرمایه</a>
              </li>
              <li>
                <a href="#">رشد غیر مستقیم روزانه</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              onClick={() => setShowMobileMenu(perv => !perv)}
              to="/about-us"
              className={({ isActive }) =>
                isActive ? 'text-colorGreenHigh' : 'text-colorBlack'
              }
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowMobileMenu(perv => !perv)}
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? 'text-colorGreenHigh' : 'text-colorBlack'
              }
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </div>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-30  transition-all bg-black  overlay  ${
          showMobileMenu ? 'bg-opacity-10 visible' : 'opacity-0 invisible'
        }`}
      ></div>
    </div>
  );
};
export default Header;
