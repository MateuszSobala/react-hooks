import React, { useRef } from "react";
import * as PropTypes from "prop-types"

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => (imageRef.current.src = secondaryImg)}
      onMouseOut={() => (imageRef.current.src = primaryImg)}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

ImageToggleOnMouseOver.propTypes = {
    primaryImg: PropTypes.string.isRequired,
    secondaryImg: PropTypes.string.isRequired
}

export default ImageToggleOnMouseOver;
