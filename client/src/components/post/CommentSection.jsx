import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/constants";

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const getAllComments = async () => {
    try {
      const res = await fetch(`${SERVER_URL}/api/posts/${postId}/comments`, {
        credentials: "include",
      });
      const { data } = await res.json();
      console.log(data);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const createComment = async (commentText) => {
    try {
      const res = await fetch(`${SERVER_URL}/api/posts/${postId}/comments`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentText }),
      });

      const { data } = await res.json();
      setComments((prev) => [...prev, data]);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4">
        <ul>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li className="mb-2">
                <span className="font-bold text-indigo-500">
                  {comment.user.username}
                </span>
                <span className="ml-2 text-gray-600">
                  {comment.commentText}
                </span>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No Comments yet</p>
          )}
        </ul>
      </div>

      {/* <!-- Input Field and Send Icon --> */}
      <div className="p-4 flex">
        <input
          className="w-full rounded-l-md p-2 border-t mr-0 border-b border-l border-gray-200 bg-white"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button className="px-3 rounded-r-md bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => createComment(commentText)}
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
    </>
  );
}

export default CommentSection;
