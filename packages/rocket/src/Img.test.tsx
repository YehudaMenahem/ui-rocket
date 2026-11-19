import { render, fireEvent } from '@testing-library/react';
import { Img } from './Img';

test('Img renders with src and alt', () => {
  const { getByAltText } = render(<Img src="/a.webp" alt="Pad 39A" width={320} height={180} />);
  const img = getByAltText('Pad 39A');
  expect(img).toBeInTheDocument();
  expect(img.getAttribute('src')).toBe('/a.webp');
  expect(img.getAttribute('width')).toBe('320');
  expect(img.getAttribute('height')).toBe('180');
});

test('Img passes responsive and loading attributes', () => {
  const { getByAltText } = render(
    <Img
      src="/a.webp"
      alt="Rocket"
      srcSet="/a-480.webp 480w, /a-960.webp 960w"
      sizes="(max-width: 768px) 100vw, 640px"
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  );
  const img = getByAltText('Rocket');
  expect(img.getAttribute('srcset')).toContain('480w');
  expect(img.getAttribute('sizes')).toContain('100vw');
  expect(img.getAttribute('loading')).toBe('lazy');
  expect(img.getAttribute('decoding')).toBe('async');
});

test('Img renders picture sources when provided', () => {
  const { container, getByAltText } = render(
    <Img
      src="/a.webp"
      alt="Earth"
      sources={[
        { type: 'image/avif', srcSet: '/a.avif' },
        { type: 'image/webp', srcSet: '/a.webp' },
      ]}
    />
  );
  expect(container.querySelector('picture')).toBeInTheDocument();
  expect(container.querySelectorAll('source')).toHaveLength(2);
  expect(getByAltText('Earth')).toBeInTheDocument();
});

test('Img swaps to fallbackSrc on error', () => {
  const { getByAltText } = render(
    <Img src="/broken.jpg" fallbackSrc="/fallback.webp" alt="Broken demo" />
  );
  const img = getByAltText('Broken demo');
  fireEvent.error(img);
  expect(img.getAttribute('src')).toBe('/fallback.webp');
});
