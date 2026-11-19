import type { ImgSource } from '@ui-rocket/rocket';

export type ScreenshotId =
  | 'alley-cat'
  | 'commander-keen'
  | 'homm3'
  | 'monkey-island'
  | 'loom';

export interface ScreenshotAssets {
  id: ScreenshotId;
  /** Mid-size WebP used as the `<img src>` fallback. */
  src: string;
  srcSetWebp: string;
  srcSetAvif: string;
  sources: ImgSource[];
  /** Intrinsic width/height of the largest scaled master (for CLS). */
  width: number;
  height: number;
  alt: string;
}

const modules = import.meta.glob('../assets/screenshots/*.{webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

/** Integer NN scale widths present on disk for each screenshot. */
const WIDTHS: Record<ScreenshotId, readonly number[]> = {
  'alley-cat': [640, 960, 1600],
  'commander-keen': [640, 960, 1280],
  /** Native 800×600 → 1× / 2× */
  homm3: [800, 1600],
  /** Native 320×200 → 2× / 3× / 5× */
  'monkey-island': [640, 960, 1600],
  loom: [640, 960, 1600],
};

function url(id: ScreenshotId, width: number, ext: 'webp' | 'avif'): string {
  const key = `../assets/screenshots/${id}-${width}.${ext}`;
  const href = modules[key];
  if (!href) {
    throw new Error(`Missing screenshot asset: ${key}`);
  }
  return href;
}

function srcSet(id: ScreenshotId, ext: 'webp' | 'avif'): string {
  return WIDTHS[id].map((w) => `${url(id, w, ext)} ${w}w`).join(', ');
}

function shot(
  id: ScreenshotId,
  width: number,
  height: number,
  alt: string,
  srcWidth?: number
): ScreenshotAssets {
  const widths = WIDTHS[id];
  const mid = srcWidth ?? widths[Math.floor(widths.length / 2)];
  const srcSetWebp = srcSet(id, 'webp');
  const srcSetAvif = srcSet(id, 'avif');
  return {
    id,
    src: url(id, mid, 'webp'),
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

export const SCREENSHOTS = {
  alleyCat: shot(
    'alley-cat',
    1600,
    1000,
    'Alley Cat (1984): magenta CGA alley with the player cat on a clothesline outside apartment windows'
  ),
  keen: shot(
    'commander-keen',
    1280,
    800,
    'Commander Keen 4 (1991): Keen standing on green platforms in the Secret of the Oracle with HUD and score'
  ),
  homm3: shot(
    'homm3',
    1600,
    1200,
    'Heroes of Might and Magic III (1999): adventure map as a new campaign begins, with hero portrait and resource bar'
  ),
  monkeyIsland: shot(
    'monkey-island',
    1600,
    1000,
    'The Secret of Monkey Island (1990): Guybrush at the Melee Island docks at game start, with verb interface'
  ),
  loom: shot(
    'loom',
    1600,
    1000,
    'Loom (1990 VGA/CD-ROM): the weavers’ camp on the misty hillside with the distaff interface'
  ),
} as const;

/** @deprecated Use SCREENSHOTS — kept as an alias for existing imports during rename. */
export const PHOTOS = SCREENSHOTS;

export const DEFAULT_SIZES = '(max-width: 640px) 100vw, (max-width: 1100px) 70vw, 640px';
