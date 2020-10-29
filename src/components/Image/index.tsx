/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";

import placeholder from "assets/images/placeholder.png";

const Image = ({
  src,
  alt,
  className,
  id,
  isCached = false,
  isExternal = false,
}: ImageProps) => {
  const [error, setError] = useState<boolean>(false);

  const cachedImage = useMemo(() => src, [id]);
  const image = isExternal || !isCached ? src : cachedImage;

  return (
    <img
      src={error ? placeholder : image}
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
  id?: string;
  isCached?: boolean;
  isExternal?: boolean;
};

export default Image;
