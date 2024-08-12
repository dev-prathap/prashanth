"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className=" px-4 lg:px-6 py-2.5 bg-primary fixed top-0 left-0 w-full z-50">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAdVBMVEWDAQH///9+AAB3AAB6AABzAABvAAD07++KLC369/fYwcCxf4Dt4uHx6+r8/Pvey8vh0dCCHRy+mpmDBwina2qyg4KsdnW5j4+DGBeCDxCSR0eOPz6gX16YT0/OsbCMMjPFpKOEJCOMODiZVlagbGudZGLXubm2CN7OAAACDklEQVRoge2T3XKjMAyFObKJMcixQwJJGwI0JPv+j7iCTNqmPzPdi73YHX0D9oBl+dg6zjJFURRFURRFURTl34WoKIh+GLzdfp/mq587BriyPxPC/hsZ1NSf16UWC3uStbfz8jTz2i1/l+4gn9bBzIG35x42t3n029v8dzx5xOdjCRS2YsedPXEdXcwK7vuQBqLe+XQk2/I6NHkPJJbATcWH0YXa2jqEmqRNydne8+mDcCfKqGkG2cIaOE3LRsaXpSvzCBfgqVsG23GNhClhF8MeMaHdIyU0DVKJcEJV1u+lUwM20ltrHHYriT2BVw3KDbx5Bp8RjucSjWRYdeWYO+Re9tL7kbl1nFJw17nNV9EVWPfFYznh5TCprqd1sJlBmPDLdHNyzjNwd6tIH+ao3JAkj0ADTBzM2aXkB+NT9GbFjoYR6cEYEs7TJIYR5a0R5W/JjSQvEM7HSzswGrsrRwmyFRJJ+AXeoxNta7SLBHfFiPhQUbretLVW5ARg95h8FREYjqZlsBG30FNsaZQiXmK8kt2l2BF1Zb0f7T71hw9ePEbxw0lsVgUvbpncaDvXb0I0WxetHZ2PLxl17ENlKbm7E4dWTkmmG1PdfUv28yUwRMtJSTub2NjlNVJn6eYZ9nUws+atWrGVm33cl+efXu8/gLI6MpfVX0i9pLfGfHESiqIoiqIoiqIoivJf8RuDtBx1RkeLcQAAAABJRU5ErkJggg=="
                className="mr-3 h-6 sm:h-9 rounded-3xl"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Prashanth
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:flex lg:w-auto lg:order-1 absolute lg:relative top-full right-0 w-full lg:w-auto lg:bg-transparent bg-white/30  border border-gray-200 lg:border-0 lg:shadow-none shadow-lg`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#special"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Special
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Experience"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#Team"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
