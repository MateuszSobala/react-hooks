import React, { useRef, useEffect, useState } from "react";
import * as PropTypes from "prop-types"

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => console.log("every render effect"));

  useEffect(() => {
    setInView(isInView());
    setIsLoading(false);
    console.log("loading effect");
  }, [isLoading]);

  useEffect(() => {
    const scrollHandler = () => setInView(isInView);
    window.addEventListener("scroll", scrollHandler);
    console.log("init effect");
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    console.log("image ref:" + imageRef.current);
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

ImageToggleOnScroll.propTypes = {
  primaryImg: PropTypes.string.isRequired,
  secondaryImg: PropTypes.string.isRequired
}

export default ImageToggleOnScroll;
