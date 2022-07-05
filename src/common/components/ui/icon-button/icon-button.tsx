import React from 'react';
import classNames from 'classnames';
import styles from './icon-button.module.scss';

interface IButtonProps {
  image: string;
  height: string;
  width: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

function IconButton({
  image,
  height,
  width,
  label,
  disabled,
  onClick,
}: IButtonProps) {
  const buttonStyles = classNames(styles.button, {
    [styles.disabled]: disabled,
  });

  return (
    <button
      type="button"
      className={buttonStyles}
      onClick={onClick}
      aria-label={label}
    >
      <img src={image} alt="" style={{ height, width }} />
    </button>
  );
}

export default React.memo(IconButton);
