import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Student from "../models/Student";
import mongoose from "mongoose";
const institute = (students) => {
  const router = useRouter();
  const Search = (e) => {
    e.preventDefault();
    router.push("/documents");
  };
  return (
    <>
      <Navbar />
      <div className="overflow-x-auto relative mt-20 shadow-md sm:rounded-lg p-5 m-5">
        <table className="w-full py-1 px-3 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Roll No.
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                UID
              </th>
              <th scope="col" className="py-3 px-6">
                Documents
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {students.map((item) => {
              return (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-2">
                      <div className="text-base font-semibold">{item._id}</div>
                    </div>
                  </th>

                  <td className="py-4 px-6">
                    <div className="flex items-center">{item.name}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">{item.email}</div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="/documents?uid=123456789"
                      type="button"
                      data-modal-toggle="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Documents
                    </a>
                  </td>
                </tr>
              );
            })} */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-2">
                  <div className="text-base font-semibold">2</div>
                </div>
              </th>

              <td className="py-4 px-6">
                <div className="flex items-center">Aditya Priyanshu</div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">123456789963</div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/documents?uid=123456789"
                  type="button"
                  data-modal-toggle="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Documents
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-2">
                  <div className="text-base font-semibold">3</div>
                </div>
              </th>

              <td className="py-4 px-6">
                <div className="flex items-center">Abhishek kumar</div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">123456789964</div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/documents?uid=123456789"
                  type="button"
                  data-modal-toggle="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Documents
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-2">
                  <div className="text-base font-semibold">4</div>
                </div>
              </th>

              <td className="py-4 px-6">
                <div className="flex items-center">Aman Varshney</div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">123456789965</div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/documents?uid=123456789"
                  type="button"
                  data-modal-toggle="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Documents
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
  let students = await Student.find({});

  return {
    props: { students: JSON.parse(JSON.stringify(students)) }, // will be passed to the page component as props
  };
}

export default institute;
