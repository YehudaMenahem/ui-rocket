import { Img } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';
import { DEFAULT_SIZES, SCREENSHOTS } from '../data/screenshots';

const meta = COMPONENTS.find((c) => c.id === 'img')!;
const hero = SCREENSHOTS.alleyCat;
const cover = SCREENSHOTS.monkeyIsland;
const square = SCREENSHOTS.keen;
const contain = SCREENSHOTS.loom;
const lazyShot = SCREENSHOTS.homm3;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function ImgPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Img"
      showPlayground
      controls={['color']}
      generateCode={() => `import { Img } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Img
      src="${hero.src}"
      alt="${hero.alt}"
      width={${hero.width}}
      height={${hero.height}}
      sources={[
        { type: 'image/avif', srcSet: '${hero.srcSetAvif}' },
        { type: 'image/webp', srcSet: '${hero.srcSetWebp}' },
      ]}
      srcSet="${hero.srcSetWebp}"
      sizes="${DEFAULT_SIZES}"
      classes="img-framed img-playground img-pixel"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      objectFit="cover"
    />
  )
}`}
      preview={() => (
        <Img
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sources={hero.sources}
          srcSet={hero.srcSetWebp}
          sizes={DEFAULT_SIZES}
          classes="img-framed img-playground img-pixel"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          objectFit="cover"
        />
      )}
      examples={
        <>
          <h3 id="responsive">Responsive picture</h3>
          <p className="txt">
            AVIF and WebP sources with <code>srcSet</code> + <code>sizes</code>.
            Screenshots are nearest-neighbor upscaled and rendered with{' '}
            <code>image-rendering: pixelated</code>.
          </p>
          <div className="ex">
            <div className="canvas canvas-stack">
              <Img
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sources={cover.sources}
                srcSet={cover.srcSetWebp}
                sizes={DEFAULT_SIZES}
                classes="img-framed img-demo-wide img-pixel"
                loading="lazy"
                decoding="async"
                objectFit="cover"
              />
            </div>
            <div className="exbar">
              <span>responsive.tsx</span>
            </div>
          </div>

          <h3 id="aspect-ratios">Aspect ratios &amp; object-fit</h3>
          <p className="txt">
            Framed crops at 16:9, 4:3, and 1:1. Cover fills the frame; contain
            letterboxes DOS 16:10 pixels on the navy matte.
          </p>
          <div className="ex">
            <div className="canvas canvas-stack img-aspect-row">
              <figure className="img-frame img-frame--16x9">
                <Img
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  sources={cover.sources}
                  srcSet={cover.srcSetWebp}
                  sizes="(max-width: 640px) 100vw, 320px"
                  classes="img-frame__media img-pixel"
                  loading="lazy"
                  decoding="async"
                  objectFit="cover"
                />
                <figcaption>16:9 · cover</figcaption>
              </figure>
              <figure className="img-frame img-frame--4x3">
                <Img
                  src={lazyShot.src}
                  alt={lazyShot.alt}
                  width={lazyShot.width}
                  height={lazyShot.height}
                  sources={lazyShot.sources}
                  srcSet={lazyShot.srcSetWebp}
                  sizes="(max-width: 640px) 100vw, 280px"
                  classes="img-frame__media img-pixel"
                  loading="lazy"
                  decoding="async"
                  objectFit="cover"
                />
                <figcaption>4:3 · cover</figcaption>
              </figure>
              <figure className="img-frame img-frame--1x1">
                <Img
                  src={square.src}
                  alt={square.alt}
                  width={square.width}
                  height={square.height}
                  sources={square.sources}
                  srcSet={square.srcSetWebp}
                  sizes="(max-width: 640px) 50vw, 220px"
                  classes="img-frame__media img-pixel"
                  loading="lazy"
                  decoding="async"
                  objectFit="cover"
                />
                <figcaption>1:1 · cover</figcaption>
              </figure>
              <figure className="img-frame img-frame--4x3 img-frame--contain">
                <Img
                  src={contain.src}
                  alt={contain.alt}
                  width={contain.width}
                  height={contain.height}
                  sources={contain.sources}
                  srcSet={contain.srcSetWebp}
                  sizes="(max-width: 640px) 100vw, 280px"
                  classes="img-frame__media img-pixel"
                  loading="lazy"
                  decoding="async"
                  objectFit="contain"
                />
                <figcaption>4:3 · contain</figcaption>
              </figure>
            </div>
            <div className="exbar">
              <span>aspect-ratios.tsx</span>
            </div>
          </div>

          <h3 id="lazy-loading">Lazy loading</h3>
          <p className="txt">
            Below-the-fold shots use <code>loading=&quot;lazy&quot;</code>. The
            playground hero above is the only eager image (
            <code>fetchPriority=&quot;high&quot;</code>).
          </p>
          <div className="ex">
            <div className="canvas canvas-stack">
              <Img
                src={lazyShot.src}
                alt={lazyShot.alt}
                width={lazyShot.width}
                height={lazyShot.height}
                sources={lazyShot.sources}
                srcSet={lazyShot.srcSetWebp}
                sizes={DEFAULT_SIZES}
                classes="img-framed img-demo-wide img-pixel"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                objectFit="cover"
              />
            </div>
            <div className="exbar">
              <span>lazy.tsx</span>
            </div>
          </div>

          <h3 id="fallback">Broken image fallback</h3>
          <p className="txt">
            When the primary <code>src</code> fails, <code>fallbackSrc</code>{' '}
            swaps in a local screenshot so the frame never collapses.
          </p>
          <div className="ex">
            <div className="canvas canvas-stack">
              <Img
                src="/does-not-exist-game.jpg"
                fallbackSrc={square.src}
                alt="Demonstration of fallback after a missing game screenshot"
                width={640}
                height={400}
                classes="img-framed img-demo-square img-pixel"
                loading="lazy"
                decoding="async"
                objectFit="cover"
              />
            </div>
            <div className="exbar">
              <span>fallback.tsx</span>
            </div>
          </div>

          <h3 id="decorative">Decorative (empty alt)</h3>
          <p className="txt">
            Purely decorative frames use <code>alt=&quot;&quot;</code> so
            assistive tech skips them.
          </p>
          <div className="ex">
            <div className="canvas">
              <Img
                src={contain.src}
                alt=""
                width={120}
                height={120}
                sources={contain.sources}
                srcSet={contain.srcSetWebp}
                sizes="120px"
                classes="img-framed img-demo-thumb img-pixel"
                loading="lazy"
                decoding="async"
                objectFit="cover"
              />
            </div>
            <div className="exbar">
              <span>decorative.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        {
          name: 'src',
          type: ['string'],
          defaultValue: '—',
          description: 'Primary image URL (required).',
        },
        {
          name: 'alt',
          type: ['string'],
          defaultValue: '""',
          description:
            'Accessible description. Use empty string for decorative images.',
        },
        {
          name: 'width',
          type: ['number', 'string'],
          defaultValue: '—',
          description:
            'Intrinsic width attribute — set with height to avoid CLS.',
        },
        {
          name: 'height',
          type: ['number', 'string'],
          defaultValue: '—',
          description:
            'Intrinsic height attribute — set with width to avoid CLS.',
        },
        {
          name: 'srcSet',
          type: ['string'],
          defaultValue: '—',
          description:
            'Native srcset on the img (also used as the picture fallback).',
        },
        {
          name: 'sizes',
          type: ['string'],
          defaultValue: '—',
          description: 'Native sizes hint for responsive selection.',
        },
        {
          name: 'sources',
          type: ['ImgSource[]'],
          defaultValue: '—',
          description:
            'Optional <source> list; when set, Img renders a <picture>.',
        },
        {
          name: 'loading',
          type: ['"lazy"', '"eager"'],
          defaultValue: '—',
          description: 'Native loading behavior. Prefer lazy below the fold.',
        },
        {
          name: 'decoding',
          type: ['"async"', '"sync"', '"auto"'],
          defaultValue: '"async"',
          description: 'Native decoding hint.',
        },
        {
          name: 'fetchPriority',
          type: ['"high"', '"low"', '"auto"'],
          defaultValue: '—',
          description: 'Fetch priority. Use high only for the LCP candidate.',
        },
        {
          name: 'fallbackSrc',
          type: ['string'],
          defaultValue: '—',
          description: 'URL swapped in when the primary src fails to load.',
        },
        {
          name: 'objectFit',
          type: ['"cover"', '"contain"', '"fill"', '"none"', '"scale-down"'],
          defaultValue: '—',
          description: 'CSS object-fit applied to the img.',
        },
        {
          name: 'classes',
          type: ['string'],
          defaultValue: '—',
          description: 'Class on picture (when used) or img.',
        },
        {
          name: 'click',
          type: ['() => void'],
          defaultValue: '—',
          description: 'Optional click handler.',
        },
      ]}
      a11y={[
        {
          key: 'alt',
          title: 'Meaningful alt',
          body: 'Describe what is on screen for informative shots; use alt="" when decorative.',
        },
        {
          key: 'cls',
          title: 'No layout shift',
          body: 'Always pair width and height (or an aspect-ratio frame) so space is reserved before decode.',
        },
        {
          key: 'lazy',
          title: 'Lazy by default below fold',
          body: 'Reserve loading="eager" and fetchPriority="high" for a single above-the-fold hero.',
        },
        {
          key: 'motion',
          title: 'Reduced motion',
          body: 'Frame transitions (if any) are disabled under prefers-reduced-motion.',
        },
      ]}
    />
  );
}
