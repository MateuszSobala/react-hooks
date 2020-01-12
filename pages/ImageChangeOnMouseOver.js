import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/speakers/bw/Speaker-187.jpg" secondaryImg="/speakers/Speaker-187.jpg"/>
      <ImageToggleOnMouseOver primaryImg="/speakers/bw/Speaker-823.jpg" secondaryImg="/speakers/Speaker-823.jpg"/>
    </div>
  );
};

export default ImageChangeOnMouseOver;
