import React from "react";

function Home() {
  return (
    <>
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
          <div class="md:flex md:flex-col">
            <div class="p-4">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <a class="text-indigo-500 hover:text-indigo-600"> USER ID </a>
              </div>
            </div>
            <div class="container mx-auto px-4">
              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                <div
                  style={{
                    width: "100%",
                    height: 0,
                    paddingBottom: "75%",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!-- Like and Comment Icons --> */}
            <div class="flex space-x-4 mt-4 ml-4">
              {/* <!-- Like Icon --> */}
              <a href="#" class="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </a>

              {/* <!-- Comment Icon --> */}
              <a href="#" class="text-gray-500 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
            <div class="p-4">
              <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Caption goes here
              </p>
            </div>
          </div>

          {/* <!-- COMMENT SECTION --> */}
          <hr />
          <div class="p-4">
            <ul>
              {/* <!-- Replace this with a loop in your JavaScript code to generate a list item for each comment --> */}
              <li class="mb-2">
                <span class="font-bold text-indigo-500">User Name</span>
                <span class="ml-2 text-gray-600">This is a comment</span>
              </li>
              {/* <!-- End of loop --> */}
            </ul>
            {/* <!-- No Comments Message --> */}
            {/* <!-- <p class="text-center text-gray-500">No Comments yet</p> --> */}
          </div>

          {/* <!-- Input Field and Send Icon --> */}
          <div class="p-4 flex">
            <input
              class="w-full rounded-l-md p-2 border-t mr-0 border-b border-l border-gray-200 bg-white"
              placeholder="Write a comment..."
            />
            <button class="px-3 rounded-r-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- 2nd POST --> */}

      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
          <div class="md:flex md:flex-col">
            <div class="p-4">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <a class="text-indigo-500 hover:text-indigo-600"> USER ID </a>
              </div>
            </div>
            <div class="container mx-auto px-4">
              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                <div
                  style={{
                    width: "100%",
                    height: 0,
                    paddingBottom: "75%",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1682685797818-c9dc151d241e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!-- Like and Comment Icons --> */}
            <div class="flex space-x-4 mt-4 ml-4">
              {/* <!-- Like Icon --> */}
              <a href="#" class="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </a>

              {/* <!-- Comment Icon --> */}
              <a href="#" class="text-gray-500 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
            <div class="p-4">
              <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Caption goes here
              </p>
            </div>
          </div>

          {/* <!-- COMMENT SECTION --> */}
          <hr />
          <div class="p-4">
            <ul>
              {/* <!-- Replace this with a loop in your JavaScript code to generate a list item for each comment --> */}
              <li class="mb-2">
                <span class="font-bold text-indigo-500">User Name</span>
                <span class="ml-2 text-gray-600">This is a comment</span>
              </li>
              {/* <!-- End of loop --> */}
            </ul>
            {/* <!-- No Comments Message --> */}
            {/* <!-- <p class="text-center text-gray-500">No Comments yet</p> --> */}
          </div>

          {/* <!-- Input Field and Send Icon --> */}
          <div class="p-4 flex">
            <input
              class="w-full rounded-l-md p-2 border-t mr-0 border-b border-l border-gray-200 bg-white"
              placeholder="Write a comment..."
            />
            <button class="px-3 rounded-r-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
