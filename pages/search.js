import React, { useState } from "react";
import { useRouter } from "next/router";
const search = () => {
  const router = useRouter();
  const [uid, setuid] = useState();
  const handleChange = (e) => {
    setuid(e.target.value);
  };
  const Search = (e) => {
    e.preventDefault();
    router.push(`/documents?${uid}`);
  };
  return (
    <section className="bg-gradient-to-b from-orange-300 to-emerald-300 h-screen w-screen">
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
              Student Search
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="text"
                  name="Uid"
                  placeholder="Unique ID"
                  id="Uid"
                  value={uid}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                onClick={Search}
                type="submit"
                className="w-full text-black bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default search;
