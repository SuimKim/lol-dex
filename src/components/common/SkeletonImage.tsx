"use client";

import Image from "next/image";
import { useState } from "react";

const SkeletonImage = ({
  src,
  width,
  height,
  alt,
  priority,
  className,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full "
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
      )}
      <Image
        src={src}
        width={width}
        height={height}
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
