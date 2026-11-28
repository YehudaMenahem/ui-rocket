// @vitest-environment node
import { renderToString } from 'react-dom/server';
import { Modal } from './Modal';

test('renders nothing on the server, open or closed', () => {
  expect(() =>
    renderToString(<Modal show closeModal={() => {}} modalTitle="SSR" />)
  ).not.toThrow();
  expect(
    renderToString(<Modal show closeModal={() => {}} modalTitle="SSR" />)
  ).toBe('');
  expect(renderToString(<Modal show={false} closeModal={() => {}} />)).toBe('');
});
