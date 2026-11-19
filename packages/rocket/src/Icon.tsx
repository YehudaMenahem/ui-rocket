import { IconProps } from './types';

export function Icon({
  classes = '',
  iconClass = '',
  click,
  children,
  label,
}: IconProps) {
  const decorative = !label;

  return (
    <span
      className={`icon-wrapper ${classes}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={decorative ? true : undefined}
      onClick={click}
    >
      {children ? (
        children
      ) : (
        <i className={`icon ${iconClass}`} aria-hidden="true" />
      )}
    </span>
  );
}
