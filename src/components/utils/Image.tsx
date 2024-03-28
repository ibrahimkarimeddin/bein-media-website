'use client'
import React, { FC, ImgHTMLAttributes } from 'react';
import { BaseURL } from '../../api/config';
import useImageError from '../../hooks/useImageError';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
  isBaseURL?: boolean;
}

const Image: FC<ImageProps> = ({ src, className = '', isBaseURL = false, ...props }) => {
  const handleError = useImageError;
  const imageUrl = isBaseURL ? BaseURL + src : src;
  // console.log(imageUrl,"imageUrl");

  return (
    
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageUrl || ErrorImage}
      className={className}
      onError={handleError}
      alt={src}
      loading='lazy'
      width="100%" height="auto"
      {...props}
    />
  );
};

export default Image;


export const ErrorImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
