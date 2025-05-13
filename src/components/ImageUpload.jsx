import React from "react";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    // console.log(e.target.files[0])
    const file = e.target.files[0];
    if (file){
        props.UploadImgHandler(file)
    }
  };

  return (
    <div className="bg-zinc-600 shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-blue-400 hover:text-blue-400 transition-all"
      >
        <span className="text-lg font-medium">
          Click and drag to upload your image
        </span>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
