import { ButtonProps } from './types';

export function Button({
  label,
  styleBtn = 'solid',
  size = 'small',
  loading = false,
  classes = '',
  id,
  rounded = false,
  shadow = false,
  disabled = false,
  children,
  scrollToTop = false,
  position,
  color = 'brand',
  radius,
  click,
}: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (scrollToTop) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    if (click) {
      click(event);
    }
  };

  const colorClass = color !== 'brand' ? `color-${color}` : '';
  const radiusClass = radius ? `radius-${radius}` : rounded ? 'rounded' : '';

  return (
    <button
      id={id}
      className={`button btn ${loading ? 'loading' : ''} ${styleBtn} ${size} ${
        shadow ? 'shadow' : ''
      } ${colorClass} ${radiusClass} ${classes} ${
        scrollToTop && position ? position : ''
      }`}
      onClick={handleClick}
      disabled={disabled}
      aria-busy={loading || undefined}
    >
      {children}
      {loading && (
        <div className="loading-bg">
          <div className="stage">
            <div className="spin" />
          </div>
        </div>
      )}
      <span className="label">{label}</span>
    </button>
  );
}
