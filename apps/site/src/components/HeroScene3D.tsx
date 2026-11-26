import { useEffect, useRef, type ReactNode } from 'react';

import rocket360Avif from '../assets/hero-3d/rocket-360.avif';
import rocket720Avif from '../assets/hero-3d/rocket-720.avif';
import rocket360Webp from '../assets/hero-3d/rocket-360.webp';
import rocket720Webp from '../assets/hero-3d/rocket-720.webp';
import sun520Avif from '../assets/hero-3d/sun-520.avif';
import sun1040Avif from '../assets/hero-3d/sun-1040.avif';
import sun520Webp from '../assets/hero-3d/sun-520.webp';
import sun1040Webp from '../assets/hero-3d/sun-1040.webp';
import moon140Avif from '../assets/hero-3d/moon-140.avif';
import moon280Avif from '../assets/hero-3d/moon-280.avif';
import moon140Webp from '../assets/hero-3d/moon-140.webp';
import moon280Webp from '../assets/hero-3d/moon-280.webp';
import cloudA240Avif from '../assets/hero-3d/cloud-a-240.avif';
import cloudA480Avif from '../assets/hero-3d/cloud-a-480.avif';
import cloudA240Webp from '../assets/hero-3d/cloud-a-240.webp';
import cloudA480Webp from '../assets/hero-3d/cloud-a-480.webp';
import cloudB320Avif from '../assets/hero-3d/cloud-b-320.avif';
import cloudB640Avif from '../assets/hero-3d/cloud-b-640.avif';
import cloudB320Webp from '../assets/hero-3d/cloud-b-320.webp';
import cloudB640Webp from '../assets/hero-3d/cloud-b-640.webp';
import cloudC200Avif from '../assets/hero-3d/cloud-c-200.avif';
import cloudC400Avif from '../assets/hero-3d/cloud-c-400.avif';
import cloudC200Webp from '../assets/hero-3d/cloud-c-200.webp';
import cloudC400Webp from '../assets/hero-3d/cloud-c-400.webp';

type LayerPictureProps = {
  className: string;
  avif1x: string;
  avif2x: string;
  webp1x: string;
  webp2x: string;
  width: number;
  height: number;
  sizes: string;
  /** LCP rocket only */
  priority?: boolean;
};

function LayerPicture({
  className,
  avif1x,
  avif2x,
  webp1x,
  webp2x,
  width,
  height,
  sizes,
  priority = false,
}: LayerPictureProps) {
  const avifSrcSet = `${avif1x} ${width}w, ${avif2x} ${width * 2}w`;
  const webpSrcSet = `${webp1x} ${width}w, ${webp2x} ${width * 2}w`;

  return (
    <div className={className} aria-hidden={priority ? undefined : true}>
      <picture>
        <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        <img
          src={webp1x}
          srcSet={webpSrcSet}
          sizes={sizes}
          width={width}
          height={height}
          alt={priority ? 'Cream rocket with orange nose and fins' : ''}
          decoding={priority ? 'sync' : 'async'}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          draggable={false}
        />
      </picture>
    </div>
  );
}

interface HeroScene3DProps {
  launching?: boolean;
  children?: ReactNode;
}

export function HeroScene3D({ launching = false, children }: HeroScene3DProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      raf = 0;
      scene.style.setProperty('--tilt-x', `${ty * -3.5}deg`);
      scene.style.setProperty('--tilt-y', `${tx * 4}deg`);
    };

    const onMove = (event: { clientX: number; clientY: number }) => {
      const rect = scene.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      tx = (event.clientX - rect.left) / rect.width - 0.5;
      ty = (event.clientY - rect.top) / rect.height - 0.5;
      if (!raf) raf = window.requestAnimationFrame(apply);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = window.requestAnimationFrame(apply);
    };

    scene.addEventListener('pointermove', onMove, { passive: true });
    scene.addEventListener('pointerleave', onLeave);
    return () => {
      scene.removeEventListener('pointermove', onMove);
      scene.removeEventListener('pointerleave', onLeave);
      if (raf) window.cancelAnimationFrame(raf);
      scene.style.removeProperty('--tilt-x');
      scene.style.removeProperty('--tilt-y');
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className={`hero-scene ${launching ? 'is-launching' : ''}`}
    >
      <div className="hero-scene__glow" aria-hidden="true" />
      <div className="hero-scene__depth" aria-hidden="true">
        <LayerPicture
          className="hero-layer hero-layer--sun"
          avif1x={sun520Avif}
          avif2x={sun1040Avif}
          webp1x={sun520Webp}
          webp2x={sun1040Webp}
          width={520}
          height={526}
          sizes="(max-width: 760px) 78vw, (max-width: 1100px) 64vw, 560px"
        />
        {/* CSS sparkles — pure CSS instead of the stars raster */}
        <span className="hero-sparkle hero-sparkle--1" />
        <span className="hero-sparkle hero-sparkle--2" />
        <span className="hero-sparkle hero-sparkle--3" />
        <span className="hero-sparkle hero-sparkle--4" />
        <LayerPicture
          className="hero-layer hero-layer--moon"
          avif1x={moon140Avif}
          avif2x={moon280Avif}
          webp1x={moon140Webp}
          webp2x={moon280Webp}
          width={140}
          height={142}
          sizes="(max-width: 760px) 18vw, 120px"
        />
        <LayerPicture
          className="hero-layer hero-layer--cloud-a"
          avif1x={cloudA240Avif}
          avif2x={cloudA480Avif}
          webp1x={cloudA240Webp}
          webp2x={cloudA480Webp}
          width={240}
          height={163}
          sizes="(max-width: 760px) 48vw, 260px"
        />
        <LayerPicture
          className="hero-layer hero-layer--cloud-c"
          avif1x={cloudC200Avif}
          avif2x={cloudC400Avif}
          webp1x={cloudC200Webp}
          webp2x={cloudC400Webp}
          width={200}
          height={133}
          sizes="(max-width: 760px) 36vw, 200px"
        />
        <LayerPicture
          className="hero-layer hero-layer--rocket"
          avif1x={rocket360Avif}
          avif2x={rocket720Avif}
          webp1x={rocket360Webp}
          webp2x={rocket720Webp}
          width={360}
          height={599}
          sizes="(max-width: 760px) 50vw, (max-width: 900px) 40vw, 38vw"
          priority
        />
      </div>
      <div className="hero-scene__ground" aria-hidden="true" />
      {children ? (
        <div className="hero-scene__overlay">
          {/* Fluffy cloud above the clay card — ~80% card width, casts onto the slab */}
          <div className="hero-scene__card-cloud" aria-hidden="true">
            <span className="hero-sparkle hero-sparkle--card" />
            <LayerPicture
              className="hero-layer hero-layer--cloud-card"
              avif1x={cloudB320Avif}
              avif2x={cloudB640Avif}
              webp1x={cloudB320Webp}
              webp2x={cloudB640Webp}
              width={320}
              height={84}
              sizes="(max-width: 760px) 55vw, 200px"
            />
            <span className="hero-scene__cloud-cast" />
          </div>
          {children}
        </div>
      ) : null}
    </div>
  );
}
