import type { ImgSource } from '@ui-rocket/rocket';

const WIDTHS = [480, 960, 1600] as const;

export type PhotoId =
  | 'apollo11-liftoff'
  | 'shuttle-columbia'
  | 'earthrise'
  | 'blue-marble'
  | 'engine-test';

export interface PhotoAssets {
  id: PhotoId;
  /** Default WebP (960w) for `src` fallback. */
  src: string;
  srcSetWebp: string;
  srcSetAvif: string;
  sources: ImgSource[];
  /** Intrinsic pixel size of the 1600w master (approximate after crop/scale). */
  width: number;
  height: number;
  alt: string;
}

const modules = import.meta.glob('../assets/photos/*.{webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function url(id: PhotoId, width: (typeof WIDTHS)[number], ext: 'webp' | 'avif'): string {
  const key = `../assets/photos/${id}-${width}.${ext}`;
  const href = modules[key];
  if (!href) {
    throw new Error(`Missing photo asset: ${key}`);
  }
  return href;
}

function srcSet(id: PhotoId, ext: 'webp' | 'avif'): string {
  return WIDTHS.map((w) => `${url(id, w, ext)} ${w}w`).join(', ');
}

function photo(id: PhotoId, width: number, height: number, alt: string): PhotoAssets {
  const srcSetWebp = srcSet(id, 'webp');
  const srcSetAvif = srcSet(id, 'avif');
  return {
    id,
    src: url(id, 960, 'webp'),
    srcSetWebp,
    srcSetAvif,
    sources: [
      { type: 'image/avif', srcSet: srcSetAvif },
      { type: 'image/webp', srcSet: srcSetWebp },
    ],
    width,
    height,
    alt,
  };
}

export const PHOTOS = {
  apollo11: photo(
    'apollo11-liftoff',
    1600,
    900,
    'Apollo 11 Saturn V lifting off from Kennedy Space Center, 16 July 1969'
  ),
  columbia: photo(
    'shuttle-columbia',
    1600,
    1067,
    'Space Shuttle Columbia launching on a pillar of flame and exhaust'
  ),
  earthrise: photo(
    'earthrise',
    1600,
    1600,
    'Earthrise over the lunar horizon, photographed by Apollo 8 on 24 December 1968'
  ),
  blueMarble: photo(
    'blue-marble',
    1600,
    1600,
    'The Blue Marble — full disk of Earth photographed by Apollo 17'
  ),
  engineTest: photo(
    'engine-test',
    1600,
    1067,
    'Space Shuttle Main Engine test firing with a brilliant exhaust plume'
  ),
} as const;

export const DEFAULT_SIZES = '(max-width: 640px) 100vw, (max-width: 1100px) 70vw, 640px';
