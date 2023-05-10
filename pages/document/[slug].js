import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <nav className="bg-blue-300 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            User Info
          </button>
          <div
            className=" justify-end items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/student"
                  className="block cursor-pointer py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="text-gray-600 mt-20 body-font overflow-hidden">
        <div className="container px-2 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64  object-center rounded"
              src="https://dummyimage.com/200x300/000/fff"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-3xl title-font text-gray-500 tracking-widest">
                {slug}
              </h1>
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Year
              </h2>
              <button className="flex w-52 text-white bg-blue-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-blue-600 rounded">
                Download
              </button>
              <Link href="mailto:123@gmail.com">
                <button className="flex w-52 text-white bg-blue-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-blue-600 rounded">
                  Request Edit
                </button>
              </Link>
              <Link href="/upload">
                <button className="flex w-52 text-white bg-blue-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-blue-600 rounded">
                  Upload New Document
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;
