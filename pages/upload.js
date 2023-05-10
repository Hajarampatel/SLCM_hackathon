import React from "react";
import Image from "next/image";
import { useState } from "react";
const upload = () => {
  const [uid, setuid] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [issuedBy, setissuedBy] = useState("");
  const [certificateId, setcertificateId] = useState("");
  const [ready, setready] = useState(false);
  const handleChange = (e) => {
    if (e.target.name == "uid") {
      setuid(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "title") {
      settitle(e.target.value);
    } else if (e.target.name == "issuedBy") {
      setissuedBy(e.target.value);
    } else if (e.target.name == "certificateId") {
      setcertificateId(e.target.value);
    } else if (e.target.name == "") {
    }
  };
  return (
    <section className="bg-gradient-to-b from-orange-300 to-emerald-300">
      {/* <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
  /> */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Student Master Database
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Upload Document
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="text"
                  value={uid}
                  onChange={handleChange}
                  name="uid"
                  placeholder="Student ID"
                  id="uid"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  value={title}
                  onChange={handleChange}
                  name="title"
                  placeholder="Title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  value={desc}
                  name="desc"
                  id="desc"
                  placeholder="Description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="issuedBy"
                  value={issuedBy}
                  id="issuedBy"
                  placeholder="Issued By"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  value={certificateId}
                  name="certificateId"
                  id="certificateId"
                  placeholder="Certificate Id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input
                  type="file"
                  // onChange={handleChange}
                  name="file"
                  id="file"
                  placeholder="Upload Document"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="w-full text-black bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default upload;
