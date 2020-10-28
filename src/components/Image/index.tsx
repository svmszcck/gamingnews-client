import React, { useState } from "react";

import placeholder from "assets/images/placeholder.png";

const Image = ({ src, alt, className }: ImageProps) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <img
      src={error ? placeholder : src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
};

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default Image;
