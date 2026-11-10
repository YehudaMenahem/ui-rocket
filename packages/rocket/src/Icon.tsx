import { IconProps } from './types';

export function Icon({ classes = '', iconClass = '', click }: IconProps) {
  return (
    <span className={`icon-wrapper ${classes}`}>
      <i className={`icon ${iconClass}`} onClick={click}></i>
    </span>
  );
}
