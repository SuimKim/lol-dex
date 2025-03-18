"use client";

import Image from "next/image";
import { useState } from "react";
import type { SkeltonImage } from "@/types/components/common.types";

const SkeletonImage = ({
  imgPath,
  imgWidth,
  imgHeight,
  alt,
  priority,
  className,
}: SkeltonImage) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full "
      style={{ aspectRatio: `${imgWidth}/${imgHeight}` }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
      )}
      <Image
        src={imgPath}
        width={imgWidth}
        height={imgHeight}
        alt={alt}
        priority={priority}
        onLoadingComplete={() => setIsLoaded(true)}
        className={`w-full h-full object-cover ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity ${className}`}
      />
    </div>
  );
};

export default SkeletonImage;
