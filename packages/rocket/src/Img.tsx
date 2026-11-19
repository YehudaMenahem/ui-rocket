import { useState } from 'react';
import { ImgProps } from './types';

export function Img({
  src,
  alt = '',
  width,
  height,
  classes,
  click,
  srcSet,
  sizes,
  loading,
  decoding = 'async',
  fetchPriority,
  sources,
  fallbackSrc,
  objectFit,
}: ImgProps) {
  const [failed, setFailed] = useState(false);
  const useFallback = failed && Boolean(fallbackSrc);
  const currentSrc = useFallback ? fallbackSrc! : src;

  const onError = () => {
    if (fallbackSrc && !failed) {
      setFailed(true);
    }
  };

  const img = (
    <img
      src={currentSrc}
      alt={alt}
      className={sources && !useFallback ? undefined : classes}
      onClick={click}
      width={width}
      height={height}
      srcSet={useFallback ? undefined : srcSet}
      sizes={useFallback ? undefined : sizes}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={onError}
      style={objectFit ? { objectFit } : undefined}
    />
  );

  if (sources && sources.length > 0 && !useFallback) {
    return (
      <picture className={classes}>
        {sources.map((s) => (
          <source
            key={`${s.type}-${s.srcSet}`}
            type={s.type}
            srcSet={s.srcSet}
            sizes={s.sizes ?? sizes}
          />
        ))}
        {img}
      </picture>
    );
  }

  return img;
}
