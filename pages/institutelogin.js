import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const institutelogin = () => {
  const [InstId, setInstId] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    if (e.target.name == "InstId") {
      setInstId(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { InstId, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/InstLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setInstId("");
    setpassword("");
    console.log(response.success);
    if (response.success == true) {
      toast.success("Logged in successfully", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem(
        "curruser",
        JSON.stringify({ token: response.token, name: response.name })
      );

      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/institute`);
      }, 1000);
    } else {
      toast.error(response.error, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem(
        "curruser",
        JSON.stringify({ token: response.token, email: response.email })
      );
    }
  };
  return (
    <section className="bg-gradient-to-b from-orange-300 to-emerald-300 h-screen">
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              Institute Login
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="text"
                  name="InstId"
                  value={InstId}
                  onChange={handleChange}
                  placeholder="Institute ID"
                  id="InstId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-black bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-black dark:text-gray-400">
                Don't have an account yet?{" "}
                <a
                  href="/InstSignUp"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default institutelogin;
