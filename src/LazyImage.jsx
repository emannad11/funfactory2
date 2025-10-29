import React from "react";

const LazyImage = ({ src, alt, height, width, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height || "auto"}
      width={width || "100%"}
      style={{ display: "block", ...style }}
      loading="lazy" // native lazy loading
    />
  );
};

export default LazyImage;
