import React from "react";
import Navbar from "../components/Navbar";
const Student = () => {
  return (
    <>
      <Navbar />
      {/* <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
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
                <a
                  href="/student"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="overflow-x-auto relative mt-20 shadow-md sm:rounded-lg p-5 m-5">
        <table className="w-full py-2 px-3 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Issued in Year
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-3">
                  <div className="text-base font-semibold">Btech Degree</div>
                </div>
              </th>

              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  2021
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/document/btech"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-3">
                  <div className="text-base font-semibold">12th Marksheet</div>
                </div>
              </th>

              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  2016
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/document/12th"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-3">
                  <div className="text-base font-semibold">10th Marksheet</div>
                </div>
              </th>

              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  2014
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/document/10th"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
