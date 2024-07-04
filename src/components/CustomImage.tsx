'use client';

import { useEffect, useState } from 'react';

import {
  CustomSkeletonProps,
  ObjectFit,
  RelativeImg,
  RelativeSkeleton,
} from './CustomImage.styles';

type Loading = 'eager' | 'lazy';

type CustomImageProps = {
  src?: string | null;
  hoverSrc?: string | null;
  alt: string;
  loading?: Loading;
  objectFit?: ObjectFit[];
  isCaptureBlocked?: boolean;
} & CustomSkeletonProps;

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  hoverSrc,
  alt,
  animation = 'wave',
  variant = 'rounded',
  loading = 'lazy',
  objectFit,
  isCaptureBlocked = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    setIsHovered(false);
  }, [src]);

  if (!src) {
    return <RelativeSkeleton animation={animation} variant={variant} />;
  }

  return (
    <RelativeImg
      src={isHovered ? hoverSrc ?? src : src}
      loading={loading}
      alt={alt}
      variant={variant}
      objectFit={objectFit}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onContextMenu={isCaptureBlocked ? onContextMenu : undefined}
    />
  );
};
