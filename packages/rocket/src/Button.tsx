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

  return (
    <button
      id={id}
      className={`button ${loading ? 'loading' : ''} ${styleBtn} ${size} ${
        rounded ? 'rounded' : ''
      } ${shadow ? 'shadow' : ''} ${classes} ${
        scrollToTop && position ? position : ''
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
      {loading && (
        <div className="loading-bg">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      )}
      <span className="label">{label}</span>
    </button>
  );
}
