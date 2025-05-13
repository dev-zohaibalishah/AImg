import React from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanced";

const Home = () => {
  const [uploadImg, setUploadImg] = useState(null);
  const [enhancedImg, setEnhancedImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImgHandler = async (file) => {
    setUploadImg(URL.createObjectURL(file))
    setLoading(true)
    
    // API Call
    try {
        const enhancedURL = await enhancedImageAPI(file)
        setEnhancedImg(enhancedURL)
        setLoading(false)
    } catch (error) {
        console.log(error)
        alert("Something went wrong with API call")
    }
  };

  return (
    <>
      <ImageUpload UploadImgHandler={UploadImgHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImg}
        enhanced={enhancedImg?.image}
      />
    </>
  );
};

export default Home;
