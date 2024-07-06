import { Skeleton, SkeletonProps, styled } from '@mui/material';

export type CustomSkeletonProps = Pick<SkeletonProps, 'animation' | 'variant'>;

export const RelativeSkeleton = styled(Skeleton)<{ variant: CustomSkeletonProps['variant'] }>(
  ({ variant }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100% !important',
    height: '100% !important',
    backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
    borderRadius: variant === 'circular' ? '50%' : '0',
  })
);

export type ObjectFit = 'contain' | 'cover' | 'fill';

export const RelativeImg = styled('img')<{
  objectFit?: ObjectFit[];
  variant: CustomSkeletonProps['variant'];
}>(({ objectFit, variant }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100% !important',
  height: '100% !important',
  borderRadius: variant === 'circular' ? '50%' : '0',
  objectFit: objectFit,
}));
