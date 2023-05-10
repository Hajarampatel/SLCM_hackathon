import React, { useEffect } from "react";
import Image from "next/image";
import Document from "../models/Document";
import mongoose from "mongoose";

const institutestudent = () => {
  useEffect(() => {
    try {
      let curruser = JSON.parse(localStorage.getItem("curruser"));
      console.log(curruser);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <>
      <div className="overflow-x-auto relative mt-20 shadow-md sm:rounded-lg p-5 m-5">
        <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
          <div>
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Student Info
            </button>
            <div
              id="dropdownAction"
              className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>Name</li>
                <li>Phone</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
        </div>
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
                {/* <!-- Modal toggle --> */}
                <a
                  href="/document/btech"
                  type="button"
                  data-modal-toggle="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
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
                {/* <!-- Modal toggle --> */}
                <a
                  href="/document/12thmarksheet"
                  type="button"
                  data-modal-toggle="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
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
                  href="/document/10thmarksheet"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let documents = await Document.find({ UID: context.query.id });
  return {
    props: { documents: JSON.parse(JSON.stringify(documents)) }, // will be passed to the page component as props
  };
}
export default institutestudent;
