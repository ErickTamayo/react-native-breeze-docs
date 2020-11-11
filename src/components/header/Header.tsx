import React, { useState } from "react";
import HeaderBrand from "../../images/header-brand.svg";
import HeaderLogo from "../../images/header-logo.svg";
const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <nav className="md:fixed md:w-full flex-shrink-0 bg-white border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0 xl:w-64">
            <div className="hidden md:block flex-shrink-0">
              <HeaderBrand />
            </div>
            <div className="md:hidden">
              <HeaderLogo />
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full px-2 lg:px-6">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-400">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-400 bg-opacity-25 text-gray-400 placeholder-gray-400 focus:outline-none focus:bg-white focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search coming soon"
                  type="search"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setMenuIsVisible(!menuIsVisible)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:block lg:w-64">
            <div className="flex items-center justify-end">
              <div className="flex">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${menuIsVisible ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
