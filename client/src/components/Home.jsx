import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../utils/constants";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const setLikedOrNotInPosts = (posts) => {
    return posts.map((post) => {
      const isLiked = user.posts.includes(post._id);
      return { ...post, isLiked };
    });
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/api/posts`, {
        credentials: "include",
      });
      const { data } = await res.json();
      console.log(data);
      setPosts(setLikedOrNotInPosts(data));
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (postId) => {
    try {
      const res = await fetch(`${SERVER_URL}/api/posts/${postId}/like`, {
        method: "PATCH",
        credentials: "include",
      });
      const { data } = await res.json();

      setPosts((prev) =>
        setLikedOrNotInPosts(
          prev.map((post) => {
            if (post._id === data._id) {
              return data;
            }
            return post;
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetchPosts();
    }
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => (
          <div className="container mx-auto px-4" key={post._id}>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
              <div className="md:flex md:flex-col">
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <a className="text-indigo-500 hover:text-indigo-600">
                      {post.user_id}
                    </a>
                  </div>
                </div>
                <div className="container mx-auto px-4">
                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    <div
                      style={{
                        width: "100%",
                        height: 0,
                        paddingBottom: "75%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={post.image.url}
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
                <div className="flex space-x-4 mt-4 ml-4">
                  {/* <!-- Like Icon --> */}
                  <a
                    href="#"
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => likePost(post._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={post.isLiked ? "red" : "none"}
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </a>

                  {/* <!-- Comment Icon --> */}
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-4">
                  <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* <!-- COMMENT SECTION --> */}
              <hr />
              <div className="p-4">
                <ul>
                  {/* <!-- Replace this with a loop in your JavaScript code to generate a list item for each comment --> */}
                  <li className="mb-2">
                    <span className="font-bold text-indigo-500">User Name</span>
                    <span className="ml-2 text-gray-600">
                      This is a comment
                    </span>
                  </li>
                  {/* <!-- End of loop --> */}
                </ul>
                {/* <!-- No Comments Message --> */}
                {/* <!-- <p className="text-center text-gray-500">No Comments yet</p> --> */}
              </div>

              {/* <!-- Input Field and Send Icon --> */}
              <div className="p-4 flex">
                <input
                  className="w-full rounded-l-md p-2 border-t mr-0 border-b border-l border-gray-200 bg-white"
                  placeholder="Write a comment..."
                />
                <button className="px-3 rounded-r-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Home;
