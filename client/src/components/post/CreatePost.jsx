import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const handlePreviewImage = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div class="flex flex-col items-center justify-center py-2">
      <div class="p-8 bg-white shadow-lg rounded w-full max-w-lg">
        <h2 class="mb-6 text-2xl font-semibold text-gray-700">Create Post</h2>
        {previewImage ? (
          <div id="preview" class="mt-4">
            <img
              class="w-full h-64 object-cover rounded"
              src={previewImage}
              alt="Image preview"
            />
          </div>
        ) : (
          <div class="flex justify-center items-center w-full h-64 border-2 border-gray-300 border-dashed rounded">
            <label class="text-gray-500 cursor-pointer">
              <span class="mt-2 text-base leading-normal">Upload an Image</span>
              <input
                type="file"
                class="hidden"
                id="image"
                accept="image/*"
                onChange={handlePreviewImage}
              />
            </label>
          </div>
        )}

        <div>
          <label
            class="block mt-6 mb-2 text-sm font-bold text-gray-700"
            for="caption"
          >
            Caption
          </label>
          <textarea
            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="caption"
            type="text"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>
        </div>
        <button
          class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreatePost;

// TExT dATA vs Binary Data
