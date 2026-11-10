import { ImgProps } from './types';

export function Img({ src, alt, width, height, classes, click }: ImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      onClick={click}
      width={width}
      height={height}
    />
  );
}
